import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, ArrowRight, Calendar, Users, FileText, Code, Rocket, Headphones } from "lucide-react";

import { InquiryForm } from "@/components/InquiryForm";
import { sendInquiryEmail } from "@/service/sendInquiryEmail";

// Declare Tawk_API types for TypeScript
declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
    };
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@easenext.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 8511707005",
      description: "Mon-Fri from 9am to 7pm IST"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri: 9am - 7pm",
      description: "IST timezone"
    }
  ];

  const globalOffices = [
    {
      countryCode: "IN",
      name: "Pune, India",
      description: "Tech Hub",
      address: "Pune, India",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.05094477198!2d73.69815084335938!3d18.52456706875184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
    },
    {
      countryCode: "CA",
      name: "Toronto, Canada",
      description: "Business District",
      address: "161 Bay Street, Toronto, ON, M5J2S1, Canada",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0027176019485!2d-79.38208102346622!3d43.64779497912012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2s161%20Bay%20St%2C%20Toronto%2C%20ON%20M5J%202S1%2C%20Canada!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
    },
    {
      countryCode: "SE",
      name: "Stockholm, Sweden",
      description: "Nordic Office",
      address: "Stockholm, Sweden",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32443.48346034855!2d18.043128935937457!3d59.32932369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
    },
    {
      countryCode: "NL",
      name: "Amsterdam, Netherlands",
      description: "EU Office",
      address: "Amsterdam, Netherlands",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39258.58571424058!2d4.85018315!3d52.3679843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
    }
  ];

  const workflowSteps = [
    {
      title: "Initial Consultation",
      description: "We discuss your project requirements and goals",
      duration: "30 minutes",
      icon: Users
    },
    {
      title: "Proposal & Planning",
      description: "Detailed project proposal with timeline and cost",
      duration: "2-3 days",
      icon: FileText
    },
    {
      title: "Development & Design",
      description: "Our team starts building your solution",
      duration: "2-12 weeks",
      icon: Code
    },
    {
      title: "Testing & Launch",
      description: "Quality assurance and deployment to production",
      duration: "1-2 weeks",
      icon: Rocket
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and feature enhancements",
      duration: "Ongoing",
      icon: Headphones
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    sendInquiryEmail({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    }).then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", company: "", message: "" });
        }, 3000);
      })
      .catch(() => {});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openLiveChat = () => {
    // Check if Tawk.to is loaded and open the chat widget
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsInquiryFormOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 btn-animate hover-lift"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={openLiveChat}
                className="text-lg px-8 py-3 btn-animate hover-lift"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="border-0 shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8 animate-fade-in">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="focus-ring"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            required
                            className="focus-ring"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                          className="focus-ring"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          required
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 btn-animate hover-lift"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you succeed. Reach out to us through any of these channels and let's start building something amazing together.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={info.title}
                      className="hover-lift border-0 shadow-lg animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-blue-600 font-medium mb-1">{info.value}</p>
                            <p className="text-gray-500 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Live Chat Widget */}
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg hover-lift animate-pulse-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                        <p className="text-blue-100">Chat with our experts right now</p>
                      </div>
                      <Button 
                        onClick={openLiveChat}
                        className="bg-white text-blue-600 hover:bg-gray-100"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Live Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in tech hubs across India, Canada, Sweden, and the Netherlands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {globalOffices.map((office, index) => (
              <Card 
                key={office.name}
                className="border-0 shadow-lg overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center mr-3 text-xs font-bold text-gray-700">
                      {office.countryCode}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{office.name}</h3>
                      <p className="text-blue-600 text-sm font-medium">{office.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{office.address}</p>
                </div>
                <div className="h-32 bg-gray-300 relative">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-blue-600 text-white text-xs">{office.countryCode}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures successful project delivery from start to finish
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Horizontal timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
              
              <div className="flex justify-between items-center relative">
                {workflowSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div 
                      key={step.title}
                      className="flex flex-col items-center relative animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline node */}
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 hover-scale z-10 relative">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      
                      {/* Card */}
                      <Card className="w-64 hover-lift shadow-lg">
                        <CardHeader className="pb-3">
                          <div className="text-center">
                            <CardTitle className="text-lg text-blue-600 mb-2">{step.title}</CardTitle>
                            <Badge variant="secondary" className="mb-2">{step.duration}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-700 text-sm text-center">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
              
              {workflowSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={step.title}
                    className="relative flex items-center mb-12 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline node */}
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mr-6 hover-scale z-10 relative">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    {/* Card */}
                    <Card className="flex-1 hover-lift shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl text-blue-600">{step.title}</CardTitle>
                          <Badge variant="secondary">{step.duration}</Badge>
                        </div>
                        <CardDescription className="text-gray-700">{step.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation and let's discuss how we can help you succeed
          </p>
          <Button 
            onClick={() => setIsInquiryFormOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 btn-animate hover-lift"
          >
            Book Free Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <InquiryForm
        isOpen={isInquiryFormOpen}
        onClose={() => setIsInquiryFormOpen(false)}
        title="Book Free Consultation"
        context="Tell us about your project and we'll provide expert guidance."
      />

      <Footer />
    </div>
  );
};

export default Contact;
