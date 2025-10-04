
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Zap, Cpu, Cloud, Shield, Sparkles, TrendingUp, Users, Target, Star } from 'lucide-react';

const TrendingTechnologies = () => {
  const [selectedTech, setSelectedTech] = useState('ai');

  const technologies = [
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Machine learning, deep learning, and AI automation',
      growth: 95,
      adoption: 78,
      color: 'bg-blue-500',
      trends: ['GPT Models', 'Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: <Shield className="w-8 h-8" />,
      description: 'Decentralized systems and smart contracts',
      growth: 87,
      adoption: 45,
      color: 'bg-purple-500',
      trends: ['DeFi', 'NFTs', 'Smart Contracts', 'Cryptocurrency']
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Scalable infrastructure and serverless computing',
      growth: 92,
      adoption: 85,
      color: 'bg-green-500',
      trends: ['Serverless', 'Microservices', 'Container Orchestration', 'Edge Computing']
    },
    {
      id: 'iot',
      name: 'Internet of Things',
      icon: <Zap className="w-8 h-8" />,
      description: 'Connected devices and smart systems',
      growth: 83,
      adoption: 62,
      color: 'bg-orange-500',
      trends: ['Smart Cities', 'Industrial IoT', 'Wearable Tech', 'Home Automation']
    }
  ];

  const trendingTopics = [
    {
      title: 'Quantum Computing',
      description: 'Revolutionary computing power for complex problems',
      impact: 'High',
      timeline: '2025-2030',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      title: 'Augmented Reality',
      description: 'Immersive experiences in real-world environments',
      impact: 'Medium',
      timeline: '2024-2026',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop'
    },
    {
      title: '5G Networks',
      description: 'Ultra-fast connectivity enabling new possibilities',
      impact: 'High',
      timeline: '2024-2025',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      title: 'Edge Computing',
      description: 'Processing data closer to the source',
      impact: 'Medium',
      timeline: '2024-2027',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    }
  ];

  const stats = [
    { label: 'Technologies Tracked', value: '200+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Industry Reports', value: '50+', icon: <Target className="w-6 h-6" /> },
    { label: 'Expert Analysts', value: '25+', icon: <Users className="w-6 h-6" /> },
    { label: 'Client Success Rate', value: '96%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Trending Technologies</h1>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get Tech Insights
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              Technology Trends 2024
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Stay Ahead with
              <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Emerging Technologies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the latest technology trends, understand their impact, and learn how to implement them in your business for competitive advantage.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in animate-delay-200">
                <Card className="text-center hover-lift">
                  <CardContent className="pt-6">
                    <div className="text-purple-600 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Trends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Technology Trends</h2>
            <p className="text-xl text-gray-600">Explore the technologies shaping the future</p>
          </div>

          <Tabs value={selectedTech} onValueChange={setSelectedTech} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {technologies.map((tech) => (
                <TabsTrigger key={tech.id} value={tech.id} className="flex items-center space-x-2">
                  {tech.icon}
                  <span className="hidden sm:inline">{tech.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-lg ${tech.color} text-white`}>
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{tech.name}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Growth Rate</span>
                          <span className="text-sm font-bold text-gray-900">{tech.growth}%</span>
                        </div>
                        <Progress value={tech.growth} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Market Adoption</span>
                          <span className="text-sm font-bold text-gray-900">{tech.adoption}%</span>
                        </div>
                        <Progress value={tech.adoption} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Trends</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.trends.map((trend, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Implementation Benefits</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-medium text-gray-900">Competitive Advantage</h5>
                          <p className="text-sm text-gray-600">Stay ahead of competitors with cutting-edge technology</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-medium text-gray-900">Operational Efficiency</h5>
                          <p className="text-sm text-gray-600">Streamline processes and reduce operational costs</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h5 className="font-medium text-gray-900">Future-Ready</h5>
                          <p className="text-sm text-gray-600">Prepare your business for tomorrow's challenges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emerging Technologies</h2>
            <p className="text-xl text-gray-600">Technologies that will shape the next decade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingTopics.map((topic, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-t-lg flex items-center justify-center">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={topic.impact === 'High' ? 'default' : 'secondary'}>
                      {topic.impact} Impact
                    </Badge>
                    <span className="text-xs text-gray-500">{topic.timeline}</span>
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts help you identify and implement the right technologies for your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Download Tech Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingTechnologies;
