
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Award, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-purple-600/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Header Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8 animate-slide-in-left">
            <Sparkles className="w-5 h-5 mr-2 text-white animate-pulse" />
            <span className="text-white font-semibold">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            <span className="block animate-fade-in">Let's Build the</span>
            <span className="block animate-fade-in animate-delay-200 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Future Together
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-right animate-delay-300">
            Join hundreds of companies that have accelerated their growth with Easenext. 
            Let's discuss how we can transform your business vision into reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mb-16 lg:mb-20 animate-scale-in animate-delay-400">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 rounded-full border-0"
              >
                <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Start Your Project
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="group text-white border-2 border-white/50 hover:bg-white/10 hover:border-white text-xl px-10 py-5 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                icon: Phone, 
                number: "24/7", 
                text: "Expert Support",
                gradient: "from-green-400 to-emerald-500"
              },
              { 
                icon: Award, 
                number: "200+", 
                text: "Successful Projects",
                gradient: "from-yellow-400 to-orange-500"
              },
              { 
                icon: Zap, 
                number: "98%", 
                text: "Client Satisfaction",
                gradient: "from-pink-400 to-rose-500"
              }
            ].map((stat, index) => (
              <div 
                key={stat.text}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-8 lg:p-10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-slide-in-left relative overflow-hidden"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <stat.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-blue-100 text-lg lg:text-xl font-medium">
                    {stat.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 lg:mt-20 animate-fade-in animate-delay-600">
            <p className="text-blue-200 text-lg mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div 
                  key={item}
                  className="bg-white/20 h-12 w-32 rounded-lg animate-slide-in-left hover:bg-white/30 transition-colors duration-300"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
