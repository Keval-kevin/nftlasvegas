import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Layers, Coins, Blocks, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Venture Acceleration",
    color: "from-primary to-primary-glow",
    problem: "Startups struggle to navigate the complex journey from idea to market, lacking resources, expertise, and strategic guidance.",
    approach: "We provide end-to-end support combining strategic planning, technical development, funding assistance, and go-to-market execution. Our equity partnership model ensures we're invested in your success.",
    deliverables: [
      "Market research & validation",
      "Business model development",
      "MVP design & development",
      "Funding readiness preparation",
      "Launch strategy & execution",
      "Growth optimization"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise Integrations",
    color: "from-secondary to-accent",
    problem: "Legacy systems create silos, inefficiencies, and security vulnerabilities. Manual processes drain resources and limit scalability.",
    approach: "We design and implement seamless integrations using AI automation and blockchain verification. Our solutions connect your existing systems while enhancing security and operational efficiency.",
    deliverables: [
      "System architecture design",
      "API development & integration",
      "AI-powered automation",
      "Blockchain verification layers",
      "Real-time data synchronization",
      "Security & compliance audits"
    ]
  },
  {
    icon: Layers,
    title: "Hardware + SaaS",
    color: "from-accent to-secondary",
    problem: "Creating connected products requires expertise in both physical hardware and cloud software — a rare combination that's expensive and time-consuming to build in-house.",
    approach: "Our team handles the complete product lifecycle from hardware prototyping to cloud platform development. We create seamless IoT ecosystems that scale.",
    deliverables: [
      "Hardware design & prototyping",
      "IoT connectivity solutions",
      "Cloud platform development",
      "Mobile & web applications",
      "Data analytics dashboards",
      "Maintenance & scaling support"
    ]
  },
  {
    icon: Coins,
    title: "Brand Extensions & Licensing",
    color: "from-primary to-secondary",
    problem: "Brands leave revenue on the table by not fully leveraging their IP. Finding the right partners and managing licensing deals is complex and resource-intensive.",
    approach: "We identify untapped opportunities, develop strategic partnerships, and manage the entire licensing process. Our network and expertise maximize your brand's value.",
    deliverables: [
      "Brand valuation & audit",
      "Partnership identification",
      "Licensing agreement structure",
      "Product line development",
      "Marketing & distribution strategy",
      "Revenue tracking & optimization"
    ]
  },
  {
    icon: Blocks,
    title: "Web3 Tokenization",
    color: "from-secondary to-primary",
    problem: "Businesses want to leverage blockchain but lack the technical knowledge and strategic framework to implement tokenization, NFTs, or decentralized solutions effectively.",
    approach: "We design custom blockchain strategies aligned with your business goals. From smart contracts to marketplaces, we handle the technical complexity while you focus on value creation.",
    deliverables: [
      "Token economics design",
      "Smart contract development",
      "NFT marketplace creation",
      "Wallet integration",
      "Community building tools",
      "Compliance & legal framework"
    ]
  }
];

const SolutionsNFT = () => {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <>
      <SEOHead
        title="Solutions - NFT Las Vegas™"
        description="Outcome-driven solutions for venture acceleration, enterprise integrations, hardware + SaaS, brand extensions, and Web3 tokenization."
        keywords="venture acceleration, enterprise integration, IoT, brand licensing, blockchain, tokenization"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Outcome-Driven <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the solution that aligns with your business goals. Each is designed to deliver 
                  measurable results and sustainable growth.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div
                    key={solution.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer"
                    onClick={() => setSelectedSolution(solution)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {solution.problem}
                    </p>

                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />

        {/* Modal */}
        {selectedSolution && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedSolution(null)}>
            <div 
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedSolution.color} flex items-center justify-center shadow-lg`}>
                    <selectedSolution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedSolution.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedSolution.problem}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedSolution.approach}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">What You Get</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedSolution.deliverables.map((item) => (
                      <div 
                        key={item}
                        className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg border border-border"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg py-6"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request Proposal
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SolutionsNFT;
