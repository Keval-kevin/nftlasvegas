import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTABand = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Ready to Transform?
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build the Future
            <span className="block mt-2">Together</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            From funding to launch, we're your all-in-one partner for marketing, branding, 
            and enterprise-level tech development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/onboarding">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
              >
                <span className="flex items-center font-semibold">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="group text-lg px-10 py-6 border-2 border-white text-white hover:bg-white/10 shadow-lg transform hover:scale-105 transition-all duration-300 rounded-full"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
