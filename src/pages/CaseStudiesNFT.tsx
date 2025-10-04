import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Building2, Heart, Cpu, TrendingUp, X, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "HealthTech Platform Launch",
    client: "MediConnect Pro",
    industry: "Healthcare",
    outcome: "Revenue",
    service: "Platform Launch",
    image: "🏥",
    challenge: "Healthcare startup needed to launch a HIPAA-compliant telemedicine platform within 6 months to meet investor milestones.",
    approach: "Implemented secure cloud infrastructure, developed mobile apps, and executed strategic GTM campaign targeting healthcare providers.",
    results: {
      metric1: { value: "50K+", label: "Users in 90 days" },
      metric2: { value: "3.2M", label: "Series A raised" },
      metric3: { value: "99.9%", label: "Uptime" }
    },
    stack: ["React Native", "Node.js", "AWS", "Blockchain"],
    testimonial: "NFT Las Vegas transformed our vision into reality. Their expertise in healthcare compliance and rapid development was game-changing."
  },
  {
    id: 2,
    title: "AI-Powered Supply Chain",
    client: "LogiSmart Inc",
    industry: "Technology",
    outcome: "Efficiency",
    service: "Tech Development",
    image: "🤖",
    challenge: "Manufacturing company struggled with inventory optimization, leading to $2M annual waste in overstock and stockouts.",
    approach: "Built custom AI prediction model analyzing historical data, integrated with existing ERP, automated reordering workflows.",
    results: {
      metric1: { value: "45%", label: "Cost reduction" },
      metric2: { value: "98%", label: "Prediction accuracy" },
      metric3: { value: "12 mo", label: "ROI achieved" }
    },
    stack: ["Python", "TensorFlow", "Salesforce", "PostgreSQL"],
    testimonial: "The AI system paid for itself in under a year. We've gained a competitive advantage that's hard to replicate."
  },
  {
    id: 3,
    title: "IoT Product Launch",
    client: "SmartHome Innovations",
    industry: "Technology",
    outcome: "Market Entry",
    service: "Product Manufacturing",
    image: "🏠",
    challenge: "Consumer electronics startup needed to bring smart home device from prototype to mass production in 8 months.",
    approach: "Optimized hardware design for manufacturing, sourced components, managed production in Asia, and launched on Amazon.",
    results: {
      metric1: { value: "25K", label: "Units sold in Q1" },
      metric2: { value: "#3", label: "Category ranking" },
      metric3: { value: "4.7★", label: "Customer rating" }
    },
    stack: ["IoT Hardware", "React Native", "AWS IoT", "Shopify"],
    testimonial: "They handled everything from PCB design to Amazon launch. We couldn't have done it without their manufacturing expertise."
  },
  {
    id: 4,
    title: "Blockchain Tokenization",
    client: "ArtChain Marketplace",
    industry: "Technology",
    outcome: "Growth",
    service: "Tech Development",
    image: "🎨",
    challenge: "Art gallery network wanted to tokenize physical artwork and create digital ownership marketplace for collectors.",
    approach: "Developed NFT smart contracts, built marketplace platform, implemented custody solutions, and launched marketing campaign.",
    results: {
      metric1: { value: "$8M", label: "Trading volume" },
      metric2: { value: "500+", label: "Artists onboarded" },
      metric3: { value: "15K", label: "Collectors" }
    },
    stack: ["Solidity", "Ethereum", "IPFS", "React", "Stripe"],
    testimonial: "NFT Las Vegas made blockchain accessible to the traditional art world. The platform is elegant and secure."
  },
  {
    id: 5,
    title: "SaaS Funding Round",
    client: "DataFlow Analytics",
    industry: "Technology",
    outcome: "Funding",
    service: "Funding Enablement",
    image: "💰",
    challenge: "B2B SaaS startup needed Series A funding but lacked financial models and investor relationships.",
    approach: "Created comprehensive financial projections, refined pitch deck, connected with VCs in our network, and supported due diligence.",
    results: {
      metric1: { value: "$5M", label: "Series A raised" },
      metric2: { value: "12", label: "Investor meetings" },
      metric3: { value: "45 days", label: "From intro to term sheet" }
    },
    stack: ["Financial Models", "Pitch Deck", "Data Room"],
    testimonial: "Their investor network and funding expertise accelerated our raise by at least 6 months. Incredible ROI."
  },
  {
    id: 6,
    title: "Multi-Channel Distribution",
    client: "FitnessTech Pro",
    industry: "Healthcare",
    outcome: "Growth",
    service: "Distribution",
    image: "💪",
    challenge: "Fitness equipment manufacturer was Amazon-only and wanted to expand to retail and international markets.",
    approach: "Developed retail partnerships with major chains, set up European distribution, optimized for each channel.",
    results: {
      metric1: { value: "250%", label: "Revenue growth" },
      metric2: { value: "8", label: "Retail partners" },
      metric3: { value: "12", label: "New countries" }
    },
    stack: ["Retail Partnerships", "Logistics", "International"],
    testimonial: "Going from online-only to retail and international seemed impossible. NFT Las Vegas made it happen in 10 months."
  }
];

