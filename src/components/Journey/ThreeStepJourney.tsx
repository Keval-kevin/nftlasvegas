import { useState, useEffect } from "react";
import { Rocket, Sliders, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Launch",
    description: "We begin by deeply understanding your vision, market, and goals. Our team then crafts a comprehensive, tailored strategy to effectively launch your business or product. This includes market research, competitor analysis, brand positioning, and a detailed go-to-market plan to ensure a strong and impactful entry into the market.",
    icon: Rocket,
    delay: 0
  },
  {
    id: 2,
    number: "02",
    title: "Optimize",
    description: "Post-launch, we continuously refine your strategy using data-driven insights. Our team meticulously analyzes performance metrics, user feedback, and market responses to optimize every aspect of your business. From improving user experience to fine-tuning marketing campaigns, we ensure maximum efficiency and ROI at every step.",
    icon: Sliders,
    delay: 100
  },
  {
    id: 3,
    number: "03",
    title: "Scale",
    description: "As your business grows, we provide the tools, technology, and expertise to scale your operations efficiently. This includes implementing robust CRM systems, automating processes, expanding your team, and adapting your infrastructure to handle increased demand. Our scalable solutions ensure your business can grow without compromising on quality or customer satisfaction.",
    icon: TrendingUp,
    delay: 200
  },
  {
    id: 4,
    number: "04",
    title: "Innovate",
    description: "To keep you ahead of the curve, we constantly identify new opportunities and implement cutting-edge solutions. Our innovation strategies include market trend analysis, R&D initiatives, and the integration of emerging technologies. We help you pivot when necessary and capitalize on new market opportunities, ensuring your business remains competitive and forward-thinking.",
    icon: Lightbulb,
    delay: 300
  }
];

export const ThreeStepJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in">
            Why <span className="text-gradient">NFT Las Vegas™</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
            Your Growth Journey with Us
          </p>
        </div>

        {/* Desktop: 4 cards in row with timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Timeline connector */}
          <div className="absolute top-20 left-12 right-12 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/40 to-accent/30 z-0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <Card 
                key={step.id} 
                className={`relative z-10 group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-slate-900/70 backdrop-blur-sm border ${isActive ? 'border-primary/50 shadow-glow -translate-y-1' : 'border-white/10'}`}
                style={{ animationDelay: `${step.delay}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <CardContent className="p-6">
                  {/* Number Badge */}
                  <div className="flex items-center justify-center mb-4 -mt-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile: Stacked cards with vertical timeline */}
        <div className="md:hidden space-y-6 relative px-4">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/40 to-accent/30 z-0" />
          
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.id} 
                className="relative z-10 bg-slate-900/70 backdrop-blur-sm border border-white/10 animate-fade-in ml-8"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <CardContent className="p-6">
                  {/* Number Badge - positioned on timeline */}
                  <div className="absolute -left-12 top-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-xl">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-start mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Ready to transform your vision into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto px-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
              <Link to="/onboarding">
                Start Your Journey
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/solutions">
                Explore Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
