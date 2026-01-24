import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Onboarding", href: "/onboarding" },
        { name: "Funding Enablement", href: "/funding-enablement" },
        { name: "Tech Development", href: "/tech-development" },
        { name: "Product Manufacturing", href: "/product-manufacturing" },
        { name: "Platform Launch", href: "/platform-launch" },
        { name: "Distribution", href: "/distribution" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/multiverse" },
        { name: "Multiverse", href: "/multiverse" },
        { name: "Non Profit", href: "/nonprofit" },
        { name: "Takeover", href: "/takeover" },
        { name: "Bookstore", href: "/bookstore" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "AI Voice System", href: "/ai-voice" },
        { name: "Client Portal", href: "https://portal.nftlasvegas.io/client", external: true },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/contact#faq" },
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover-scale cursor-pointer">
              NFT Las Vegas™
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href="mailto:QuinceyLee@NFTLasVegas.io" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-3" />
                <span>QuinceyLee@NFTLasVegas.io</span>
              </a>
              <a 
                href="tel:+17252406130" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-3" />
                <span>+1(725)240-6130</span>
              </a>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Las Vegas, Nevada, USA</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Stay Updated ♥️</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 hover:border-gray-600 transition-colors" 
                />
                <Button className="bg-blue-600 hover:bg-blue-700 btn-animate hover-lift">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={section.title} 
              className="animate-slide-in-right" 
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <h4 className="text-lg font-semibold mb-4 lg:mb-6">{section.title}</h4>
              <ul className="space-y-2 lg:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block" 
                        style={{ transitionDelay: `${linkIndex * 0.05}s` }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block" 
                        style={{ transitionDelay: `${linkIndex * 0.05}s` }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-fade-in animate-delay-500">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="text-gray-400 text-sm">
                © 2026 NFT Las Vegas™. All rights reserved.
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm">
                <Link 
                  to="/terms-and-conditions" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  Terms & Conditions
                </Link>
                <span className="hidden sm:inline text-gray-600">•</span>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline text-gray-600">•</span>
                <Link 
                  to="/cookie-policy" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  Cookie Policy
                </Link>
                <span className="hidden sm:inline text-gray-600">•</span>
                <Link 
                  to="/accessibility-statement" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  Accessibility
                </Link>
                <span className="hidden sm:inline text-gray-600">•</span>
                <a 
                  href="/sitemap.xml" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
                >
                  Sitemap
                </a>
              </div>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/nftlasvegas/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/nftlasvegas", label: "Twitter" },
                { icon: Facebook, href: "https://www.facebook.com/people/NFT-Las-Vegas/100088656705965", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/nftlasvegas/", label: "Instagram" },
              ].map((social, index) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-all duration-200 hover-scale" 
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }} 
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};