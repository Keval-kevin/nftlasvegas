
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Bot, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Business Tools",
      description: "Streamline operations with smart automation, inventory management, and workflow optimization.",
      href: "/business-process-solutions",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Revolutionary patient care systems, smart booking, and AI-powered diagnostic tools.",
      href: "/healthcare-solutions",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      hoverBg: "hover:bg-gradient-to-br hover:from-red-100 hover:to-pink-100"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent chatbots, predictive analytics, and automated workflows that learn and adapt.",
      href: "/ai-automation-solutions",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100"
    },
    {
      icon: Zap,
      title: "Trending Tech",
      description: "Blockchain, Web3, IoT, and AR/VR solutions for the future of your business.",
      href: "/trending-technologies-solutions",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      hoverBg: "hover:bg-gradient-to-br hover:from-orange-100 hover:to-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transformative Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left animate-delay-200">
            Discover how our cutting-edge technology solutions can revolutionize your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-scale-in card-hover rounded-2xl ${solution.hoverBg}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${solution.gradient} mb-6 transform group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 group-hover:font-extrabold transition-all duration-500">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 group-hover:font-medium transition-all duration-500">
                  {solution.description}
                </p>
                
                <Link to="/solutions">
                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between hover:bg-white/80 transition-all duration-500 hover:shadow-lg hover:scale-105"
                  >
                    <span className="font-medium group-hover/btn:font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </Button>
                </Link>
                
                {/* Enhanced Floating Animation Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" style={{ animationDelay: '0.2s' }} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