const filters = {
  industry: ["All", "Healthcare", "Technology"],
  outcome: ["All", "Revenue", "Efficiency", "Market Entry", "Growth", "Funding"],
  service: ["All", "Platform Launch", "Tech Development", "Product Manufacturing", "Funding Enablement", "Distribution"]
};

const CaseStudiesNFT = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedOutcome, setSelectedOutcome] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  const filteredCases = caseStudies.filter(cs => {
    if (selectedIndustry !== "All" && cs.industry !== selectedIndustry) return false;
    if (selectedOutcome !== "All" && cs.outcome !== selectedOutcome) return false;
    if (selectedService !== "All" && cs.service !== selectedService) return false;
    return true;
  });

  return (
    <>
      <SEOHead
        title="Case Studies - NFT Las Vegas™"
        description="Real results from ventures we've accelerated. See how we've helped businesses across industries achieve their goals."
        keywords="case studies, success stories, client results, portfolio, venture success"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Proven <span className="text-gradient">Success Stories</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real results from ventures we've accelerated. From funding to launch to scale.
                </p>
              </div>

              {/* Filters */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-12">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Industry Filter */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Industry</label>
                    <div className="flex flex-wrap gap-2">
                      {filters.industry.map(item => (
                        <button
                          key={item}
                          onClick={() => setSelectedIndustry(item)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            selectedIndustry === item
                              ? 'bg-primary text-white'
                              : 'bg-muted text-foreground hover:bg-muted-foreground/20'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Filter */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Outcome</label>
                    <div className="flex flex-wrap gap-2">
                      {filters.outcome.map(item => (
                        <button
                          key={item}
                          onClick={() => setSelectedOutcome(item)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            selectedOutcome === item
                              ? 'bg-secondary text-white'
                              : 'bg-muted text-foreground hover:bg-muted-foreground/20'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Filter */}
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Service</label>
                    <div className="flex flex-wrap gap-2">
                      {filters.service.map(item => (
                        <button
                          key={item}
                          onClick={() => setSelectedService(item)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            selectedService === item
                              ? 'bg-accent text-white'
                              : 'bg-muted text-foreground hover:bg-muted-foreground/20'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Masonry Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.map((cs, index) => (
                  <div
                    key={cs.id}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer group"
                    onClick={() => setSelectedCase(cs)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-6xl mb-4">{cs.image}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{cs.client}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
                        {cs.industry}
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-secondary">
                        {cs.outcome}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{cs.challenge}</p>

                    <Button variant="outline" className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 group">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                ))}
              </div>

              {filteredCases.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">No case studies match your filters. Try adjusting your selection.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />

        {/* Case Study Modal */}
        {selectedCase && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedCase(null)}>
            <div 
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between z-10">
                <div>
                  <div className="text-5xl mb-4">{selectedCase.image}</div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{selectedCase.title}</h2>
                  <p className="text-lg text-muted-foreground">{selectedCase.client}</p>
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Challenge */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.challenge}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCase.approach}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Results</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.values(selectedCase.results).map((result, i) => (
                      <div key={i} className="bg-muted/50 border border-border rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <p className="text-lg italic text-foreground mb-4">"{selectedCase.testimonial}"</p>
                  <p className="text-sm text-primary font-medium">— {selectedCase.client}</p>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg py-6"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request a Similar Outcome
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

export default CaseStudiesNFT;
