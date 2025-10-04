import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Activity, Users, Shield, CheckCircle, Stethoscope, Smartphone, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HealthcareSolutions = () => {
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
      icon: Stethoscope,
      title: "AI Diagnostics",
      description: "Advanced AI-powered diagnostic tools for accurate and faster medical assessments",
      features: [
        "Medical image analysis",
        "Symptom checker AI", 
        "Predictive diagnostics",
        "Real-time health monitoring",
        "Clinical decision support"
      ],
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Telemedicine Platform",
      description: "Complete virtual healthcare delivery system for remote patient care",
      features: [
        "Video consultations",
        "Secure messaging",
        "Digital prescriptions",
        "Appointment scheduling",
        "Patient portal access"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Patient Management",
      description: "Comprehensive patient data management and care coordination system",
      features: [
        "Electronic health records",
        "Care plan management",
        "Medication tracking",
        "Lab results integration",
        "Family access portal"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    { icon: Heart, title: "Better Patient Care", description: "Improved health outcomes through technology" },
    { icon: Shield, title: "HIPAA Compliant", description: "Enterprise-grade security and privacy" },
    { icon: Brain, title: "AI-Powered Insights", description: "Data-driven healthcare decisions" },
    { icon: Users, title: "Care Coordination", description: "Seamless healthcare team collaboration" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
              Smart <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Healthcare</span> Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-red-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-200">
              Transform patient care with AI-powered diagnostics, telemedicine, and intelligent health management systems
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full animate-bounce-gentle"
            >
              Explore Healthcare Tech
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
              Revolutionary Healthcare Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              Cutting-edge solutions that enhance patient care and streamline healthcare operations
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
              Why Choose Our Healthcare Solutions?
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Build the future of healthcare with our intelligent, patient-centered technology solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Start Your Healthcare Innovation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
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

export default HealthcareSolutions;
