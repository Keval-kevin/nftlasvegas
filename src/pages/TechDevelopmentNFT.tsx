import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Code, Brain, Blocks, Database, Cloud, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Build intelligent systems that learn, adapt, and optimize your operations automatically.",
    capabilities: ["Custom AI models", "Natural language processing", "Computer vision", "Predictive analytics"]
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Implement decentralized solutions with smart contracts, tokenization, and transparent systems.",
    capabilities: ["Smart contracts", "Token development", "DeFi platforms", "NFT marketplaces"]
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Create modern web and mobile applications with scalable architecture and beautiful UI/UX.",
    capabilities: ["React/Next.js apps", "Mobile iOS/Android", "API development", "Cloud infrastructure"]
  },
  {
    icon: Database,
    title: "Enterprise Integrations",
    description: "Connect your systems with Salesforce, HubSpot, and other enterprise platforms seamlessly.",
    capabilities: ["Salesforce custom dev", "HubSpot workflows", "API integrations", "Data synchronization"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Build scalable, reliable cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
    capabilities: ["Serverless architecture", "Container orchestration", "Auto-scaling", "Cloud migration"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement robust security measures and ensure compliance with industry regulations.",
    capabilities: ["Security audits", "GDPR compliance", "SOC 2 certification", "Penetration testing"]
  }
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"] },
  { category: "Blockchain", items: ["Solidity", "Ethereum", "Polygon", "IPFS"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP", "Vercel"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"] }
];

const TechDevelopmentNFT = () => {
  return (
    <>
      <SEOHead
        title="Tech Development - NFT Las Vegas™"
        description="AI/ML, Web3, full-stack development, and enterprise integrations. Build intelligent, scalable solutions with cutting-edge technology."
        keywords="AI development, blockchain, Web3, full-stack, enterprise integration, cloud solutions"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Code className="w-4 h-4" />
                  Technology Development
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Build the <span className="text-gradient">Future</span> with Code
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  From AI-powered automation to blockchain verification, we build intelligent, 
                  scalable technology solutions that transform how your business operates.
                </p>

                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Scope Your Build
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Architecture Diagram Placeholder */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
                
                <div className="relative grid md:grid-cols-3 gap-8 text-center">
                  {[
                    { icon: Brain, label: "AI/ML Layer", color: "from-primary to-primary-glow" },
                    { icon: Database, label: "Data Layer", color: "from-secondary to-accent" },
                    { icon: Blocks, label: "Blockchain Layer", color: "from-accent to-secondary" }
                  ].map((layer) => (
                    <div key={layer.label} className="space-y-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center mx-auto shadow-lg`}>
                        <layer.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{layer.label}</h3>
                      <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                        <div className="text-xs text-muted-foreground">Processing & Analysis</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Flow Arrows */}
                <div className="hidden md:block absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ zIndex: 1 }}>
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-primary" />
                      </marker>
                    </defs>
                    <line x1="30%" y1="50%" x2="45%" y2="50%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/50" />
                    <line x1="55%" y1="50%" x2="70%" y2="50%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-primary/50" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Tech Capabilities</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive development services powered by the latest technologies
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Tech Stack</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Industry-leading technologies and frameworks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((stack) => (
                  <div 
                    key={stack.category}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-primary mb-4">{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1.5 bg-muted border border-border rounded-lg text-sm text-foreground hover:border-primary/50 transition-colors"
                        >
                          {item}
                        </span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your technical requirements and create a development roadmap.
              </p>
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                >
                  Schedule Technical Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TechDevelopmentNFT;
