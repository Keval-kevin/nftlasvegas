import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, Globe, Heart, Lightbulb, Shield, Zap, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [countingStats, setCountingStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

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

  // Animate statistics counters
  useEffect(() => {
    const targetStats = { projects: 500, clients: 150, years: 8, satisfaction: 98 };
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const counters = Object.keys(targetStats).map(key => {
      const target = targetStats[key as keyof typeof targetStats];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(counters.find(c => c === counters[0]));
        }
        setCountingStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const teamMembers = [
    {
      name: "Mr. N",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation",
      image: "/lovable-uploads/18f78540-9bce-4031-81a1-6ad3eaf32e23.png",
      skills: ["Strategy", "Leadership", "Innovation"]
    },
    {
      name: "Mr. E",
      role: "CTO",
      bio: "Full-stack architect passionate about scalable solutions",
      image: "/lovable-uploads/18f78540-9bce-4031-81a1-6ad3eaf32e23.png",
      skills: ["Architecture", "AI/ML", "Cloud"]
    },
    {
      name: "Mr. X",
      role: "Head of Design",
      bio: "UX/UI expert crafting intuitive digital experiences",
      image: "/lovable-uploads/18f78540-9bce-4031-81a1-6ad3eaf32e23.png",
      skills: ["UX Design", "Prototyping", "Branding"]
    },
    {
      name: "Mr. T",
      role: "AI Research Lead",
      bio: "PhD in Machine Learning driving intelligent automation",
      image: "/lovable-uploads/18f78540-9bce-4031-81a1-6ad3eaf32e23.png",
      skills: ["Machine Learning", "Research", "Innovation"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our primary focus. We build solutions that truly serve your needs.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to solve complex challenges creatively.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every solution undergoes rigorous testing to ensure reliability and performance.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We work as partners, fostering transparent communication and shared goals.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { icon: Award, title: "Industry Recognition", description: "Top 10 Tech Innovators 2024" },
    { icon: Globe, title: "Global Reach", description: "Serving clients across 25+ countries" },
    { icon: Zap, title: "Fast Delivery", description: "Average project completion: 30% faster" },
    { icon: TrendingUp, title: "Growth Leader", description: "200% year-over-year growth" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30 animate-fade-in">
              About Easenext
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in animate-delay-200">
              Building the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future</span> Together
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-400">
              We're passionate technologists dedicated to transforming businesses through innovative digital solutions
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-scale-in animate-delay-600">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {countingStats.projects}+
                </div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {countingStats.clients}+
                </div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {countingStats.years}+
                </div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {countingStats.satisfaction}%
                </div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-index="0" className="animate-on-scroll animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2016, Easenext began as a small team of passionate developers with a big vision: 
                  to make advanced technology accessible to businesses of all sizes.
                </p>
                <p>
                  What started as a local software consultancy has evolved into a global technology partner, 
                  helping organizations transform their operations through intelligent automation, AI-driven solutions, 
                  and cutting-edge digital platforms.
                </p>
                <p>
                  Today, we're proud to serve clients across industries, from healthcare and finance to 
                  manufacturing and retail, always staying true to our core mission of delivering 
                  exceptional value through innovation.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Our Journey
                </Button>
                <Link to="/case-studies" className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Our Work →
                </Link>
              </div>
            </div>
            
            <div data-index="1" className="animate-on-scroll animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Mission Driven</div>
                      <div className="text-sm text-gray-600">Since Day One</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                data-index={index + 2}
                className={`animate-on-scroll text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 ${
                  visibleSections.includes(index + 2) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${value.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                data-index={index + 10}
                className={`animate-on-scroll group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                  visibleSections.includes(index + 10) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
              Recognition and milestones that drive us forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                data-index={index + 20}
                className={`animate-on-scroll text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  visibleSections.includes(index + 20) ? 'animate-scale-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
            Join the hundreds of companies that trust us to transform their digital future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-full"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
