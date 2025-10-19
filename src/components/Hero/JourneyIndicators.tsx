import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

export const JourneyIndicators = () => {
  const journeySteps = [
    {
      icon: Lightbulb,
      title: "Ideation",
      description: "From concept to clarity"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Build & go to market"
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description: "Grow & expand globally"
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
      {/* Connecting line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-accent/20 -translate-y-1/2 hidden sm:block" />
      
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
                  
                  {/* Connecting dot */}
                  <div className="absolute -right-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary/80 border-2 border-background hidden sm:block last:hidden" />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
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
