import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleBackground } from "./ParticleBackground";
import { JourneyIndicators } from "./JourneyIndicators";
import { useState, useEffect } from "react";
export const HeroNFT = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-primary/30 text-primary-foreground rounded-full text-sm font-medium mb-8 hover:bg-white/20 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 animate-pulse text-yellow-400 group-hover:rotate-12 transition-transform" />
              <span className="text-[#b347eb]">Only at NFT Las Vegas™</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-tight">
              <span className="block animate-fade-in">Your All-in-One Partner for</span>
              <span className="block animate-fade-in animate-delay-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">the Next Generation of Innovation</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 mb-12 max-w-5xl mx-auto font-medium animate-fade-in leading-relaxed" style={{
            animationDelay: '0.4s'
          }}>We build scalable, self-sustaining digital ecosystems designed around intelligent automation - powering products, operations, and continuous growth cycles through AI, blockchain, and enterprise infrastructure.</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-16 w-full max-w-2xl mx-auto px-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <Button asChild size="lg" className="group relative bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] shadow-xl hover:scale-105 transition-all duration-400 rounded-full">
                <a href="https://portal.nftlasvegas.io/client" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center justify-center font-semibold whitespace-nowrap">
                    Client Portal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="group border-2 border-primary/50 hover:border-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 shadow-lg hover:scale-105 transition-all duration-400 rounded-full text-foreground relative overflow-hidden">
                <Link to="/onboarding">
                  <span className="whitespace-nowrap">Book a Discovery Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
            </div>

            {/* Journey Indicators */}
            <JourneyIndicators />
          </div>
        </div>
      </div>
    </section>;
};