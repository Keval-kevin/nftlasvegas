
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Users, Briefcase, Heart, Coffee, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { InquiryForm } from "@/components/InquiryForm";

const Careers = () => {
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

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openInquiry = (context: string) => {
    setInquiryContext(context);
    setIsInquiryOpen(true);
  };

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Ahmedabad, India",
      type: "Full-time",
      description: "Join our dynamic team to build cutting-edge web applications using React, Node.js, and modern technologies.",
      requirements: ["5+ years experience", "React/Node.js", "TypeScript", "Cloud platforms"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "AI/ML Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description: "Develop innovative AI solutions and machine learning models to solve complex business problems.",
      requirements: ["3+ years ML experience", "Python/TensorFlow", "Deep Learning", "Data Science"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Ahmedabad, India",
      type: "Full-time",
      description: "Create exceptional user experiences and beautiful interfaces for our digital products.",
      requirements: ["3+ years design experience", "Figma/Adobe Suite", "User Research", "Prototyping"],
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { icon: Coffee, title: "Flexible Work", description: "Remote work options and flexible schedules" },
    { icon: Zap, title: "Growth Opportunities", description: "Professional development and learning budget" },
    { icon: Users, title: "Great Team", description: "Collaborative culture with amazing colleagues" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing</span> Team
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-200">
            Be part of a dynamic team that's shaping the future of technology and business solutions
          </p>
          
          <Button 
            size="lg" 
            onClick={() => openInquiry("I'm interested in career opportunities at Easenext")}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
          >
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive and grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                data-index={index}
                className={`animate-on-scroll text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleCards.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
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

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card 
                key={job.title}
                data-index={index + 10}
                className={`animate-on-scroll group hover:shadow-xl transition-all duration-300 ${
                  visibleCards.includes(index + 10) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Badge className={`bg-gradient-to-r ${job.gradient} text-white`}>
                      Open
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-lg">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <Badge key={req} variant="secondary" className="text-sm">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => openInquiry(`I'm interested in the ${job.title} position`)}
                    className={`w-full bg-gradient-to-r ${job.gradient} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-white`}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          
          <Button 
            size="lg" 
            onClick={() => openInquiry("I'd like to submit my resume for future opportunities")}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
          >
            Send Your Resume
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      
      <InquiryForm
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Career Inquiry"
        context={inquiryContext}
      />
    </div>
  );
};

export default Careers;
