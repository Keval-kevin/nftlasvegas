import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Briefcase, Palette, Bot, Star, Clock, Users, ArrowRight, Quote, CheckCircle } from "lucide-react";

import { InquiryForm } from "@/components/InquiryForm";

const HireExperts = () => {
  const [selectedModel, setSelectedModel] = useState("hourly");
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState("");

  const roles = [
    {
      icon: Code,
      title: "Developers",
      description: "Full-stack, frontend, backend, and mobile developers",
      skills: ["React", "Node.js", "Python", "React Native"],
      rate: "$20-40/hr",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
      textColor: "text-blue-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100"
    },
    {
      icon: Briefcase,
      title: "Project Managers",
      description: "Agile project managers and product owners",
      skills: ["Scrum", "Kanban", "Jira", "Confluence"],
      rate: "$20-40/hr",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
      textColor: "text-green-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-green-100 hover:to-emerald-100"
    },
    {
      icon: Palette,
      title: "Designers",
      description: "UI/UX designers and design system experts",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      rate: "$15-35/hr",
      color: "bg-gradient-to-br from-orange-500 to-yellow-500",
      hoverColor: "hover:from-orange-600 hover:to-yellow-600",
      textColor: "text-orange-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-orange-100 hover:to-yellow-100"
    },
    {
      icon: Bot,
      title: "AI Specialists",
      description: "Machine learning and AI implementation experts",
      skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      rate: "$30-60/hr",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
      hoverColor: "hover:from-indigo-600 hover:to-purple-600",
      textColor: "text-indigo-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-purple-100"
    }
  ];

  const hiringModels = {
    hourly: {
      title: "Hourly Engagement",
      description: "Perfect for short-term projects and flexible requirements",
      features: [
        "Pay only for actual hours worked",
        "No long-term commitment required",
        "Flexible scaling up or down",
        "Weekly detailed reporting",
        "Direct communication with experts",
        "Perfect for ongoing maintenance"
      ],
      pricing: "Competitive hourly rates starting from $15/hr",
      benefits: ["Quick start", "Cost effective", "Full flexibility"],
      icon: Clock
    },
    project: {
      title: "Project-Based",
      description: "Fixed-price projects with clearly defined scope and timeline",
      features: [
        "Fixed project cost upfront",
        "Clearly defined deliverables",
        "Milestone-based payments",
        "Built-in risk mitigation",
        "Dedicated project timeline",
        "Quality assurance included"
      ],
      pricing: "Fixed project pricing with milestone payments",
      benefits: ["Predictable costs", "Clear timeline", "Risk-free"],
      icon: Briefcase
    },
    squad: {
      title: "Dedicated Squad",
      description: "Your own dedicated team working as an extension of your company",
      features: [
        "Dedicated team members",
        "Long-term partnership approach",
        "Full-time commitment guarantee",
        "Seamless team integration",
        "Direct team management",
        "Scalable team structure"
      ],
      pricing: "Monthly team rates with dedicated resources",
      benefits: ["Team continuity", "Deep integration", "Long-term value"],
      icon: Users
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart",
      content: "The developers we hired were exceptional. They integrated seamlessly with our team and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, InnovateCorp",
      content: "Working with their AI specialists transformed our product. The expertise and dedication were outstanding.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "CEO, DesignHub",
      content: "The design team helped us create a beautiful, user-friendly interface that our customers love.",
      rating: 5
    }
  ];

  const workflowSteps = [
    { title: "Tell Us Your Needs", description: "Share your project requirements and skill needs" },
    { title: "Match & Interview", description: "We match you with pre-vetted experts for interviews" },
    { title: "Start Working", description: "Begin collaboration with your selected experts" },
    { title: "Scale & Succeed", description: "Scale your team as your project grows" }
  ];

  const handleHireClick = (roleTitle: string) => {
    setInquiryContext(`I'm interested in hiring ${roleTitle} for my project.`);
    setIsInquiryFormOpen(true);
  };

  const handleGetStartedClick = (model: string) => {
    setInquiryContext(`I'm interested in the ${model} hiring model for my project.`);
    setIsInquiryFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Fixed Hero Section - Removed overlapping background elements */}
      <section className="pt-24 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4 mr-2" />
              Top 1% Global Talent
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative z-30">
              Hire <span className="text-blue-600">Expert Talent</span>
              <br />On-Demand
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed relative z-30">
              Access top-tier developers, designers, and specialists instantly. 
              Scale your team with pre-vetted professionals who deliver excellence.
            </p>
            <Button 
              onClick={() => {
                setInquiryContext("I'm interested in hiring expert talent for my project.");
                setIsInquiryFormOpen(true);
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 btn-animate hover-lift shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative z-30"
            >
              Start Hiring Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Roles Grid */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Talent <span className="text-blue-600">Available Now</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our pool of pre-vetted professionals across various specializations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <Card 
                key={role.title}
                className="border-0 shadow-lg relative overflow-hidden group rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleHireClick(role.title)}
              >
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`w-16 h-16 ${role.color} ${role.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl transition-all duration-300 ${role.textColor} group-hover:font-bold`}>
                    {role.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs group-hover:bg-blue-100 group-hover:text-blue-700 group-hover:font-semibold transition-all duration-500 rounded-full"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className={`text-2xl font-bold ${role.textColor} group-hover:scale-110 inline-block transition-transform duration-300`}>
                        {role.rate}
                      </span>
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHireClick(role.title);
                      }}
                      className={`w-full btn-animate ${role.color} ${role.hoverColor} text-white border-0 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 rounded-xl`}
                    >
                      Hire {role.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Flexible Hiring Models Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible <span className="text-blue-600">Hiring Models</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the engagement model that perfectly fits your project needs, timeline, and budget requirements
            </p>
          </div>

          <Tabs value={selectedModel} onValueChange={setSelectedModel} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-2 h-16">
              <TabsTrigger 
                value="hourly" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Hourly
              </TabsTrigger>
              <TabsTrigger 
                value="project" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Project
              </TabsTrigger>
              <TabsTrigger 
                value="squad" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Squad
              </TabsTrigger>
            </TabsList>

            {Object.entries(hiringModels).map(([key, model]) => (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="max-w-6xl mx-auto">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <model.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        {model.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
                        {model.description}
                      </CardDescription>
                    </div>
                    
                    <CardContent className="p-8 md:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            Key Features
                          </h4>
                          <div className="space-y-4">
                            {model.features.map((feature, index) => (
                              <div key={index} className="flex items-start group">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            Key Benefits
                          </h4>
                          <div className="space-y-4 mb-6">
                            {model.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700 font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                            <h5 className="font-semibold text-gray-900 mb-2">Pricing Structure</h5>
                            <p className="text-gray-700 mb-4">{model.pricing}</p>
                            <Button 
                              onClick={() => handleGetStartedClick(model.title)}
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                            >
                              Get Started with {model.title}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from companies who've hired our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="hover-lift animate-slide-in-left border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600 mb-2" />
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Workflow Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process to get you started with expert talent
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            {workflowSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 md:w-1/2">
                  <Card className="hover-lift shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">{step.title}</CardTitle>
                      <CardDescription className="text-gray-700">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg hover-scale hidden md:flex">
                  {index + 1}
                </div>
                
                <div className="flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 200+ companies who've accelerated their growth with our expert talent
          </p>
          <Button 
            onClick={() => {
              setInquiryContext("I'm ready to hire top talent for my project.");
              setIsInquiryFormOpen(true);
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 btn-animate hover-lift shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
          >
            Start Hiring Today
            <Users className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <InquiryForm
        isOpen={isInquiryFormOpen}
        onClose={() => setIsInquiryFormOpen(false)}
        title="Hire Expert Talent"
        context={inquiryContext}
      />

      <Footer />
    </div>
  );
};

export default HireExperts;
