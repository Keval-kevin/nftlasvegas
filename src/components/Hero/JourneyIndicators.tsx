import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

export const JourneyIndicators = () => {
  const journeySteps = [
    {
      icon: Lightbulb,
      title: "Week 1-2",
      subtitle: "Strategy & Design",
      description: "Brand identity, wireframes & roadmap"
    },
    {
      icon: Rocket,
      title: "Week 3-4",
      subtitle: "Build & Launch",
      description: "MVP development & go-live"
    },
    {
      icon: TrendingUp,
      title: "Ongoing",
      subtitle: "Scale & Optimize",
      description: "Growth, funding & expansion"
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
      {/* Header message */}
      <div className="text-center mb-8">
        <p className="text-lg sm:text-xl text-secondary font-semibold">
          MVP Launched in Just 4 Weeks
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Your complete journey from idea to market
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
        {journeySteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.title}
              className="relative group"
              style={{
                animationDelay: `${0.8 + index * 0.15}s`
              }}
            >
              {/* Step card */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-secondary/50 transition-all duration-500 hover:scale-105 hover:shadow-glow">
                {/* Icon with gradient background */}
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="text-sm font-semibold text-primary mb-1">
                    {step.title}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                    {step.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
