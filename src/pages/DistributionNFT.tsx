import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const channels = [
  {
    icon: Globe,
    title: "Digital Channels",
    description: "Online marketplaces, e-commerce platforms, and direct-to-consumer strategies.",
    platforms: ["Amazon", "Shopify", "Website", "App Stores"]
  },
  {
    icon: Package,
    title: "Retail Distribution",
    description: "Physical retail partnerships, wholesale networks, and brick-and-mortar presence.",
    platforms: ["Big Box Retailers", "Specialty Stores", "Distributors", "Franchises"]
  },
  {
    icon: Users,
    title: "Partner Networks",
    description: "Strategic partnerships, resellers, and white-label opportunities.",
    platforms: ["VARs", "System Integrators", "Resellers", "OEM Partners"]
  },
  {
    icon: TrendingUp,
    title: "International Expansion",
    description: "Global market entry, localization, and international logistics.",
    platforms: ["Europe", "Asia-Pacific", "Latin America", "Middle East"]
  }
];

const partners = [
  "Amazon", "Walmart", "Best Buy", "Target", "Shopify", 
  "Salesforce", "Microsoft", "Google", "Apple", "Meta",
  "Alibaba", "Tencent", "Rakuten", "Mercado Libre"
];

const featuredPartners = [
  {
    name: "X Ads",
    logo: "/partners/x-ads.webp",
    description: "Preferred partner for paid media on X (formerly Twitter)"
  },
  {
    name: "HubSpot",
    logo: "/partners/hubspot-logo.png",
    description: "CRM and marketing automation platform partner"
  },
  {
    name: "Salesforce",
    logo: "/partners/salesforce-logo.svg",
    description: "Leading enterprise CRM and customer success platform"
  }
];

const DistributionNFT = () => {
  return (
    <>
      <SEOHead
        title="Distribution - NFT Las Vegas™"
        description="Strategic distribution partnerships and multi-channel strategies to maximize your market reach and revenue growth."
        keywords="distribution, channel strategy, partnerships, retail, e-commerce, global expansion"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Globe className="w-4 h-4" />
                  Market Distribution
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Reach <span className="text-gradient">Every Market</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  Leverage our global partner network and multi-channel distribution strategies 
                  to maximize your market penetration and accelerate revenue growth.
                </p>

                <Link to="/partnerships">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Explore Distribution Partnerships
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Distribution Channels */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Distribution <span className="text-gradient">Channels</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Multi-channel strategies tailored to your product and market
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {channels.map((channel, index) => (
                  <div 
                    key={channel.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{channel.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{channel.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {channel.platforms.map((platform) => (
                        <span 
                          key={platform}
                          className="px-3 py-1.5 bg-muted border border-border rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Channel Strategy Diagram */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Strategic <span className="text-gradient">Approach</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Data-driven channel selection and optimization
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Market Analysis",
                    description: "Identify optimal channels based on your product, audience, and market dynamics"
                  },
                  {
                    step: "2",
                    title: "Partner Selection",
                    description: "Vet and select distribution partners aligned with your brand and goals"
                  },
                  {
                    step: "3",
                    title: "Performance Optimization",
                    description: "Continuously monitor and optimize channel performance for maximum ROI"
                  }
                ].map((phase) => (
                  <div 
                    key={phase.step}
                    className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 text-center"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mt-4 mb-3">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Network */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Partner Network</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Established relationships with global leaders
                </p>
              </div>

              {/* Featured Partners with Logos */}
              <div className="mb-12">
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {featuredPartners.map((partner) => (
                    <div 
                      key={partner.name}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                    >
                      <div className="bg-white rounded-lg p-6 mb-4 flex items-center justify-center min-h-[100px] border border-border">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="h-16 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-center">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12">
                <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Scale Distribution?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your distribution goals and create a strategic plan to reach new markets.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Request Distribution Strategy
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

export default DistributionNFT;
