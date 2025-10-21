import { Search, Wrench, Rocket } from "lucide-react";
const steps = [{
  icon: Search,
  title: "Assess",
  description: "Deep dive into your vision, challenges, and opportunities. We map your path to success.",
  number: "01"
}, {
  icon: Wrench,
  title: "Build",
  description: "Collaborative development with cutting-edge tech. We transform strategy into reality.",
  number: "02"
}, {
  icon: Rocket,
  title: "Launch",
  description: "Go-to-market execution with ongoing support. We ensure your success continues.",
  number: "03"
}];
export const ThreeStepJourney = () => {
  return <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-gradient">NFT Las Vegas™</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven three-phase approach that takes you from concept to market leader
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          {steps.map((step, index) => <div key={step.number} className="relative group" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
                {/* Step Number */}
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};