
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Bot, Zap, Cpu, CheckCircle, MessageSquare, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AIAutomationSolutions = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

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

  const solutions = [
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description: "Advanced AI-powered chatbots that understand context and provide human-like interactions",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Context-aware responses",
        "Integration with CRM systems",
        "24/7 customer support"
      ],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models that predict trends and optimize business decisions",
      features: [
        "Sales forecasting",
        "Customer behavior analysis",
        "Risk assessment models",
        "Market trend prediction",
        "Real-time insights dashboard"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Intelligent workflow automation that learns and adapts to your business processes",
      features: [
        "Document processing",
        "Email automation",
        "Data entry automation",
        "Report generation",
        "Task scheduling"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    { icon: Zap, title: "90% Faster Processing", description: "AI automation dramatically speeds up tasks" },
    { icon: Brain, title: "Smart Learning", description: "Systems that improve over time" },
    { icon: Bot, title: "24/7 Operations", description: "Always-on intelligent automation" },
    { icon: Cpu, title: "Scalable AI", description: "Solutions that grow with your business" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
              AI & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Automation</span> Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-200">
              Harness the power of artificial intelligence to automate processes, predict outcomes, and transform your business operations
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full animate-bounce-gentle"
            >
              Explore AI Solutions
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
              Intelligent Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              Advanced AI technologies that learn, adapt, and optimize your business processes
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
              Why Choose AI Automation?
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Automate with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that learns and adapts to your needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Start AI Automation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomationSolutions;
