import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Lightbulb, Hammer, TrendingUp, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  {
    icon: Lightbulb,
    title: "Prototype",
    description: "Rapid prototyping and proof-of-concept development",
    details: [
      "3D modeling & CAD design",
      "Functional prototypes",
      "User testing & feedback",
      "Design refinement"
    ]
  },
  {
    icon: Hammer,
    title: "Engineer",
    description: "Design for manufacturing and engineering optimization",
    details: [
      "DFM analysis",
      "Material selection",
      "Component sourcing",
      "Quality standards"
    ]
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Production scaling and supply chain management",
    details: [
      "Manufacturing partner selection",
      "Production line setup",
      "Quality control systems",
      "Supply chain optimization"
    ]
  },
  {
    icon: Package,
    title: "Ship",
    description: "Logistics, fulfillment, and ongoing production",
    details: [
      "Packaging & labeling",
      "Distribution logistics",
      "Inventory management",
      "Post-production support"
    ]
  }
];

const capabilities = [
  {
    title: "Hardware Design",
    items: ["Industrial design", "PCB design", "Enclosure engineering", "Component selection"]
  },
  {
    title: "IoT Integration",
    items: ["Sensor integration", "Wireless connectivity", "Cloud connectivity", "Firmware development"]
  },
  {
    title: "Quality Assurance",
    items: ["Testing protocols", "Certification support", "QC procedures", "Compliance verification"]
  },
  {
    title: "Supply Chain",
    items: ["Vendor management", "Cost optimization", "Lead time reduction", "Risk mitigation"]
  }
];

const ProductManufacturing = () => {
  return (
    <>
      <SEOHead
        title="Product Manufacturing - NFT Las Vegas™"
        description="End-to-end hardware development from prototype to scaled production. We handle design, engineering, manufacturing, and logistics."
        keywords="product manufacturing, hardware development, prototyping, IoT, supply chain, production"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Package className="w-4 h-4" />
                  Product Manufacturing
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  From <span className="text-gradient">Idea to Reality</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  Turn your hardware vision into market-ready products. We handle every step from 
                  initial prototype to scaled manufacturing and global distribution.
                </p>

                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Request Prototype Plan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  The <span className="text-gradient">Manufacturing Journey</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven four-phase process from concept to customer
                </p>
              </div>

              {/* Timeline - Desktop */}
              <div className="hidden lg:block relative">
                {/* Timeline Line */}
                <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                <div className="grid grid-cols-4 gap-8 relative">
                  {timeline.map((phase, index) => (
                    <div 
                      key={phase.title}
                      className="relative"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Phase Icon */}
                      <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                        <phase.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Phase Content */}
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                        
                        <div className="space-y-2">
                          {phase.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline - Mobile */}
              <div className="lg:hidden space-y-8">
                {timeline.map((phase, index) => (
                  <div 
                    key={phase.title}
                    className="flex gap-4"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary mt-4" />
                      )}
                    </div>

                    <div className="flex-1 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                      <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                      
                      <div className="space-y-2">
                        {phase.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Core <span className="text-gradient">Capabilities</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive manufacturing expertise across all disciplines
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {capabilities.map((capability) => (
                  <div 
                    key={capability.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-6">{capability.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {capability.items.map((item) => (
                        <div 
                          key={item}
                          className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/30 rounded-2xl p-12">
                <Package className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Build Your Product?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your product vision and create a comprehensive manufacturing plan.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Request Manufacturing Consultation
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

export default ProductManufacturing;
