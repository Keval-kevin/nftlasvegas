import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleBackground } from "./ParticleBackground";
import { useState, useEffect } from "react";
export const HeroNFT = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(237,50%,20%)] to-[hsl(263,50%,25%)]">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/30 text-primary-foreground rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 animate-pulse text-accent group-hover:rotate-12 transition-transform" />
              <span>Your All-in-One Partner for Marketing, Branding & Tech</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-tight">
              <span className="block animate-fade-in">Your All-in-One Partner for</span>
              <span className="block animate-fade-in animate-delay-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Marketing, Branding & Tech Development</span>
            </h1>
            
            

            <p className="text-base sm:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto" style={{
            animationDelay: '0.5s'
          }}>Full-stack venture enablement combining blockchain, AI, and enterprise infrastructure to build future-proof ecosystems that scale. Whether you're a startup looking to make your mark or an enterprise seeking digital transformation, we have the expertise to help you succeed. Contact us today to start your journey towards unprecedented growth and innovation.</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16" style={{
            animationDelay: '0.6s'
          }}>
              <Link to="/onboarding">
                <Button size="lg" className="group relative bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] text-lg px-10 py-6 shadow-xl transform hover:scale-105 transition-all duration-400 rounded-full w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    Book Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
              
              <Link to="/onboarding">
                <Button size="lg" variant="outline" className="group text-lg px-10 py-6 border-2 border-primary/50 hover:border-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 shadow-lg transform hover:scale-105 transition-all duration-400 rounded-full text-foreground w-full sm:w-auto">
                  Start Onboarding
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{
            animationDelay: '0.7s'
          }}>
              {[{
              number: "100+",
              label: "Projects Delivered"
            }, {
              number: "$50M+",
              label: "Funding Enabled"
            }, {
              number: "25+",
              label: "Countries Served"
            }].map((stat, index) => <div key={stat.label} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300" style={{
              animationDelay: `${0.8 + index * 0.1}s`
            }}>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};