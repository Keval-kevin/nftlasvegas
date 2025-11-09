import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import nftVegasLogoPink from "@/assets/nft-vegas-logo-pink.png";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };
    window.addEventListener('scroll', throttledScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const navItems = [{
    name: "Home",
    href: "/"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Multiverse",
    href: "/multiverse"
  }, {
    name: "Solutions",
    href: "/solutions"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Non Profit",
    href: "/nonprofit"
  }, {
    name: "Takeover",
    href: "/takeover"
  }, {
    name: "Bookstore",
    href: "/bookstore"
  }, {
    name: "Case Studies",
    href: "/case-studies"
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-background/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src={nftVegasLogoPink} 
                alt="NFT Las Vegas™ Distribution Label" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map(item => {
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`px-2 xl:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  {item.name}
                </Link>;
          })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full font-medium transition-all duration-300 whitespace-nowrap">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 touch-friendly" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-2 pb-4 space-y-1 bg-muted/95 rounded-b-lg mt-2">
            {navItems.map(item => {
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>;
          })}
            <div className="px-4 pt-4">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full font-medium">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>;
};