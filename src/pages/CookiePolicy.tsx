import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Shield, Settings, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CookiePolicy = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated successfully.",
    });
  };

  const cookieTypes = [
    {
      id: "necessary",
      icon: Shield,
      title: "Necessary Cookies",
      description: "Essential for the website to function properly. These cannot be disabled.",
      required: true,
      examples: "Session management, security, basic site functionality",
    },
    {
      id: "analytics",
      icon: Settings,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      required: false,
      examples: "Google Analytics, page views, user behavior tracking",
    },
    {
      id: "marketing",
      icon: Cookie,
      title: "Marketing Cookies",
      description: "Used to track visitors across websites for advertising purposes.",
      required: false,
      examples: "Social media pixels, advertising networks, retargeting",
    },
    {
      id: "preferences",
      icon: CheckCircle2,
      title: "Preference Cookies",
      description: "Remember your settings and choices for a better experience.",
      required: false,
      examples: "Language preferences, theme settings, personalization",
    },
  ];

  return (
    <>
      <SEOHead
        title="Cookie Policy - NFT Las Vegas™"
        description="Learn about how NFT Las Vegas uses cookies and manages your data privacy. Customize your cookie preferences and understand our data practices."
        keywords="cookie policy, privacy, data protection, GDPR, cookie consent"
      />
      
      <div className="min-h-dvh bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                <Cookie className="w-4 h-4" />
                Cookie Management
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Cookie <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We respect your privacy and give you control over your data. Learn about our cookie practices and customize your preferences.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last Updated: January 2025
              </p>
            </div>
          </section>

          {/* What Are Cookies */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Are Cookies?
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. 
                  They help websites remember your actions and preferences over time, providing a more 
                  personalized and efficient browsing experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At NFT Las Vegas™, we use cookies to enhance your experience, analyze site performance, 
                  and provide relevant content. You have full control over which cookies you accept.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Types */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Types of Cookies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {cookieTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <Card key={type.id} className="hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-6 h-6 text-primary" />
                            <CardTitle className="text-xl">{type.title}</CardTitle>
                          </div>
                          {type.required ? (
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                              Required
                            </span>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences[type.id as keyof typeof preferences]}
                                onChange={(e) => setPreferences({
                                  ...preferences,
                                  [type.id]: e.target.checked
                                })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                            </label>
                          )}
                        </div>
                        <CardDescription className="mt-2">
                          {type.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          <strong>Examples:</strong> {type.examples}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleSavePreferences}
                  className="min-w-[200px]"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </section>

          {/* How to Control Cookies */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Managing Your Cookie Preferences
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Browser Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Most web browsers allow you to control cookies through their settings. 
                      You can typically find these options in the "Privacy" or "Settings" menu.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Block all cookies</li>
                      <li>Allow cookies from specific sites only</li>
                      <li>Delete cookies when you close your browser</li>
                      <li>View and delete existing cookies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Third-Party Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      You can opt out of targeted advertising through industry tools like the 
                      Network Advertising Initiative (NAI) or Digital Advertising Alliance (DAA) 
                      opt-out pages.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions About Cookies?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you have any questions about our cookie policy or data practices, 
                we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:privacy@nftlasvegas.com">
                    Contact Privacy Team
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/privacy-policy">
                    View Privacy Policy
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CookiePolicy;
