import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && subscribed) {
      console.log("Newsletter signup:", email);
      // Add newsletter signup logic here
    }
  };

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Branding & Newsletter */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 leading-tight tracking-wide">
              ONLY AT<br />NFT LAS VEGAS™
            </h2>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-4 font-semibold">
                JOIN OUR NEWSLETTER
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="text-sm mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b border-white/30 rounded-none px-0 focus:border-white transition-colors"
                    required
                  />
                </div>
                
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="newsletter-consent"
                    checked={subscribed}
                    onCheckedChange={(checked) => setSubscribed(checked as boolean)}
                    className="mt-1 border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label
                    htmlFor="newsletter-consent"
                    className="text-sm text-gray-300 leading-relaxed cursor-pointer"
                  >
                    Yes, subscribe me to your newsletter *
                  </label>
                </div>
                
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-2 font-medium transition-all"
                  disabled={!email || !subscribed}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Right Columns - Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {/* Our Links */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 font-semibold">
                OUR LINKS
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://linktr.ee/nftlasvegas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    The Pseudo Testament
                  </a>
                </li>
                <li>
                  <Link to="/multiverse" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Multiverse
                  </Link>
                </li>
                <li>
                  <Link to="/nonprofit" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Non Profit
                  </Link>
                </li>
                <li>
                  <Link to="/bookstore" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Bookstore
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 font-semibold">
                SOCIAL
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/nftlasvegas/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/people/NFT-Las-Vegas/100088656705965" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/nftlasvegas/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/nftlasvegas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    X
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 font-semibold">
                CONTACT
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:NFTLasVegas@NFTLasVegas.io" 
                    className="text-gray-300 hover:text-white transition-colors text-sm break-words"
                  >
                    NFTLasVegas@NFTLasVegas.io
                  </a>
                </li>
                <li className="text-gray-300 text-sm leading-relaxed">
                  7429 Royal Crystal St.<br />
                  Las Vegas, NV 89149
                </li>
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 font-semibold">
                POLICY
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/terms-and-conditions" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/accessibility-statement" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2025 MADE WITH LOVE BY NFT LAS VEGAS™ LIMITED. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};