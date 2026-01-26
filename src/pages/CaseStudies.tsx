import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Quote, BarChart3, Zap, Shield, Target, Award, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  const caseStudies = [
    // Healthcare Cases
    {
      id: 1,
      title: "HealthTrack Pro - AI Patient Management System",
      industry: "healthcare",
      service: "Healthcare Innovation",
      client: "MedCare Regional Hospital",
      problem: "Manual patient tracking causing 40% operational inefficiency and delayed treatment decisions",
      solution: "AI-powered patient management system with real-time analytics, predictive diagnosis assistance, and automated workflow optimization",
      impact: {
        efficiency: "+85%",
        cost: "-60%", 
        satisfaction: "+95%",
        time: "4 months"
      },
      quote: "The AI system has revolutionized our patient care. We've reduced waiting times by 60% and improved diagnostic accuracy significantly.",
      quotePerson: "Dr. Sarah Mitchell, Chief Medical Officer",
      image: "photo-1605810230434-7631ac76ec81",
      tags: ["AI", "Healthcare", "Analytics", "Automation"],
      metrics: [
        { label: "Patient Wait Time", before: "45 min", after: "18 min" },
        { label: "Diagnostic Accuracy", before: "82%", after: "94%" },
        { label: "Staff Productivity", before: "65%", after: "89%" }
      ]
    },
    {
      id: 2,
      title: "MedFlow - Telemedicine Platform",
      industry: "healthcare",
      service: "Product Development",
      client: "CareConnect Clinics",
      problem: "Limited patient access to specialists and inefficient remote consultation workflows",
      solution: "Custom telemedicine platform with video consultations, digital prescriptions, and patient health monitoring",
      impact: {
        efficiency: "+120%",
        cost: "-45%",
        satisfaction: "+88%",
        time: "5 months"
      },
      quote: "Our patient reach increased by 300% and consultation quality improved dramatically with the new platform.",
      quotePerson: "Dr. James Wilson, Medical Director",
      image: "photo-1576091160550-2173dba999ef",
      tags: ["Telemedicine", "Web App", "Mobile", "Healthcare"]
    },

    // Business Process Cases
    {
      id: 3,
      title: "RetailFlow - Omnichannel Commerce Platform",
      industry: "retail",
      service: "Business Process Solutions",
      client: "FashionForward Inc.",
      problem: "Disconnected online and offline sales channels leading to inventory issues and customer experience gaps",
      solution: "Unified omnichannel platform with real-time inventory sync, customer journey tracking, and automated order management",
      impact: {
        efficiency: "+95%",
        cost: "-50%",
        satisfaction: "+85%",
        time: "6 months"
      },
      quote: "Our sales increased by 200% within the first quarter. The platform seamlessly connected all our channels.",
      quotePerson: "Mark Thompson, CEO",
      image: "photo-1460925895917-afdab827c52f",
      tags: ["E-commerce", "Integration", "Automation", "Analytics"]
    },
    {
      id: 4,
      title: "SupplyChain Pro - Logistics Optimization",
      industry: "logistics",
      service: "Business Process Solutions",
      client: "Global Logistics Corp",
      problem: "Inefficient supply chain management with 30% delivery delays and high operational costs",
      solution: "AI-driven supply chain optimization with route planning, inventory forecasting, and real-time tracking",
      impact: {
        efficiency: "+110%",
        cost: "-65%",
        satisfaction: "+92%",
        time: "4 months"
      },
      quote: "Delivery times improved by 70% and our operational costs dropped significantly. Game-changing solution!",
      quotePerson: "Robert Chen, Operations Director",
      image: "photo-1586528116311-ad8dd3c8310d",
      tags: ["AI", "Logistics", "Optimization", "Real-time"]
    },

    // AI & Automation Cases
    {
      id: 5,
      title: "SmartPredict - Manufacturing AI Assistant",
      industry: "manufacturing",
      service: "AI & Automation",
      client: "TechManufacturing Ltd",
      problem: "Unexpected equipment failures causing 25% production downtime and quality issues",
      solution: "Predictive maintenance AI system with IoT sensors, machine learning algorithms, and automated alerts",
      impact: {
        efficiency: "+140%",
        cost: "-70%",
        satisfaction: "+90%",
        time: "3 months"
      },
      quote: "Downtime reduced by 80%. The AI predicts failures before they happen, saving us millions annually.",
      quotePerson: "Lisa Anderson, Plant Manager",
      image: "photo-1518770660439-4636190af475",
      tags: ["AI", "Predictive Analytics", "IoT", "Manufacturing"]
    },
    {
      id: 6,
      title: "ChatBot Pro - Customer Service Automation",
      industry: "customer-service",
      service: "AI & Automation",
      client: "ServiceFirst Solutions",
      problem: "High customer service costs and 60% of queries requiring human intervention",
      solution: "Advanced AI chatbot with natural language processing, sentiment analysis, and automated ticket routing",
      impact: {
        efficiency: "+200%",
        cost: "-80%",
        satisfaction: "+85%",
        time: "2 months"
      },
      quote: "Customer satisfaction improved while reducing support costs by 80%. The AI handles complex queries beautifully.",
      quotePerson: "Emma Rodriguez, Customer Success Manager",
      image: "photo-1551434678-e076c223a692",
      tags: ["AI", "NLP", "Customer Service", "Automation"]
    },

    // Product Development Cases
    {
      id: 7,
      title: "EduLearn - Interactive Learning Platform",
      industry: "education",
      service: "Product Development",
      client: "Future Education Institute",
      problem: "Traditional learning methods with low student engagement and poor learning outcomes",
      solution: "Interactive e-learning platform with gamification, progress tracking, and personalized learning paths",
      impact: {
        efficiency: "+150%",
        cost: "-40%",
        satisfaction: "+95%",
        time: "6 months"
      },
      quote: "Student engagement increased by 200% and learning outcomes improved dramatically. Students love the platform!",
      quotePerson: "Dr. Michael Brown, Academic Director",
      image: "photo-1522202176988-66273c2fd55f",
      tags: ["Education", "Mobile App", "Gamification", "Analytics"]
    },
    {
      id: 8,
      title: "FinTrack - Personal Finance App",
      industry: "fintech",
      service: "Product Development",
      client: "MoneyWise Financial",
      problem: "Users struggling with personal finance management and lack of financial literacy",
      solution: "Comprehensive finance app with expense tracking, investment advice, and financial education modules",
      impact: {
        efficiency: "+180%",
        cost: "-35%",
        satisfaction: "+98%",
        time: "5 months"
      },
      quote: "Our users are now saving 40% more and making better investment decisions. The app exceeded all expectations.",
      quotePerson: "David Kim, Product Manager",
      image: "photo-1486312338219-ce68d2c6f44d",
      tags: ["FinTech", "Mobile App", "AI", "Analytics"]
    },

    // Trending Technologies Cases
    {
      id: 9,
      title: "BlockChain Pro - Supply Chain Transparency",
      industry: "blockchain",
      service: "Trending Technologies",
      client: "Organic Foods Network",
      problem: "Lack of supply chain transparency causing consumer trust issues and compliance challenges",
      solution: "Blockchain-based traceability system with smart contracts, QR code tracking, and immutable records",
      impact: {
        efficiency: "+90%",
        cost: "-30%",
        satisfaction: "+100%",
        time: "4 months"
      },
      quote: "Complete supply chain transparency increased customer trust by 150%. Compliance is now effortless.",
      quotePerson: "Sarah Green, Supply Chain Director",
      image: "photo-1559526324-4b87b5e36e44",
      tags: ["Blockchain", "Supply Chain", "Smart Contracts", "Transparency"]
    },
    {
      id: 10,
      title: "VR Training - Immersive Learning Solution",
      industry: "training",
      service: "Trending Technologies",
      client: "SafeWork Industries",
      problem: "High-risk training scenarios with safety concerns and expensive traditional training methods",
      solution: "VR-based training platform with realistic simulations, progress tracking, and safety assessments",
      impact: {
        efficiency: "+160%",
        cost: "-75%",
        satisfaction: "+92%",
        time: "5 months"
      },
      quote: "Training accidents reduced to zero while training effectiveness increased by 250%. Revolutionary approach!",
      quotePerson: "Tom Williams, Training Director",
      image: "photo-1592478411213-6153e4ebc696",
      tags: ["VR", "Training", "Safety", "Simulation"]
    },

    // Hire Experts Cases
    {
      id: 11,
      title: "DevTeam Pro - Dedicated Development Squad",
      industry: "startup",
      service: "Hire Experts",
      client: "StartupXYZ",
      problem: "Struggling to find skilled developers and scale development team quickly for product launch",
      solution: "Dedicated team of full-stack developers, UI/UX designers, and project manager working remotely",
      impact: {
        efficiency: "+300%",
        cost: "-60%",
        satisfaction: "+95%",
        time: "1 month"
      },
      quote: "Easenext's team delivered our MVP in half the time we expected. Their expertise is exceptional.",
      quotePerson: "Alex Johnson, Founder & CEO",
      image: "photo-1522071820081-009f0129c71c",
      tags: ["Team Extension", "Full-Stack", "Agile", "Remote"]
    },
    {
      id: 12,
      title: "AI Consultant - Machine Learning Implementation",
      industry: "enterprise",
      service: "Hire Experts",
      client: "Enterprise Solutions Inc",
      problem: "Need for AI expertise to implement machine learning solutions without hiring full-time AI specialists",
      solution: "AI/ML consultant providing algorithm development, model training, and implementation guidance",
      impact: {
        efficiency: "+120%",
        cost: "-50%",
        satisfaction: "+88%",
        time: "3 months"
      },
      quote: "The AI consultant transformed our data into actionable insights. ROI was visible within weeks.",
      quotePerson: "Maria Santos, CTO",
      image: "photo-1551288049-bebda4e38f71",
      tags: ["AI Consultant", "Machine Learning", "Data Science", "Strategy"]
    }
  ];

  const testimonialQuotes = [
    {
      quote: "Easenext delivered beyond our expectations. The AI solution transformed our entire business model and increased our revenue by 200%.",
      author: "Sarah Johnson",
      role: "CEO, InnovateTech",
      company: "InnovateTech"
    },
    {
      quote: "The team's expertise and dedication were outstanding. They delivered a complex healthcare platform ahead of schedule.",
      author: "Dr. Michael Chen",
      role: "CTO, MediFuture",
      company: "MediFuture"
    },
    {
      quote: "Working with Easenext was a game-changer for our digital transformation. Their AI automation saved us $2M annually.",
      author: "Emily Rodriguez",
      role: "COO, NextGen Manufacturing",
      company: "NextGen Manufacturing"
    }
  ];

  const serviceStats = [
    { service: "Healthcare Innovation", projects: 25, satisfaction: "96%", avgROI: "300%" },
    { service: "Business Process Solutions", projects: 40, satisfaction: "94%", avgROI: "250%" },
    { service: "AI & Automation", projects: 35, satisfaction: "98%", avgROI: "400%" },
    { service: "Product Development", projects: 50, satisfaction: "95%", avgROI: "280%" },
    { service: "Trending Technologies", projects: 20, satisfaction: "93%", avgROI: "350%" },
    { service: "Hire Experts", projects: 60, satisfaction: "97%", avgROI: "200%" }
  ];

  const filteredCaseStudies = selectedIndustry === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry || study.service.toLowerCase().includes(selectedIndustry));

  const nextStudy = () => {
    setCurrentStudyIndex((prev) => (prev + 1) % filteredCaseStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudyIndex((prev) => (prev - 1 + filteredCaseStudies.length) % filteredCaseStudies.length);
  };

  return (
    <div className="min-h-dvh bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section - Enhanced with better spacing */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Time to <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovate</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped 200+ businesses transform their operations and achieve remarkable results through innovative technology solutions across all industries.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {serviceStats.map((stat, index) => (
                <div key={stat.service} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl font-bold text-blue-600">{stat.projects}+</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.service}</div>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 btn-animate hover-lift shadow-lg">
              See How We Helped Others Win
              <BarChart3 className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Stats Overview - Enhanced containers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Track Record</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Proven results across all our service offerings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceStats.map((stat, index) => (
              <Card key={stat.service} className="hover-lift animate-fade-in border-0 shadow-xl bg-gradient-to-br from-white to-gray-50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <h3 className="font-semibold text-gray-900 mb-6 text-lg">{stat.service}</h3>
                  <div className="grid grid-cols-3 gap-6 text-sm">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-blue-600">{stat.projects}</div>
                      <div className="text-gray-600 font-medium">Projects</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-green-600">{stat.satisfaction}</div>
                      <div className="text-gray-600 font-medium">Satisfaction</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-purple-600">{stat.avgROI}</div>
                      <div className="text-gray-600 font-medium">Avg ROI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry/Service Filter - Enhanced styling */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7 mb-8 bg-white shadow-lg border-0 p-2 rounded-xl">
              <TabsTrigger value="all" className="text-sm font-medium">All Cases</TabsTrigger>
              <TabsTrigger value="healthcare" className="text-sm font-medium">Healthcare</TabsTrigger>
              <TabsTrigger value="business" className="text-sm font-medium">Business Process</TabsTrigger>
              <TabsTrigger value="ai" className="text-sm font-medium">AI & Automation</TabsTrigger>
              <TabsTrigger value="product" className="text-sm font-medium">Product Dev</TabsTrigger>
              <TabsTrigger value="trending" className="text-sm font-medium">Trending Tech</TabsTrigger>
              <TabsTrigger value="hire" className="text-sm font-medium">Hire Experts</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Navigation Controls */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStudy}
              disabled={filteredCaseStudies.length === 0}
              className="flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="text-sm text-gray-600 font-medium">
              {filteredCaseStudies.length > 0 && (
                <>Study {currentStudyIndex + 1} of {filteredCaseStudies.length}</>
              )}
            </div>
            <Button
              variant="outline"
              onClick={nextStudy}
              disabled={filteredCaseStudies.length === 0}
              className="flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid - Enhanced with collapsible sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredCaseStudies.map((study, index) => (
              <Collapsible
                key={study.id}
                open={expandedStudy === study.id}
                onOpenChange={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
              >
                <Card 
                  className="hover-lift card-hover animate-fade-in border-0 shadow-xl overflow-hidden group bg-gradient-to-br from-white to-gray-50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${study.image}?auto=format&fit=crop&w=800&h=400`}
                      alt={study.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 flex gap-3">
                      <Badge className="bg-blue-600 text-white font-medium px-3 py-1">
                        {study.service}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/90 text-gray-700 font-medium px-3 py-1">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <Award className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CollapsibleTrigger asChild>
                      <div className="cursor-pointer group/trigger">
                        <CardTitle className="text-xl text-gray-900 group-hover/trigger:text-blue-600 transition-colors duration-300 flex items-center justify-between">
                          {study.title}
                          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expandedStudy === study.id ? 'rotate-180' : ''}`} />
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-medium mt-2">{study.client}</CardDescription>
                      </div>
                    </CollapsibleTrigger>
                  </CardHeader>
                  
                  <CardContent className="space-y-8 pb-8">
                    {/* Problem-Solution Preview */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Target className="h-5 w-5 text-red-500" />
                          <h4 className="font-semibold text-red-600 text-base">Challenge</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="h-5 w-5 text-blue-500" />
                          <h4 className="font-semibold text-blue-600 text-base">Solution</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Impact Metrics */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <BarChart3 className="h-5 w-5 text-green-500" />
                        <h4 className="font-semibold text-green-600 text-base">Results</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                          <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-green-600">{study.impact.efficiency}</div>
                          <div className="text-sm text-gray-600 font-medium">Efficiency</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                          <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-600">{study.impact.cost}</div>
                          <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                          <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-purple-600">{study.impact.satisfaction}</div>
                          <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                          <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-orange-600">{study.impact.time}</div>
                          <div className="text-sm text-gray-600 font-medium">Timeline</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Collapsible Content */}
                    <CollapsibleContent className="space-y-8">
                      {/* Detailed Metrics if available */}
                      {study.metrics && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 text-base">Before vs After</h4>
                          <div className="space-y-3">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                <span className="font-medium text-gray-700">{metric.label}</span>
                                <div className="flex gap-4">
                                  <span className="text-red-600 font-semibold">{metric.before}</span>
                                  <ArrowRight className="h-4 w-4 text-gray-400" />
                                  <span className="text-green-600 font-semibold">{metric.after}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Quote */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600">
                        <Quote className="h-6 w-6 text-blue-600 mb-4" />
                        <p className="text-gray-700 italic mb-4 font-medium text-lg leading-relaxed">"{study.quote}"</p>
                        <p className="font-semibold text-gray-900">{study.quotePerson}</p>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="hover:bg-blue-100 transition-colors px-3 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Carousel - Enhanced spacing */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Hear from the leaders who chose Easenext to transform their businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialQuotes.map((testimonial, index) => (
              <Card 
                key={testimonial.author}
                className="hover-lift animate-slide-in-left border-0 shadow-2xl bg-white/15 backdrop-blur-md text-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-blue-300 mb-6" />
                  <p className="text-blue-100 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="text-blue-200">{testimonial.role}</p>
                    <p className="text-blue-300 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced spacing */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join 200+ successful companies who chose Easenext to transform their business and achieve remarkable results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-4 btn-animate hover-lift shadow-lg">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-10 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
