import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  const footerSections = [{
    title: "Solutions",
    links: [{
      name: "Funding Enablement",
      href: "/funding-enablement"
    }, {
      name: "Tech Development",
      href: "/tech-development"
    }, {
      name: "Product Manufacturing",
      href: "/product-manufacturing"
    }, {
      name: "Platform Launch",
      href: "/platform-launch"
    }, {
      name: "Distribution",
      href: "/distribution"
    }]
  }, {
    title: "Services",
    links: [{
      name: "AI Voice System",
      href: "/ai-voice"
    }, {
      name: "Consulting",
      href: "/services"
    }, {
      name: "Case Studies",
      href: "/case-studies"
    }, {
      name: "Onboarding",
      href: "/onboarding"
    }, {
      name: "Contact",
      href: "/contact"
    }]
  }, {
    title: "Company",
    links: [{
      name: "About NFT Las Vegas",
      href: "/about"
    }, {
      name: "Our Solutions",
      href: "/solutions"
    }, {
      name: "Partners",
      href: "#partners"
    }, {
      name: "Contact Us",
      href: "/contact"
    }, {
      name: "Sitemap",
      href: "/sitemap"
    }]
  }];
  return <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover-scale cursor-pointer">
              NFT Las Vegas™
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your all-in-one partner for marketing, branding & enterprise-level tech development. 
              From funding to launch, powered by AI, Blockchain & Human Creativity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-3" />
                <span>contact@nftlasvegas.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (702) 555-0100</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Las Vegas, Nevada, USA</span>
              </div>
            </div>
            
            {/* Partners Section */}
            <div id="partners" className="mb-6">
              
              
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 hover:border-gray-600 transition-colors" />
                <Button className="bg-blue-600 hover:bg-blue-700 btn-animate hover-lift">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => <div key={section.title} className="animate-slide-in-right" style={{
          animationDelay: `${sectionIndex * 0.1}s`
        }}>
              <h4 className="text-lg font-semibold mb-4 lg:mb-6">{section.title}</h4>
              <ul className="space-y-2 lg:space-y-3">
                {section.links.map((link, linkIndex) => <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block" style={{
                transitionDelay: `${linkIndex * 0.05}s`
              }}>
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in animate-delay-500">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NFT Las Vegas™. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[{
              icon: Linkedin,
              href: "https://www.linkedin.com/company/nftlasvegas/",
              label: "LinkedIn"
            }, {
              icon: Twitter,
              href: "https://x.com/nftlasvegas",
              label: "Twitter"
            }, {
              icon: Github,
              href: "https://www.facebook.com/people/NFT-Las-Vegas/100088656705965",
              label: "Facebook"
            }, {
              icon: Mail,
              href: "https://www.instagram.com/nftlasvegas/",
              label: "Instagram"
            }].map((social, index) => <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : '_self'} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-gray-400 hover:text-white transition-all duration-200 hover-scale" style={{
              animationDelay: `${0.6 + index * 0.1}s`
            }} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};