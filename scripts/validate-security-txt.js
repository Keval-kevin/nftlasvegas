import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SECURITY_TXT_PATH = path.join(__dirname, '../public/.well-known/security.txt');
const EXPECTED_BASE_URL = 'https://nftlasvegas.io';

class SecurityTxtValidator {
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
    console.log('🔒 Validating security.txt (RFC 9116)...\n');

    if (!fs.existsSync(SECURITY_TXT_PATH)) {
      this.addError('security.txt not found at public/.well-known/security.txt');
      return this.report();
    }

    const content = fs.readFileSync(SECURITY_TXT_PATH, 'utf-8');
    const lines = content.split('\n').map(line => line.trim());

    this.validateRequiredFields(lines);
    this.validateFieldFormat(lines);
    this.validateExpiration(lines);
    this.validateURLs(lines);
    this.checkOptionalFields(lines);
    this.validateCanonical(lines);

    return this.report();
  }

  validateRequiredFields(lines) {
    // RFC 9116 requires: Contact and Expires
    const requiredFields = ['Contact', 'Expires'];
    
    requiredFields.forEach(field => {
      const hasField = lines.some(line => 
        line.startsWith(`${field}:`)
      );
      
      if (!hasField) {
        this.addError(`Missing required field: ${field}`);
      } else {
        this.addInfo(`✓ Found required field: ${field}`);
      }
    });

    // Check for at least one Contact field
    const contactCount = lines.filter(line => line.startsWith('Contact:')).length;
    if (contactCount === 0) {
      this.addError('At least one Contact field is required');
    } else if (contactCount === 1) {
      this.addWarning('Consider adding multiple contact methods for redundancy');
    } else {
      this.addInfo(`✓ Found ${contactCount} contact methods`);
    }
  }

  validateFieldFormat(lines) {
    const validFields = [
      'Acknowledgments', 'Canonical', 'Contact', 'Encryption', 
      'Expires', 'Hiring', 'Policy', 'Preferred-Languages'
    ];

    lines.forEach((line, index) => {
      if (line === '' || line.startsWith('#')) return;

      const fieldName = line.split(':')[0].trim();
      
      if (fieldName && !validFields.includes(fieldName)) {
        this.addWarning(`Line ${index + 1}: Unknown field "${fieldName}" (not in RFC 9116)`);
      }

      // Check for proper spacing after colon
      if (line.includes(':') && !line.startsWith('#')) {
        const colonIndex = line.indexOf(':');
        if (line[colonIndex + 1] !== ' ') {
          this.addWarning(`Line ${index + 1}: Missing space after colon`);
        }
      }
    });
  }

  validateExpiration(lines) {
    const expiresLine = lines.find(line => line.startsWith('Expires:'));
    
    if (!expiresLine) return;

    const dateString = expiresLine.substring(expiresLine.indexOf(':') + 1).trim();
    
    try {
      const expirationDate = new Date(dateString);
      const now = new Date();
      
      if (isNaN(expirationDate.getTime())) {
        this.addError(`Invalid Expires date format: ${dateString}. Use ISO 8601 format.`);
        return;
      }

      if (expirationDate < now) {
        this.addError(`security.txt has expired! Expires date: ${dateString}`);
      } else {
        const daysUntilExpiry = Math.floor((expirationDate - now) / (1000 * 60 * 60 * 24));
        
        if (daysUntilExpiry < 30) {
          this.addWarning(`security.txt expires soon (${daysUntilExpiry} days). Consider updating.`);
        } else if (daysUntilExpiry > 365) {
          this.addWarning(`Expiration date is more than 1 year away. RFC 9116 recommends ≤1 year.`);
        } else {
          this.addInfo(`✓ Valid expiration date (${daysUntilExpiry} days remaining)`);
        }
      }
    } catch (error) {
      this.addError(`Error parsing Expires date: ${error.message}`);
    }
  }

  validateURLs(lines) {
    const urlFields = ['Contact', 'Policy', 'Canonical', 'Encryption', 'Acknowledgments', 'Hiring'];
    
    lines.forEach((line, index) => {
      const field = line.split(':')[0].trim();
      
      if (urlFields.includes(field)) {
        const value = line.substring(line.indexOf(':') + 1).trim();
        
        // Check if it's a URL (not mailto:)
        if (value.startsWith('http://') || value.startsWith('https://')) {
          if (value.startsWith('http://')) {
            this.addWarning(`Line ${index + 1}: Consider using HTTPS instead of HTTP`);
          }
          
          if (!value.includes(EXPECTED_BASE_URL) && field !== 'Encryption') {
            this.addWarning(`Line ${index + 1}: URL doesn't match expected domain (${EXPECTED_BASE_URL})`);
          }
        } else if (value.startsWith('mailto:')) {
          // Validate email format
          const email = value.substring(7);
          if (!email.includes('@')) {
            this.addError(`Line ${index + 1}: Invalid email format`);
          } else {
            this.addInfo(`✓ Valid email contact: ${email}`);
          }
        } else {
          this.addWarning(`Line ${index + 1}: Value should be a URL or mailto: URI`);
        }
      }
    });
  }

  checkOptionalFields(lines) {
    const recommendedOptional = [
      { field: 'Policy', reason: 'Helps researchers understand your security disclosure process' },
      { field: 'Canonical', reason: 'Prevents confusion about the authoritative version' },
      { field: 'Preferred-Languages', reason: 'Helps international researchers' },
      { field: 'Encryption', reason: 'Allows secure communication of sensitive vulnerabilities' }
    ];

    recommendedOptional.forEach(({ field, reason }) => {
      const hasField = lines.some(line => line.startsWith(`${field}:`));
      if (hasField) {
        this.addInfo(`✓ Found recommended field: ${field}`);
      } else {
        this.addWarning(`Missing recommended field: ${field} - ${reason}`);
      }
    });
  }

  validateCanonical(lines) {
    const canonicalLine = lines.find(line => line.startsWith('Canonical:'));
    
    if (!canonicalLine) return;

    const canonicalUrl = canonicalLine.substring(canonicalLine.indexOf(':') + 1).trim();
    const expectedCanonical = `${EXPECTED_BASE_URL}/.well-known/security.txt`;
    
    if (canonicalUrl !== expectedCanonical) {
      this.addWarning(`Canonical URL should be: ${expectedCanonical}`);
    } else {
      this.addInfo('✓ Canonical URL is correct');
    }
  }

  report() {
    console.log('\n' + '='.repeat(60));
    console.log('SECURITY.TXT VALIDATION REPORT (RFC 9116)');
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
      console.log('✅ All checks passed! Your security.txt is RFC 9116 compliant.\n');
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
const validator = new SecurityTxtValidator();
const isValid = validator.validate();

process.exit(isValid ? 0 : 1);
