
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Code, Smartphone, Palette, Zap, CheckCircle, ArrowRight, Rocket, Star, Clock, Users2, Target, DollarSign,
  Lightbulb, TestTube, Building, CloudUpload, TrendingUp, HeadphonesIcon, Award, Search, Megaphone, LineChart
} from "lucide-react";

import { InquiryForm } from "@/components/InquiryForm";

const ProductDevelopment = () => {
  const [selectedModel, setSelectedModel] = useState("fixed");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState("");

  const openInquiry = (context: string) => {
    setInquiryContext(context);
    setIsInquiryOpen(true);
  };

  const codeSnippets = [
    "const createApp = () => { return innovative(); }",
    "function buildMVP() { return rapid && scalable; }",
    "class Product { constructor() { this.success = true; } }",
    "const deploy = async () => await launch.toMarket();",
    "export default excellence;"
  ];

  const developmentStages = [
    {
      icon: Lightbulb,
      title: "Conceptualization and Discovery",
      description: "Before diving into development, we ensure that your product idea is solid. We work with you to understand your goals, challenges, and market opportunities.",
      services: [
        "Idea Validation: Evaluate the viability of your product in the real world",
        "Market Research: Identify target markets, competitors, and customer pain points", 
        "User Personas: Create detailed personas to ensure user-centric development"
      ],
      color: "text-yellow-500",
      bgColor: "from-yellow-50 to-orange-100"
    },
    {
      icon: TestTube,
      title: "MVP (Minimum Viable Product) Development", 
      description: "We believe in starting small to build big. Our MVP Development ensures that you can validate your product idea with real users while minimizing costs and risks.",
      services: [
        "Fast Prototyping: Rapid development of core features to test the market",
        "Agile Methodology: Iterative approach to adapt and scale your product",
        "User Feedback Integration: Collect data from real users to refine your product"
      ],
      color: "text-blue-500",
      bgColor: "from-blue-50 to-cyan-100"
    },
    {
      icon: Building,
      title: "Full Product Development and Scaling",
      description: "Once your MVP is validated, we take it to the next level. Our team is dedicated to building a full-scale product that's reliable, secure, and ready for the market.",
      services: [
        "Full-Scale Development: Scalable, secure, and performance-oriented solutions",
        "UI/UX Design: Focus on user-friendly designs to ensure great user experiences",
        "Backend & API Integrations: Robust backend systems that support your product's features",
        "Cross-Platform Compatibility: Ensure your product works across multiple devices and platforms"
      ],
      color: "text-green-500",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      icon: CloudUpload,
      title: "Deployment and Launch",
      description: "The final step in bringing your product to life is launching it successfully. Our deployment services ensure your product is secure, stable, and ready to scale.",
      services: [
        "Cloud Deployment: Scalable cloud infrastructure for secure and efficient product launch",
        "Beta Testing: Conduct thorough testing to ensure the product works across all environments",
        "Security and Compliance: Implement robust security measures to protect your data and users"
      ],
      color: "text-purple-500",
      bgColor: "from-purple-50 to-violet-100"
    },
    {
      icon: TrendingUp,
      title: "Marketing and Growth",
      description: "Launching your product is only half the battle. Our marketing services help you reach the right audience, build brand awareness, and generate consistent growth.",
      services: [
        "Product Launch Strategy: Planning and execution for maximum impact",
        "SEO & Content Marketing: Improve visibility and ranking on search engines",
        "Paid Advertising Campaigns: Reach your target audience using PPC, social media ads, and more",
        "Growth Hacking: Implement unconventional strategies to quickly scale your product's user base"
      ],
      color: "text-pink-500",
      bgColor: "from-pink-50 to-rose-100"
    },
    {
      icon: HeadphonesIcon,
      title: "Consultation and Continuous Improvement",
      description: "We don't stop at launch. Our consultation services ensure that your product evolves with the market. Our experts provide ongoing support, feature improvements, and product iterations.",
      services: [
        "Market & User Feedback Analysis: Regularly monitor feedback and adapt your product",
        "Continuous Integration and Deployment (CI/CD): Automated systems to roll out features and bug fixes",
        "Customer Support Integration: Ensure your users are always supported with seamless assistance"
      ],
      color: "text-indigo-500",
      bgColor: "from-indigo-50 to-blue-100"
    }
  ];

  const partnershipModels = {
    fixed: {
      title: "Fixed Scope",
      subtitle: "Predictable & Structured",
      description: "Best for well-defined projects with clear requirements and timelines",
      icon: Target,
      features: [
        "Predictable Timeline & Budget: Full transparency with a fixed timeline and budget",
        "Milestone-Based Delivery: Delivers in manageable phases, ensuring steady progress", 
        "Risk-Free Engagement: A clear scope means fewer surprises",
        "Detailed documentation and project planning",
        "Quality assurance included",
        "Perfect for specific set of requirements"
      ],
      price: "Starting from $5,000",
      badge: "Most Popular",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    teams: {
      title: "Dedicated Teams",
      subtitle: "Scalable & Flexible", 
      description: "Best for long-term or evolving projects requiring extended collaboration and flexibility",
      icon: Users2,
      features: [
        "Scalable & Flexible: Adjust your team size and skill sets as your project grows",
        "Full Control Over Team Dynamics: Collaborate closely with a dedicated team aligned with your vision",
        "Ideal for Complex or Long-Term Projects: For projects requiring continuous refinement",
        "Direct communication channel",
        "Agile methodology with regular sprint reviews",
        "Perfect for ongoing, complex projects"
      ],
      price: "Starting from $3,000/month",
      badge: "Enterprise Choice",
      color: "from-purple-500 to-purple-600", 
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-600"
    },
    milestone: {
      title: "Milestone-Based",
      subtitle: "Flexible & Adaptive",
      description: "Best for projects that evolve over time with changing requirements and needs",
      icon: Clock,
      features: [
        "Pay-as-You-Go Model: Pay for completed milestones only, giving you control over budget",
        "Adaptive Scope Management: Adjust project scope as needs evolve", 
        "Ideal for Evolving Requirements: Perfect for projects that need flexibility in scope and timeline",
        "Risk mitigation approach",
        "Incremental delivery cycles",
        "Transparent reporting and progress reviews"
      ],
      price: "Custom Pricing",
      badge: "Most Flexible",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100", 
      textColor: "text-green-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {codeSnippets.map((code, index) => (
            <div
              key={index}
              className="absolute text-gray-400 font-mono text-sm opacity-20 animate-float"
              style={{
                left: `${10 + index * 20}%`,
                top: `${20 + index * 15}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${4 + index}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Ideas Into <span className="text-gradient">Scalable Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              In today's competitive market, launching a successful product requires careful planning, iterative development, 
              and effective market strategies. Whether you are just starting or scaling, our Product Development services 
              provide end-to-end solutions to turn your vision into reality.
            </p>
            <Button 
              onClick={() => openInquiry("I want to transform my idea into a scalable product with Easenext")}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 btn-animate hover-lift"
            >
              Bring Your Idea to Life
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Development Stages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Guide You Through the Product Development Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Product Development services take you through a proven process to bring your ideas to life
            </p>
          </div>

          <div className="space-y-12">
            {developmentStages.map((stage, index) => (
              <Card 
                key={stage.title}
                className={`hover-lift card-hover animate-slide-in-left border-0 shadow-lg bg-gradient-to-br ${stage.bgColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white rounded-2xl shadow-lg">
                          <stage.icon className={`h-10 w-10 ${stage.color}`} />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            Step {index + 1}
                          </Badge>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800">Key Services:</h4>
                      <ul className="space-y-3">
                        {stage.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`w-5 h-5 ${stage.color} mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Star className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Three Flexible Partnership Models</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the Perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Partnership Model
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choosing the right partnership model is crucial to the success of your project. We offer three flexible engagement 
              models to fit your project's requirements, timeline, and budget. Each model guarantees maximum value and ensures successful delivery.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto mb-12">
            {Object.entries(partnershipModels).map(([key, model]) => (
              <AccordionItem key={key} value={key} className="mb-4">
                <AccordionTrigger className="hover:no-underline">
                  <Card className={`w-full border-2 transition-all duration-300 bg-gradient-to-br ${model.bgColor} hover:shadow-lg`}>
                    <CardHeader className="text-left">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${model.color} flex items-center justify-center`}>
                            <model.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <CardTitle className={`text-xl ${model.textColor}`}>
                                {model.title}
                              </CardTitle>
                              <Badge className={`bg-gradient-to-r ${model.color} text-white text-xs`}>
                                {model.badge}
                              </Badge>
                            </div>
                            <CardDescription className={`${model.textColor} font-medium`}>
                              {model.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <div className={`text-right ${model.textColor}`}>
                          <div className="text-2xl font-bold">{model.price}</div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="mt-4 border-0 shadow-lg">
                    <CardContent className="p-8">
                      <p className="text-gray-600 mb-6 text-lg">{model.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {model.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${model.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <Button 
                          onClick={() => openInquiry(`I'm interested in ${model.title} engagement model for my project`)}
                          className={`bg-gradient-to-r ${model.color} hover:opacity-90 text-white px-8 py-3 text-lg font-semibold btn-animate hover-lift shadow-lg`}
                        >
                          Get Started with {model.title}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center animate-fade-in">
            <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  Why Choose Easenext for Product Development?
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We stand out because of our commitment to quality, innovation, and customer satisfaction. 
                  From ideation to growth, we provide a comprehensive suite of services that are fully customizable to your needs.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                  <h4 className="font-semibold text-gray-900 mb-2">End-to-End Service</h4>
                  <p className="text-gray-600 text-sm">Complete product lifecycle from ideation to growth</p>
                </div>
                <div className="text-center">
                  <Users2 className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Experts</h4>
                  <p className="text-gray-600 text-sm">Seasoned professionals in product development</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                  <h4 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h4>
                  <p className="text-gray-600 text-sm">Every solution customized to your business goals</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to bring your product idea to life?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's make your vision a reality with our tailored product development services. 
            Whether you need fixed scope development, dedicated teams, or a flexible approach, 
            Easenext offers tailored solutions to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openInquiry("I'm ready to bring my product idea to life and would like a consultation")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 btn-animate hover-lift"
            >
              Contact Us for Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => openInquiry("I'd like to schedule a demo to discuss my project in detail")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 btn-animate hover-lift"
            >
              Schedule a Demo
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <InquiryForm
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Product Development Inquiry"
        context={inquiryContext}
      />
    </div>
  );
};

export default ProductDevelopment;
