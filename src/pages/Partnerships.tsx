import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  {
    id: "x-ads",
    name: "X Ads",
    logo: "/partners/x-ads.webp",
    tagline: "Official advertising platform of X",
    description: "NFT Las Vegas™ is honored to collaborate with X Ads, the official advertising platform of X (formerly Twitter), to deliver strategic, high-impact media solutions across a dynamic global audience. Through this partnership, our ecosystem gains privileged access to advanced campaign tools, audience intelligence, and priority placement opportunities."
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logo: "/partners/hubspot-logo.png",
    tagline: "CRM and marketing automation platform",
    description: "HubSpot provides world-class CRM, marketing, sales, and service software that helps businesses grow better. Through strategic implementation and training, we help clients leverage HubSpot's powerful ecosystem to streamline operations, nurture leads, and drive sustainable revenue growth."
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "/partners/salesforce-logo.svg",
    tagline: "Leading enterprise CRM solution",
    description: "Salesforce is the world's #1 CRM platform, enabling businesses to connect with customers in revolutionary ways. Our certified experts help clients harness Salesforce's robust capabilities to optimize sales processes, enhance customer experiences, and unlock data-driven insights at scale."
  }
];

const Partnerships = () => {
  return (
    <>
      <SEOHead
        title="Our Top-of-the-Line Partnerships - NFT Las Vegas™"
        description="We collaborate with industry-leading platforms like X Ads, HubSpot, and Salesforce to deliver exceptional results for our clients."
        keywords="partnerships, X Ads, HubSpot, Salesforce, strategic partners, NFT Las Vegas"
      />
      
      <div className="min-h-dvh bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Users className="w-4 h-4" />
                  Partner Network
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Our Top-of-the-Line <span className="text-gradient">Partnerships</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  We collaborate with industry-leading platforms to deliver exceptional results for our clients
                </p>
              </div>

              {/* Partners Grid */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {partners.map((partner) => (
                  <Card 
                    key={partner.id} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <CardHeader>
                      <div className="bg-white rounded-lg p-8 mb-4 flex items-center justify-center w-full min-h-[140px] shadow-sm border border-border">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="h-20 sm:h-24 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors text-center">
                        {partner.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        {partner.tagline}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12">
                <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Interested in Our Partner Network?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Connect with us to learn how our partnerships can benefit your business and accelerate your growth.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Partnerships;
