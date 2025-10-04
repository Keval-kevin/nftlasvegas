
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Zap, Code2, Cpu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [codeLines, setCodeLines] = useState<Array<{ id: number; text: string; x: number; y: number; opacity: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate random particles for background animation
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    // Generate floating code snippets
    const codeSnippets = [
      "const innovation = () => {",
      "  return future.tech();",
      "};",
      "AI.automate(workflow)",
      "blockchain.verify()",
      "IoT.connect(devices)",
      "{ success: true }"
    ];
    
    const newCodeLines = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      text: codeSnippets[i % codeSnippets.length],
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setCodeLines(newCodeLines);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Snippets - Hidden on small mobile for performance */}
        <div className="hidden sm:block">
          {codeLines.map((line) => (
            <div
              key={line.id}
              className="absolute text-blue-400/40 font-mono text-xs sm:text-sm animate-float pointer-events-none"
              style={{
                left: `${line.x}%`,
                top: `${line.y}%`,
                opacity: line.opacity,
                animationDelay: `${line.id * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Optimized Animated Particles */}
        <div className="hidden md:block">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse will-change-transform pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse will-change-transform pointer-events-none" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Animated Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:shadow-xl hover:bg-white/20 transition-all duration-300 group touch-friendly">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline">Empowering Tomorrow's Businesses with Smart Tech</span>
              <span className="sm:hidden">Smart Tech Solutions</span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>

            {/* Enhanced Main Headline with Better Mobile Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              <span className="block animate-fade-in">Start the Future of</span>
              <span className="block animate-fade-in animate-delay-200 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Business with Easenext
              </span>
              <span className="block animate-fade-in animate-delay-400 text-blue-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Transform. Innovate. Scale.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0" style={{ animationDelay: '0.5s' }}>
              From AI-driven automation to cutting-edge Software solutions, we deliver 
              tailored technology that transforms how your business operates and scales globally.
            </p>

            {/* Enhanced CTA Buttons with Better Mobile UX */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 active:scale-95 transition-all duration-300 rounded-full border-0 overflow-hidden w-full sm:w-auto touch-friendly"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Digital Transformation
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
              
              <Link to="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 border-2 border-blue-400/50 hover:border-blue-400 bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-2 active:scale-95 transition-all duration-300 rounded-full text-white hover:text-white relative overflow-hidden w-full sm:w-auto touch-friendly"
                >
                  <FileText className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform duration-300" />
                  See Our Success Stories
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            </div>

            {/* Enhanced Tech Icons with Better Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto" style={{ animationDelay: '0.7s' }}>
              {[
                { icon: Code2, label: "Custom Development", color: "from-blue-500 to-cyan-500", description: "Tailored solutions for your needs" },
                { icon: Cpu, label: "AI Automation", color: "from-purple-500 to-pink-500", description: "Smart systems that work for you" },
                { icon: Zap, label: "Smart Solutions", color: "from-green-500 to-emerald-500", description: "Future-ready technology" }
              ].map((tech, index) => (
                <div 
                  key={tech.label}
                  className="flex flex-row sm:flex-col items-center gap-3 sm:gap-3 p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 group touch-friendly"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0`}>
                    <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left sm:text-center">
                    <span className="text-sm sm:text-sm text-blue-200 font-medium group-hover:text-white transition-colors duration-300 block">{tech.label}</span>
                    <span className="text-xs text-blue-300/70 group-hover:text-blue-200/90 transition-colors duration-300 hidden sm:block">{tech.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Simplified Scroll Indicator */}
      </div>
    </section>
  );
};
