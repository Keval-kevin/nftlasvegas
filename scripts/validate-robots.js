import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXPECTED_BASE_URL = 'https://nftlasvegas.io';
const ROBOTS_PATH = path.join(__dirname, '../public/robots.txt');
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

class RobotsValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.info = [];
  }

  addError(message) {
    this.errors.push(message);
  }

  addWarning(message) {
    this.warnings.push(message);
  }

  addInfo(message) {
    this.info.push(message);
  }

  validate() {
    console.log('🤖 Validating robots.txt...\n');

    // Check if robots.txt exists
    if (!fs.existsSync(ROBOTS_PATH)) {
      this.addError('robots.txt file not found at public/robots.txt');
      return this.report();
    }

    const content = fs.readFileSync(ROBOTS_PATH, 'utf-8');
    const lines = content.split('\n').map(line => line.trim());

    this.validateFormat(lines);
    this.validateSitemap(lines);
    this.validateUserAgents(lines);
    this.validateDirectives(lines);
    this.checkSitemapExists();
    this.validateSitemapURL(lines);

    return this.report();
  }

  validateFormat(lines) {
    // Check for empty file
    if (lines.every(line => line === '' || line.startsWith('#'))) {
      this.addError('robots.txt is empty or contains only comments');
      return;
    }

    // Check for proper line endings
    const rawContent = fs.readFileSync(ROBOTS_PATH, 'utf-8');
    if (rawContent.includes('\r\n')) {
      this.addWarning('File uses Windows line endings (CRLF). Consider using Unix line endings (LF)');
    }

    this.addInfo('✓ File format is valid');
  }

  validateSitemap(lines) {
    const sitemapLines = lines.filter(line => 
      line.toLowerCase().startsWith('sitemap:')
    );

    if (sitemapLines.length === 0) {
      this.addError('No Sitemap directive found. Add "Sitemap: https://nftlasvegas.io/sitemap.xml"');
      return;
    }

    if (sitemapLines.length > 1) {
      this.addWarning(`Multiple Sitemap directives found (${sitemapLines.length}). Only one is typically needed.`);
    }

    // Check sitemap URL format
    sitemapLines.forEach((line, index) => {
      const sitemapUrl = line.substring(line.indexOf(':') + 1).trim();
      
      if (!sitemapUrl.startsWith('http://') && !sitemapUrl.startsWith('https://')) {
        this.addError(`Sitemap URL must be absolute (include protocol): ${sitemapUrl}`);
      }

      if (!sitemapUrl.includes(EXPECTED_BASE_URL)) {
        this.addWarning(`Sitemap URL doesn't match expected domain: ${EXPECTED_BASE_URL}`);
      }

      if (!sitemapUrl.endsWith('/sitemap.xml')) {
        this.addWarning(`Sitemap URL should end with /sitemap.xml: ${sitemapUrl}`);
      }

      if (sitemapUrl.includes('www.nftlasvegas.com') || sitemapUrl.includes('nftlasvegas.com')) {
        this.addError(`Sitemap URL has incorrect domain. Should be: ${EXPECTED_BASE_URL}/sitemap.xml`);
      }
    });

    this.addInfo(`✓ Found ${sitemapLines.length} Sitemap directive(s)`);
  }

  validateUserAgents(lines) {
    const userAgentLines = lines.filter(line => 
      line.toLowerCase().startsWith('user-agent:')
    );

    if (userAgentLines.length === 0) {
      this.addError('No User-agent directive found. At least one is required.');
      return;
    }

    // Check for wildcard user-agent
    const hasWildcard = userAgentLines.some(line => 
      line.toLowerCase().includes('user-agent: *')
    );

    if (!hasWildcard) {
      this.addWarning('No wildcard "User-agent: *" found. Consider adding one for all crawlers.');
    }

    // Check for common bots
    const commonBots = ['googlebot', 'bingbot'];
    commonBots.forEach(bot => {
      const hasBot = userAgentLines.some(line => 
        line.toLowerCase().includes(bot.toLowerCase())
      );
      if (hasBot) {
        this.addInfo(`✓ Found ${bot} configuration`);
      }
    });

    this.addInfo(`✓ Found ${userAgentLines.length} User-agent directive(s)`);
  }

  validateDirectives(lines) {
    const validDirectives = [
      'user-agent', 'allow', 'disallow', 'crawl-delay', 
      'sitemap', 'host', 'request-rate', 'visit-time'
    ];

    lines.forEach((line, index) => {
      if (line === '' || line.startsWith('#')) return;

      const directive = line.split(':')[0].toLowerCase().trim();
      
      if (directive && !validDirectives.includes(directive)) {
        this.addWarning(`Line ${index + 1}: Unknown directive "${directive}"`);
      }

      // Check for proper formatting
      if (line.includes(':') && !line.includes(': ') && !line.startsWith('#')) {
        this.addWarning(`Line ${index + 1}: Missing space after colon - "${line}"`);
      }
    });
  }

  checkSitemapExists() {
    if (!fs.existsSync(SITEMAP_PATH)) {
      this.addError('sitemap.xml file not found at public/sitemap.xml');
      return;
    }

    // Validate sitemap.xml is valid XML
    try {
      const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
      
      if (!sitemapContent.includes('<?xml version="1.0"')) {
        this.addError('sitemap.xml is missing XML declaration');
      }

      if (!sitemapContent.includes('<urlset')) {
        this.addError('sitemap.xml is missing <urlset> element');
      }

      // Count URLs in sitemap
      const urlCount = (sitemapContent.match(/<url>/g) || []).length;
      this.addInfo(`✓ sitemap.xml exists with ${urlCount} URL(s)`);

      if (urlCount === 0) {
        this.addWarning('sitemap.xml contains no URLs');
      }

      if (urlCount > 50000) {
        this.addWarning('sitemap.xml has more than 50,000 URLs. Consider using a sitemap index.');
      }

    } catch (error) {
      this.addError(`Error reading sitemap.xml: ${error.message}`);
    }
  }

  validateSitemapURL(lines) {
    const sitemapLine = lines.find(line => 
      line.toLowerCase().startsWith('sitemap:')
    );

    if (!sitemapLine) return;

    const declaredUrl = sitemapLine.substring(sitemapLine.indexOf(':') + 1).trim();

    // Check if sitemap.xml URLs match robots.txt declaration
    try {
      const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
      const locRegex = /<loc>(.*?)<\/loc>/g;
      const urls = [];
      let match;

      while ((match = locRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
      }

      if (urls.length > 0) {
        const firstUrl = urls[0];
        const sitemapBaseDomain = new URL(firstUrl).origin;
        const robotsBaseDomain = new URL(declaredUrl).origin;

        if (sitemapBaseDomain !== robotsBaseDomain) {
          this.addError(`Domain mismatch: robots.txt references ${robotsBaseDomain} but sitemap.xml uses ${sitemapBaseDomain}`);
        } else {
          this.addInfo('✓ Domain consistency verified between robots.txt and sitemap.xml');
        }
      }
    } catch (error) {
      this.addWarning(`Could not verify sitemap URLs: ${error.message}`);
    }
  }

  report() {
    console.log('\n' + '='.repeat(60));
    console.log('VALIDATION REPORT');
    console.log('='.repeat(60) + '\n');

    if (this.errors.length > 0) {
      console.log('❌ ERRORS:');
      this.errors.forEach(error => console.log(`   ${error}`));
      console.log('');
    }

    if (this.warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      this.warnings.forEach(warning => console.log(`   ${warning}`));
      console.log('');
    }

    if (this.info.length > 0) {
      console.log('ℹ️  INFO:');
      this.info.forEach(info => console.log(`   ${info}`));
      console.log('');
    }

    console.log('='.repeat(60));
    console.log(`Summary: ${this.errors.length} error(s), ${this.warnings.length} warning(s)`);
    console.log('='.repeat(60) + '\n');

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All checks passed! Your robots.txt is valid.\n');
      return true;
    }

    if (this.errors.length > 0) {
      console.log('❌ Validation failed. Please fix the errors above.\n');
      return false;
    }

    if (this.warnings.length > 0) {
      console.log('⚠️  Validation passed with warnings. Consider addressing them.\n');
      return true;
    }
  }
}

// Run validation
const validator = new RobotsValidator();
const isValid = validator.validate();

process.exit(isValid ? 0 : 1);
