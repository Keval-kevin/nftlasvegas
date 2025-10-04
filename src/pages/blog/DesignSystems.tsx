
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Palette, Grid, Sparkles } from "lucide-react";


const DesignSystems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" className="mb-4 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-purple-100 text-purple-800">Design</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                January 10, 2025
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                10 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Design Systems That Scale: Creating Consistency Across Products
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Johnson</p>
                  <p className="text-sm text-gray-600">Design Systems Lead</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
          
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=600"
            alt="Design Systems"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Design systems are the backbone of consistent, scalable digital experiences. They're not just collections 
              of UI components—they're the DNA of your product ecosystem, ensuring every touchpoint feels cohesive and 
              purposeful. After building design systems for companies ranging from startups to Fortune 500 enterprises, 
              I've learned that the most successful systems are those that grow organically with the organization while 
              maintaining their core principles.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Design Systems Matter More Than Ever</h2>
            
            <p className="text-gray-700 mb-6">
              In today's multi-platform world, users interact with brands across web, mobile, email, and countless other 
              touchpoints. Without a design system, each team creates their own interpretation of the brand, leading to 
              inconsistent experiences that confuse users and dilute brand identity.
            </p>
            
            <Card className="mb-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Sparkles className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">The Airbnb Effect</h3>
                    <p className="text-blue-800">
                      Airbnb's design system reduced their design-to-development time by 50% and increased design consistency 
                      across their platform by 90%. That's the power of a well-implemented design system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Blocks of a Scalable Design System</h2>
            
            <p className="text-gray-700 mb-6">
              A design system is more than a component library. It's a comprehensive ecosystem that includes design tokens, 
              components, patterns, and guidelines. Here's how to structure it for maximum impact:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design Tokens: Your Visual DNA</h3>
                  <p className="text-gray-700">
                    Colors, typography, spacing, and other design decisions should be tokenized. These tokens become 
                    the atomic units of your design system, ensuring consistency across all platforms and making 
                    global changes effortless.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Component Library: Reusable Building Blocks</h3>
                  <p className="text-gray-700">
                    Start with basic components like buttons, inputs, and cards. Each component should have clear 
                    documentation, usage guidelines, and multiple variants to handle different use cases.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patterns and Templates: Solving Common Problems</h3>
                  <p className="text-gray-700">
                    Document common UI patterns like form layouts, navigation structures, and content patterns. 
                    These higher-level constructs help teams solve complex design problems consistently.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Governance Challenge</h2>
            
            <p className="text-gray-700 mb-6">
              The hardest part of design systems isn't building them—it's governing them. How do you ensure adoption? 
              How do you handle contributions from different teams? How do you evolve the system without breaking existing products?
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h4 className="font-semibold text-yellow-900 mb-2">Lesson Learned</h4>
              <p className="text-yellow-800">
                The most successful design systems I've worked on had dedicated teams, clear contribution processes, 
                and strong executive support. Treat your design system like a product, not a side project.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Making It Work: Adoption Strategies</h2>
            
            <p className="text-gray-700 mb-6">
              Building a design system is only half the battle. Getting teams to adopt it requires a different set of skills:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <Palette className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">Make It Easy</h3>
                  <p className="text-green-800 text-sm">
                    Provide plugins for design tools, code generators, and comprehensive documentation. 
                    The easier it is to use, the more likely teams will adopt it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <Grid className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Show Value</h3>
                  <p className="text-blue-800 text-sm">
                    Track metrics like design-to-development time, consistency scores, and user satisfaction. 
                    Show how the design system improves team efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolution: Keeping Systems Alive</h2>
            
            <p className="text-gray-700 mb-6">
              Design systems aren't set-and-forget solutions. They need to evolve with your product, users, and business needs. 
              The key is building in flexibility from the start:
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Create clear versioning and migration strategies</li>
              <li>Establish regular review and update cycles</li>
              <li>Build feedback loops with design and development teams</li>
              <li>Monitor usage patterns and identify pain points</li>
              <li>Plan for major updates and breaking changes</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Measuring Success</h2>
            
            <p className="text-gray-700 mb-6">
              How do you know if your design system is working? Track these key metrics:
            </p>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Component Adoption Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Faster Development</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Reduced Design Debt</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Human Side of Design Systems</h2>
            
            <p className="text-gray-700 mb-6">
              Behind every successful design system is a team of dedicated people who understand that they're not just 
              building components—they're shaping how their organization creates digital experiences. The most rewarding 
              part of my work has been seeing teams become more efficient, more creative, and more aligned around a shared vision.
            </p>
            
            <p className="text-gray-700 mb-8">
              Remember, a design system is a living, breathing part of your organization. It reflects your values, 
              enables your creativity, and scales your impact. Invest in it, nurture it, and watch as it transforms 
              how your team works together.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-center text-white mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Design System?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create a design system that scales with your business
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Start Your Design System
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesignSystems;
