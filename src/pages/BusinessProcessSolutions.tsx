import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, BarChart3, Users, Shield, CheckCircle, Settings, FileText, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";

const BusinessProcessSolutions = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSections(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openInquiry = (context: string) => {
    setInquiryContext(context);
    setIsInquiryOpen(true);
  };

  const solutions = [
    {
      icon: Settings,
      title: "Smart Inventory Management",
      description: "AI-powered inventory tracking and optimization for efficient supply chain management",
      features: [
        "Real-time stock monitoring",
        "Automated reorder points",
        "Demand forecasting",
        "Multi-location tracking",
        "Supplier integration"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Financial Automation",
      description: "Streamlined financial processes with automated invoicing and expense tracking",
      features: [
        "Automated invoicing",
        "Expense categorization",
        "Financial reporting",
        "Budget tracking",
        "Tax compliance"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Workflow Optimization",
      description: "Intelligent process automation that eliminates bottlenecks and improves efficiency",
      features: [
        "Process mapping",
        "Task automation",
        "Approval workflows",
        "Performance monitoring",
        "Custom integrations"
      ],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    { icon: BarChart3, title: "80% Efficiency Boost", description: "Streamlined operations and reduced manual work" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level security and data protection" },
    { icon: Cog, title: "Smart Automation", description: "AI-driven process optimization" },
    { icon: Users, title: "Team Collaboration", description: "Enhanced communication and productivity" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
              Business <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span> Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-200">
              Streamline your operations with intelligent automation, smart inventory management, and optimized workflows
            </p>
            
            <Button 
              size="lg" 
              onClick={() => openInquiry("I'm interested in Business Process Solutions for my company")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full animate-bounce-gentle"
            >
              Optimize Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Comprehensive Business Management Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              Powerful solutions that automate processes and drive business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                data-index={index}
                className={`animate-on-scroll group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 ${
                  visibleSections.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${solution.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Why Choose Our Business Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                data-index={index + 10}
                className={`animate-on-scroll text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleSections.includes(index + 10) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Streamline operations and boost efficiency with our intelligent business management solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => openInquiry("I want to start business transformation with Easenext")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Start Business Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <InquiryForm
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Business Process Solutions Inquiry"
        context={inquiryContext}
      />
    </div>
  );
};

export default BusinessProcessSolutions;
