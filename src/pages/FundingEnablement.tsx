import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Handshake, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fundingTypes = [
  {
    icon: Users,
    title: "Business Loans",
    description: "Connect with lenders who can provide working capital and growth financing for your venture.",
    benefits: [
      "Working capital: $25K - $500K",
      "Flexible repayment terms",
      "Quick application process",
      "Various loan structures available"
    ],
    color: "from-primary to-primary-glow"
  },
  {
    icon: Handshake,
    title: "Strategic Funding",
    description: "Partner with strategic investors who bring industry expertise, resources, and market access.",
    benefits: [
      "Growth capital: $500K - $5M",
      "Industry partnerships & distribution",
      "Operational support & resources",
      "Market validation and credibility"
    ],
    color: "from-secondary to-accent"
  },
  {
    icon: TrendingUp,
    title: "Co-Development Funding",
    description: "Equity-based partnerships where we invest our expertise and resources in exchange for ownership.",
    benefits: [
      "Zero upfront cash required",
      "Sweat equity partnership model",
      "Full-stack development support",
      "Aligned incentives for success"
    ],
    color: "from-accent to-secondary"
  }
];

const FundingEnablement = () => {
  return (
    <>
      <SEOHead
        title="Funding Enablement - NFT Las Vegas™"
        description="Angel, strategic, and co-development funding solutions. We help you secure the capital needed to accelerate your venture."
        keywords="funding, angel investors, strategic funding, venture capital, co-development"
      />
      
      <div className="min-h-dvh bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                    <TrendingUp className="w-4 h-4" />
                    Funding Solutions
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Fuel Your <span className="text-gradient">Growth Journey</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    From angel investments to strategic partnerships, we connect you with the right 
                    capital and expertise to accelerate your venture from concept to market leader.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow"
                    >
                      <Link to="/contact">
                        Request Funding Review
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Funding Types */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Three Paths to <span className="text-gradient">Capital</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the funding model that aligns with your stage, goals, and vision
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {fundingTypes.map((type, index) => (
                  <div 
                    key={type.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>

                    <div className="space-y-3">
                      {type.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Funding Readiness Process */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Funding Process</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven four-step approach to secure the capital you need
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

                {[
                  {
                    step: "01",
                    title: "Assessment",
                    description: "Evaluate your readiness, refine your pitch, and identify funding targets"
                  },
                  {
                    step: "02",
                    title: "Preparation",
                    description: "Build financial models, pitch decks, and due diligence materials"
                  },
                  {
                    step: "03",
                    title: "Introduction",
                    description: "Connect with our network of angels, VCs, and strategic partners"
                  },
                  {
                    step: "04",
                    title: "Negotiation",
                    description: "Support through term sheets, legal review, and closing"
                  }
                ].map((phase, index) => (
                  <div 
                    key={phase.step}
                    className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-12 text-center">
                <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Secure Funding?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Schedule a funding readiness review to assess your venture and identify the best path forward.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Request Funding Readiness Review
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

export default FundingEnablement;
