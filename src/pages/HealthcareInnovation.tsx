
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Monitor, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Smartphone,
  Database,
  Zap
} from "lucide-react";

const HealthcareInnovation = () => {
  const [activeTab, setActiveTab] = useState("telemedicine");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.healthcare-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      id: "telemedicine",
      title: "Telemedicine Platform",
      description: "Connect patients with healthcare providers through secure video consultations",
      icon: Monitor,
      features: ["HD Video Consultations", "Secure Messaging", "Digital Prescriptions", "Appointment Scheduling"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "ai-diagnostics",
      title: "AI Diagnostics",
      description: "Advanced AI-powered diagnostic tools for faster and more accurate results",
      icon: Brain,
      features: ["Medical Image Analysis", "Symptom Assessment", "Predictive Analytics", "Risk Stratification"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "patient-management",
      title: "Patient Management",
      description: "Comprehensive patient records and care coordination system",
      icon: Users,
      features: ["Electronic Health Records", "Care Coordination", "Patient Portal", "Analytics Dashboard"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "mobile-health",
      title: "Mobile Health Apps",
      description: "Patient-centric mobile applications for health monitoring and engagement",
      icon: Smartphone,
      features: ["Health Tracking", "Medication Reminders", "Wellness Programs", "Emergency Alerts"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reduced Wait Times",
      description: "Cut patient waiting time by up to 70% with efficient digital workflows",
      stat: "70%"
    },
    {
      icon: TrendingUp,
      title: "Improved Outcomes",
      description: "Enhanced patient outcomes through AI-assisted diagnosis and treatment",
      stat: "85%"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "HIPAA-compliant security ensuring patient data protection",
      stat: "100%"
    },
    {
      icon: Activity,
      title: "Operational Efficiency",
      description: "Streamlined operations leading to cost reduction and better resource utilization",
      stat: "60%"
    }
  ];

  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Machine learning algorithms that assist healthcare professionals in making accurate diagnoses",
      icon: Brain,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Secure Patient Portal",
      description: "HIPAA-compliant platform for patients to access their health records and communicate with providers",
      icon: Shield,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with alerts for critical health changes",
      icon: Activity,
      gradient: "from-red-400 to-red-600"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics for population health management and clinical insights",
      icon: Database,
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-emerald-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Transforming Healthcare Through Technology
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-slide-in-left">
              <span className="block">Healthcare Innovation</span>
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                That Saves Lives
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-in-right animate-delay-200">
              Revolutionize patient care with our cutting-edge healthcare technology solutions, 
              from AI-powered diagnostics to comprehensive telemedicine platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in animate-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                <Stethoscope className="mr-2 w-5 h-5" />
                Explore Healthcare Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-4 border-2 border-emerald-300 hover:border-emerald-400 bg-white/80 backdrop-blur-sm hover:bg-emerald-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left animate-delay-200">
              Comprehensive digital health solutions designed to improve patient outcomes and streamline healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg hover:shadow-xl ${
                  activeTab === solution.id ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                onClick={() => setActiveTab(solution.id)}
              >
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${solution.color} mb-4 mx-auto`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Active Solution Details */}
          <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-xl">
            <CardContent className="p-8">
              {solutions.map((solution) => 
                activeTab === solution.id && (
                  <div key={solution.id} className="animate-fade-in">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                        <ul className="space-y-3 mb-6">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className={`bg-gradient-to-r ${solution.color} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                          Learn More About {solution.title}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      <div className="relative">
                        <div className={`w-full h-80 bg-gradient-to-br ${solution.color} rounded-2xl shadow-xl flex items-center justify-center`}>
                          <solution.icon className="w-32 h-32 text-white/20" />
                          <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              Cutting-edge technology features designed to enhance healthcare delivery and patient experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                data-index={index}
                className={`healthcare-card group bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Measurable Healthcare Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left animate-delay-200">
              Our healthcare solutions deliver tangible improvements in patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
            Join leading healthcare organizations in revolutionizing patient care with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in animate-delay-400">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              <Heart className="mr-2 w-5 h-5" />
              Start Healthcare Transformation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Contact Healthcare Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareInnovation;
