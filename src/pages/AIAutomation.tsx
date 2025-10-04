
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Lightbulb,
  Cpu,
  Database,
  Network,
  ChevronRight,
  Play,
  Download,
  BarChart3,
  Workflow
} from "lucide-react";
import { Header } from "@/components/Header";

const AIAutomation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [currentProcess, setCurrentProcess] = useState(0);

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

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % automationProcess.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const aiCapabilities = [
    {
      title: "Intelligent Document Processing",
      description: "Extract, classify, and process documents with 99.5% accuracy using advanced OCR and NLP.",
      icon: Database,
      gradient: "from-blue-500 to-indigo-600",
      features: ["OCR & Text Extraction", "Data Validation", "Auto-Classification", "Multi-format Support"],
      stats: { accuracy: "99.5%", speed: "10x Faster", cost: "70% Reduction" }
    },
    {
      title: "Predictive Analytics Engine",
      description: "Forecast trends, predict outcomes, and make data-driven decisions with machine learning.",
      icon: BarChart3,
      gradient: "from-emerald-500 to-teal-600",
      features: ["Trend Analysis", "Risk Assessment", "Demand Forecasting", "Behavioral Prediction"],
      stats: { accuracy: "94%", insights: "Real-time", roi: "300% ROI" }
    },
    {
      title: "Intelligent Workflow Automation",
      description: "Automate complex business processes with AI-powered decision making and routing.",
      icon: Workflow,
      gradient: "from-purple-500 to-pink-600",
      features: ["Smart Routing", "Exception Handling", "Dynamic Rules", "Multi-step Automation"],
      stats: { efficiency: "85%", errors: "95% Less", time: "60% Faster" }
    },
    {
      title: "Conversational AI Assistant",
      description: "Deploy intelligent chatbots and virtual assistants for customer service and support.",
      icon: Bot,
      gradient: "from-orange-500 to-red-600",
      features: ["Natural Language", "Multi-channel", "Context Awareness", "Learning Capability"],
      stats: { satisfaction: "92%", resolution: "80%", availability: "24/7" }
    }
  ];

  const automationProcess = [
    { 
      title: "Data Collection", 
      description: "AI gathers and processes data from multiple sources",
      icon: Database,
      color: "blue"
    },
    { 
      title: "Pattern Recognition", 
      description: "Machine learning identifies patterns and anomalies",
      icon: Brain,
      color: "emerald"
    },
    { 
      title: "Decision Making", 
      description: "AI makes intelligent decisions based on learned patterns",
      icon: Target,
      color: "purple"
    },
    { 
      title: "Action Execution", 
      description: "Automated systems execute the recommended actions",
      icon: Zap,
      color: "orange"
    }
  ];

  const industryApplications = [
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"],
      improvement: "40% efficiency gain",
      icon: Cpu
    },
    {
      industry: "Healthcare",
      applications: ["Diagnostic Assistance", "Patient Monitoring", "Drug Discovery"],
      improvement: "60% faster diagnosis",
      icon: Shield
    },
    {
      industry: "Finance",
      applications: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading"],
      improvement: "90% fraud reduction",
      icon: TrendingUp
    },
    {
      industry: "Retail",
      applications: ["Demand Forecasting", "Personalization", "Inventory Management"],
      improvement: "25% sales increase",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 px-6 py-2 text-sm">
              AI-Powered Automation
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Unleash the Power of
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with intelligent automation that learns, adapts, and evolves. 
              Reduce costs by 70% while increasing efficiency by 10x with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch AI Demo
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-gray-700 border-2 border-gray-300 hover:bg-gray-50 text-lg px-10 py-4 rounded-full"
              >
                <Download className="mr-2 w-5 h-5" />
                AI Implementation Guide
              </Button>
            </div>

            {/* AI Process Visualization */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {automationProcess.map((step, index) => (
                  <div 
                    key={step.title}
                    className={`relative p-6 rounded-2xl transition-all duration-500 ${
                      index === currentProcess 
                        ? 'bg-white shadow-2xl scale-105 border-2 border-indigo-300' 
                        : 'bg-white/60 shadow-lg'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-4 mx-auto`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    
                    {index < automationProcess.length - 1 && (
                      <ChevronRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Advanced AI
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Automation Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform delivers intelligent automation across all business functions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {aiCapabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                data-index={index}
                className={`fade-in-section group bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  visibleSections.includes(index) ? 'animate-slide-in-left opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${capability.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4`}>
                        <capability.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                          {capability.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                    {capability.description}
                  </CardDescription>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(capability.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="text-gray-700 flex items-center group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <CheckCircle className={`w-5 h-5 bg-gradient-to-r ${capability.gradient} text-white rounded-full mr-3 flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI automation solutions are transforming businesses across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryApplications.map((industry, index) => (
              <Card 
                key={industry.industry}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {industry.industry}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {industry.applications.map((app) => (
                      <li key={app} className="text-gray-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                    <div className="text-lg font-bold text-indigo-800">{industry.improvement}</div>
                    <div className="text-xs text-indigo-600">Average Improvement</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our AI Implementation
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step approach to implementing AI automation in your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Strategy",
                  description: "We analyze your current processes, identify automation opportunities, and create a customized AI roadmap.",
                  duration: "2-3 weeks"
                },
                {
                  step: "02", 
                  title: "AI Model Development",
                  description: "Our experts develop and train custom AI models tailored to your specific business requirements.",
                  duration: "4-6 weeks"
                },
                {
                  step: "03",
                  title: "Integration & Testing",
                  description: "Seamless integration with your existing systems followed by comprehensive testing and validation.",
                  duration: "3-4 weeks"
                },
                {
                  step: "04",
                  title: "Deployment & Optimization",
                  description: "Full deployment with ongoing monitoring, optimization, and continuous learning capabilities.",
                  duration: "2-3 weeks"
                }
              ].map((phase, index) => (
                <div key={phase.step} className="flex items-start group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {phase.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-2 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-indigo-500 mr-2" />
                      <span className="text-sm text-indigo-600 font-medium">{phase.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation to discuss your AI automation needs and get a customized implementation plan.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                  <span className="font-medium text-gray-700">Free Consultation</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                  <span className="font-medium text-gray-700">Custom AI Strategy</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
                  <span className="font-medium text-gray-700">ROI Projection</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            The Future is
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Artificially Intelligent
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Don't let your competitors get ahead. Start your AI transformation today and 
            experience the power of intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 text-xl px-12 py-5 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Start AI Transformation
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-2 border-white/50 hover:bg-white/10 hover:border-white text-xl px-12 py-5 backdrop-blur-sm rounded-full"
            >
              <Lightbulb className="mr-2 w-6 h-6" />
              Explore AI Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* Floating AI Assistant */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 rounded-full px-6 py-3 animate-bounce-gentle"
        >
          <Bot className="mr-2 w-5 h-5" />
          AI Assistant
        </Button>
      </div>
    </div>
  );
};

export default AIAutomation;
