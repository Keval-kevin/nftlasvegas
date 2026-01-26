import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Target, DollarSign, Code, Package, Rocket, Globe, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "Strategy & PMO",
    description: "Comprehensive project management and strategic planning to align your vision with executable roadmaps.",
    features: [
      "Strategic planning & roadmapping",
      "Project management office setup",
      "Agile methodology implementation",
      "Risk assessment & mitigation"
    ],
    technologies: ["Jira", "Asana", "Notion", "Miro"],
    color: "from-primary to-primary-glow",
    route: "/onboarding"
  },
  {
    icon: DollarSign,
    title: "Funding Enablement",
    description: "Business loans, strategic, and co-development funding support to fuel your venture's growth and scale.",
    features: [
      "Pitch deck development",
      "Financial modeling & projections",
      "Investor network access",
      "Due diligence preparation"
    ],
    technologies: ["Financial Models", "Cap Tables", "Data Rooms", "Pitch Decks"],
    color: "from-secondary to-accent",
    route: "/funding-enablement"
  },
  {
    icon: Code,
    title: "Tech Development",
    description: "Full-stack development with AI/ML integration, blockchain, and enterprise system connectivity.",
    features: [
      "AI/ML model development",
      "Web3 & smart contracts",
      "Mobile & web applications",
      "Salesforce/HubSpot integrations"
    ],
    technologies: ["React", "Node.js", "Python", "Solidity", "AWS"],
    color: "from-accent to-secondary",
    route: "/tech-development"
  },
  {
    icon: Package,
    title: "Product Manufacturing",
    description: "End-to-end hardware development from prototype to scaled production and quality assurance.",
    features: [
      "Rapid prototyping",
      "Design for manufacturability",
      "Supply chain management",
      "Quality control systems"
    ],
    technologies: ["CAD/CAM", "3D Printing", "PCB Design", "IoT Integration"],
    color: "from-primary to-secondary",
    route: "/product-manufacturing"
  },
  {
    icon: Rocket,
    title: "Platform Launch",
    description: "Go-to-market strategy, marketing operations, and analytics to ensure successful product launches.",
    features: [
      "GTM strategy development",
      "Marketing automation setup",
      "Analytics & attribution",
      "Content & social media"
    ],
    technologies: ["HubSpot", "Google Analytics", "SEMrush", "Social Platforms"],
    color: "from-secondary to-primary",
    route: "/platform-launch"
  },
  {
    icon: Globe,
    title: "Distribution",
    description: "Strategic partnerships and multi-channel distribution to maximize market reach and revenue.",
    features: [
      "Channel strategy development",
      "Partnership negotiations",
      "Logistics optimization",
      "Market expansion planning"
    ],
    technologies: ["CRM Systems", "ERP", "Logistics Platforms", "Analytics"],
    color: "from-accent to-primary",
    route: "/distribution"
  }
];

const ServicesNFT = () => {
  return (
    <>
      <SEOHead
        title="Services - NFT Las Vegas™"
        description="Comprehensive services spanning strategy, funding, tech development, manufacturing, launch, and distribution. Full-stack support for your venture."
        keywords="strategy, PMO, funding, tech development, manufacturing, product launch, distribution"
      />
      
      <div className="min-h-dvh bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Complete <span className="text-gradient">Service Portfolio</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Six integrated capabilities covering every aspect of venture development. 
                  From strategy to distribution, we've got you covered.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-muted text-xs rounded-md text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={service.route} className="block mt-6">
                      <Button 
                        variant="outline" 
                        className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 group"
                      >
                        Explore Service
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>

              {/* AI Voice Systems Section */}
              <div className="mt-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border border-primary/40 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow flex-shrink-0">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        AI Voice <span className="text-gradient">Systems</span>
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                        Enterprise-grade AI voice assistants that handle calls, schedule appointments, 
                        and qualify leads 24/7. Never miss a customer opportunity again.
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                        <span className="px-4 py-2 bg-card/60 border border-border rounded-lg text-sm font-medium text-foreground">
                          24/7 Call Handling
                        </span>
                        <span className="px-4 py-2 bg-card/60 border border-border rounded-lg text-sm font-medium text-foreground">
                          Appointment Booking
                        </span>
                        <span className="px-4 py-2 bg-card/60 border border-border rounded-lg text-sm font-medium text-foreground">
                          Lead Qualification
                        </span>
                        <span className="px-4 py-2 bg-card/60 border border-border rounded-lg text-sm font-medium text-foreground">
                          Multi-Language
                        </span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex-shrink-0">
                      <Link to="/ai-voice">
                        <Button 
                          size="lg"
                          className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-8 py-6"
                        >
                          Explore AI Voice
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI & Blockchain Integration Callout */}
              <div className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    AI & Blockchain <span className="text-gradient">Integration</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Every service is enhanced with cutting-edge AI automation and blockchain verification. 
                    We don't just build solutions — we build intelligent, transparent, future-proof ecosystems.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="px-6 py-3 bg-card/50 border border-border rounded-xl">
                      <span className="text-sm font-medium text-foreground">AI-Powered Automation</span>
                    </div>
                    <div className="px-6 py-3 bg-card/50 border border-border rounded-xl">
                      <span className="text-sm font-medium text-foreground">Blockchain Verification</span>
                    </div>
                    <div className="px-6 py-3 bg-card/50 border border-border rounded-xl">
                      <span className="text-sm font-medium text-foreground">Marketing Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss which services align with your goals and create a custom plan for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Request Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/onboarding">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/50 hover:border-primary text-lg px-10 py-6"
                  >
                    Start Onboarding
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

export default ServicesNFT;
