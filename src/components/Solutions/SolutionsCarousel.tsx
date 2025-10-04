import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Building2, Layers, Coins, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: TrendingUp,
    title: "Venture Acceleration",
    description: "From idea to market-ready product with comprehensive support through every stage of growth.",
    outcomes: ["Market Entry", "Growth Strategy", "Investor Readiness"],
  },
  {
    icon: Building2,
    title: "Enterprise Integrations",
    description: "Seamlessly connect your systems with AI-powered automation and blockchain verification.",
    outcomes: ["System Integration", "Process Automation", "Data Security"],
  },
  {
    icon: Layers,
    title: "Hardware + SaaS",
    description: "End-to-end product development from hardware design to cloud-based software platforms.",
    outcomes: ["Product Design", "IoT Integration", "Cloud Platform"],
  },
  {
    icon: Coins,
    title: "Brand Extensions & Licensing",
    description: "Expand your brand reach through strategic partnerships and licensing opportunities.",
    outcomes: ["Brand Strategy", "Partnership Development", "Revenue Streams"],
  },
  {
    icon: Blocks,
    title: "Web3 Tokenization",
    description: "Leverage blockchain technology for tokenization, NFTs, and decentralized solutions.",
    outcomes: ["Smart Contracts", "Token Economics", "Marketplace Development"],
  },
];

export const SolutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % solutions.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Outcome-Driven <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored strategies that deliver measurable results for your business transformation
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {solutions.map((solution, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                        <solution.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-foreground mb-4">{solution.title}</h3>
                      <p className="text-lg text-muted-foreground mb-8">{solution.description}</p>
                      
                      <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {solution.outcomes.map((outcome) => (
                          <span 
                            key={outcome}
                            className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                          >
                            {outcome}
                          </span>
                        ))}
                      </div>

                      <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                        Request Proposal
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            aria-label="Next solution"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to solution ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
