import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-2xl pointer-events-auto animate-slide-in-up">
        <Card className="border-2 border-primary/50 shadow-2xl backdrop-blur-md bg-card/95">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">We Value Your Privacy</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleDecline}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pb-3">
            <CardDescription className="text-base leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and provide personalized content. By clicking "Accept All", you consent to 
              our use of cookies.{" "}
              <Link 
                to="/cookie-policy" 
                className="text-primary hover:underline font-medium"
              >
                Learn more
              </Link>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleAccept} 
              className="w-full sm:flex-1"
              size="lg"
            >
              Accept All
            </Button>
            <Button 
              onClick={handleDecline} 
              variant="outline" 
              className="w-full sm:flex-1"
              size="lg"
            >
              Decline
            </Button>
            <Button 
              asChild
              variant="ghost" 
              className="w-full sm:w-auto"
              size="lg"
            >
              <Link to="/cookie-policy">
                Customize
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
