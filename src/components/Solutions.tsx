import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Heart, ShoppingCart, GraduationCap, Shield, Brain, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Fintech",
      description: "Revolutionizing finance with blockchain, mobile payments, and AI-powered financial services.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-100"
    },
    {
      icon: Heart,
      title: "Healthcare & HealthTech",
      description: "Improving patient care with telemedicine, AI diagnostics, and health data analytics.",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-100"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & RetailTech",
      description: "Enhancing customer experience with AR, AI personalization, and omnichannel retail solutions.",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-100"
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Shaping the future of learning with e-learning platforms, AI, and gamification.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protecting data and privacy with AI-driven threat detection, cloud security, and more.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-100"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Driving innovation in automation, analytics, and advanced technologies across industries.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-100"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tailored Tech Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-in-left animate-delay-200">
            In today's fast-evolving world, industries need to adapt to the latest technological innovations to stay competitive. 
            Explore our top solutions designed for the following trending industries:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in bg-gradient-to-br ${solution.bgGradient}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${solution.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to elevate your business with cutting-edge tech solutions? Contact us today to see how we can help you thrive in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};
