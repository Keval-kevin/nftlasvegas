
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Heart, ShoppingCart, GraduationCap, Shield, Brain, ArrowRight, Sparkles, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { InquiryForm } from "@/components/InquiryForm";

const Solutions = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState("");

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

    document.querySelectorAll('.solution-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const openInquiry = (context: string) => {
    setInquiryContext(context);
    setIsInquiryOpen(true);
  };

  const solutions = [
    {
      title: "Fintech Solutions",
      icon: Building2,
      challenge: "The financial sector is rapidly evolving with increasing regulatory demands, the need for enhanced cybersecurity, and the continuous rise of digital and mobile payments. Consumers demand faster, more secure ways to manage and transfer money.",
      solutions: [
        "Blockchain & Cryptography: Empower your transactions with secure, decentralized ledger technology to prevent fraud and enhance trust.",
        "AI & Machine Learning: Automate fraud detection, risk management, and predictive analytics to make data-driven decisions in real-time.",
        "Payment Gateway Solutions: We offer seamless integration with multiple payment systems for smooth, secure transactions.",
        "RegTech: Automate compliance checks and manage regulatory changes with AI-powered solutions, ensuring your operations are always compliant."
      ],
      keywords: ["AI for Finance", "Blockchain Security", "Payment Automation", "Fintech Innovation"],
      cta: "Explore how our Fintech solutions can transform your business. Contact us to learn more about enhancing your financial services with cutting-edge technology.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-100"
    },
    {
      title: "Healthcare & HealthTech Solutions",
      icon: Heart,
      challenge: "Healthcare is undergoing a digital transformation. Providers are focused on improving patient outcomes, reducing operational costs, and managing complex data while ensuring privacy and security.",
      solutions: [
        "AI-Driven Diagnostics: Improve diagnosis speed and accuracy with artificial intelligence and predictive analytics.",
        "Telemedicine Platforms: Connect patients and healthcare professionals securely through telemedicine solutions, offering convenience and efficiency.",
        "Health Data Analytics: Optimize your decision-making process using big data and AI to predict patient outcomes and enhance operational efficiency.",
        "Patient Management Systems: Seamlessly manage patient records, treatments, and communications in one unified system."
      ],
      keywords: ["AI in Healthcare", "Digital Health Solutions", "Telemedicine", "Health Data Analytics"],
      cta: "Want to improve patient care? Reach out today to learn how we can help modernize your healthcare operations with our innovative solutions.",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-100"
    },
    {
      title: "E-commerce & RetailTech Solutions",
      icon: ShoppingCart,
      challenge: "The retail landscape is rapidly shifting with e-commerce growth and the increasing demand for personalized shopping experiences. Retailers need to engage customers, manage inventory efficiently, and integrate their online and offline stores seamlessly.",
      solutions: [
        "Omnichannel Retail: Unify your customer experience across digital and physical touchpoints with seamless integration.",
        "AI-Powered Personalization: Use AI to recommend products and promotions tailored to individual customers.",
        "Inventory Management Systems: Automate stock management and optimize product availability in real-time.",
        "E-Commerce Optimization: Enhance your e-commerce platform for better speed, security, and scalability, providing a superior shopping experience."
      ],
      keywords: ["Omnichannel Retail", "AI for Retail", "Personalized Shopping", "E-commerce Optimization"],
      cta: "Ready to enhance your retail business? Get in touch to explore how our solutions can help you thrive in the evolving market.",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-100"
    },
    {
      title: "EdTech Solutions",
      icon: GraduationCap,
      challenge: "The education sector is shifting towards digital learning, with institutions and businesses seeking innovative tools to enhance student engagement and improve learning outcomes.",
      solutions: [
        "E-Learning Platforms: Create fully-featured, user-friendly platforms that allow students to access educational content from anywhere.",
        "AI in Education: Use artificial intelligence to personalize learning paths, providing students with targeted resources to boost their learning.",
        "Gamification: Enhance engagement and learning retention with gamified learning experiences.",
        "Learning Management Systems (LMS): Centralize learning content, track student progress, and improve overall learning efficiency."
      ],
      keywords: ["E-learning", "AI in Education", "Gamification in Learning", "Learning Management Systems"],
      cta: "Transform the way students learn. Contact us to find out how our EdTech solutions can drive student success and educational innovation.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100"
    },
    {
      title: "Cybersecurity Solutions",
      icon: Shield,
      challenge: "With the increasing frequency of cyber-attacks, data breaches, and evolving threats, businesses need robust, proactive cybersecurity measures to protect sensitive data and ensure privacy.",
      solutions: [
        "AI-Powered Threat Detection: Leverage machine learning to detect, analyze, and respond to threats in real-time, minimizing risks.",
        "Cloud Security: Protect your cloud environments with secure configurations, encryption, and threat detection tools.",
        "Zero Trust Architecture: Implement a zero-trust model that verifies every request, ensuring secure access to critical resources.",
        "Data Privacy Solutions: Ensure compliance with GDPR, HIPAA, and other privacy regulations with our secure data management tools."
      ],
      keywords: ["AI for Threat Detection", "Zero Trust Security", "Cloud Security", "Cyber Defense Solutions"],
      cta: "Secure your data and protect your business with advanced cybersecurity solutions. Contact us to get started today.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-100"
    },
    {
      title: "Artificial Intelligence & Machine Learning Solutions",
      icon: Brain,
      challenge: "AI and Machine Learning are transforming industries by automating processes, analyzing large datasets, and optimizing business operations. Organizations need to harness the power of AI to stay competitive and drive innovation.",
      solutions: [
        "Deep Learning: Implement deep learning algorithms for advanced data analysis, predictive modeling, and autonomous systems.",
        "Natural Language Processing (NLP): Use NLP to enhance customer interactions, including chatbots, virtual assistants, and sentiment analysis.",
        "Robotic Process Automation (RPA): Automate repetitive tasks to improve efficiency, reduce errors, and free up valuable human resources.",
        "AI Analytics: Extract valuable insights from data, improving decision-making and identifying opportunities for innovation."
      ],
      keywords: ["AI-Powered Analytics", "Deep Learning", "NLP and Chatbots", "Robotic Process Automation"],
      cta: "Embrace the future with AI and Machine Learning solutions. Contact us to discover how we can help your business innovate and optimize operations.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full mb-6 animate-fade-in backdrop-blur-sm border border-white/10">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-300" />
            <span className="text-sm font-semibold text-blue-200">Tailored Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            Unlock the Power of Technology with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Tailored Solutions
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed animate-slide-in-right animate-delay-200">
            In an ever-evolving digital landscape, every industry faces unique challenges. Whether it's streamlining operations, 
            enhancing customer experiences, or staying ahead of emerging trends, our innovative solutions are designed to address 
            the specific needs of each sector. Explore how we can help you unlock new growth opportunities in some of the most promising industries.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                data-index={index}
                className={`solution-card group bg-gradient-to-br ${solution.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative ${
                  visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                
                <CardContent className="p-8 lg:p-12 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 bg-gradient-to-r ${solution.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <solution.icon className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {solution.title}
                          </h2>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                          The Challenge:
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{solution.challenge}</p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          Our Solutions:
                        </h3>
                        <ul className="space-y-3">
                          {solution.solutions.map((solutionItem, solutionIndex) => (
                            <li 
                              key={solutionIndex} 
                              className="text-gray-700 flex items-start group-hover:translate-x-2 transition-transform duration-300"
                              style={{ transitionDelay: `${solutionIndex * 0.1}s` }}
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full mr-3 mt-2 flex-shrink-0`} />
                              <span className="font-medium">{solutionItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-purple-500" />
                          Trending Keywords:
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {solution.keywords.map((keyword) => (
                            <Badge 
                              key={keyword}
                              variant="secondary" 
                              className={`bg-gradient-to-r ${solution.gradient} text-white border-0 px-4 py-2 text-sm hover:scale-105 transition-transform duration-300`}
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/20 space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-green-500" />
                          Ready to Get Started?
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{solution.cta}</p>
                        
                        <Button 
                          className={`w-full bg-gradient-to-r ${solution.gradient} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border-0 text-white group/btn`}
                          onClick={() => openInquiry(`I'm interested in ${solution.title}. ${solution.cta}`)}
                        >
                          Get Started with {solution.title.split(' ')[0]}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final CTA Section */}
          <div className="text-center mt-20 animate-fade-in animate-delay-500">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Still have questions or need a custom solution?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Our team is here to help you find the right technology to solve your unique business challenges. 
                Whether you're in Fintech, Healthcare, E-commerce, or any other industry, we're ready to collaborate and drive your success.
              </p>
              <Button 
                size="lg" 
                onClick={() => openInquiry("I have questions about custom solutions for my industry and would like to discuss my specific business challenges with your team.")}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <InquiryForm
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Industry Solutions Inquiry"
        context={inquiryContext}
      />
    </div>
  );
};

export default Solutions;
