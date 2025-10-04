import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Search, Mail, TrendingUp } from "lucide-react";

import { Link } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "ai", name: "AI & Machine Learning", count: 8 },
    { id: "development", name: "Development", count: 6 },
    { id: "design", name: "Design", count: 4 },
    { id: "business", name: "Business", count: 6 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Transforming Patient Care",
      excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans.",
      category: "ai",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "photo-1605810230434-7631ac76ec81",
      featured: true,
      tags: ["AI", "Healthcare", "Innovation"],
      slug: "/blog/ai-healthcare"
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices Guide",
      excerpt: "Learn the essential patterns and practices for creating maintainable and scalable React applications that grow with your business.",
      category: "development",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      readTime: "12 min read",
      image: "photo-1461749280684-dccba630e2f6",
      featured: false,
      tags: ["React", "JavaScript", "Development"],
      slug: "/blog/react-development"
    },
    {
      id: 3,
      title: "Design Systems That Scale: Creating Consistency Across Products",
      excerpt: "Discover how to build and maintain design systems that ensure consistency and efficiency across your entire product ecosystem.",
      category: "design",
      author: "Emily Johnson",
      date: "2025-01-10",
      readTime: "10 min read",
      image: "photo-1486312338219-ce68d2c6f44d",
      featured: false,
      tags: ["Design", "UI/UX", "Systems"],
      slug: "/blog/design-systems"
    },
    {
      id: 4,
      title: "Digital Transformation: A Strategic Approach for Modern Businesses",
      excerpt: "Navigate the complexities of digital transformation with proven strategies that deliver measurable business outcomes.",
      category: "business",
      author: "David Thompson",
      date: "2025-01-08",
      readTime: "15 min read",
      image: "photo-1518770660439-4636190af475",
      featured: true,
      tags: ["Strategy", "Digital", "Business"]
    },
    {
      id: 5,
      title: "Machine Learning in Production: From Model to Market",
      excerpt: "A comprehensive guide to deploying machine learning models in production environments with best practices and real-world examples.",
      category: "ai",
      author: "Lisa Park",
      date: "2025-01-05",
      readTime: "14 min read",
      image: "photo-1526374965328-7f61d4dc18c5",
      featured: false,
      tags: ["Machine Learning", "Production", "DevOps"]
    },
    {
      id: 6,
      title: "The Art of API Design: Creating Developer-Friendly Interfaces",
      excerpt: "Master the principles of API design that make developers love working with your platform and drive adoption.",
      category: "development",
      author: "Alex Kim",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "photo-1487058792275-0ad4aaf24ca7",
      featured: false,
      tags: ["API", "Development", "Backend"]
    }
  ];

  const featuredArticles = [
    {
      title: "2025 Tech Trends: What to Watch",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Building Remote Teams That Thrive",
      category: "Business",
      readTime: "7 min read"
    },
    {
      title: "The Rise of Low-Code Platforms",
      category: "Development",
      readTime: "6 min read"
    }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights & <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with insights from industry experts, innovative solutions, and emerging technology trends.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="btn-animate"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card 
                    key={post.id}
                    className={`hover-lift card-hover animate-scale-in border-0 shadow-lg overflow-hidden ${
                      post.featured ? 'md:col-span-2' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                        src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=${post.featured ? '1200' : '600'}&h=400`}
                        alt={post.title}
                        className={`w-full object-cover ${post.featured ? 'h-64' : 'h-48'}`}
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-500 text-white">Featured</Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">
                          {categories.find(cat => cat.id === post.category)?.name.split(' ')[0]}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className={`${post.featured ? 'text-2xl' : 'text-xl'} hover:text-blue-600 transition-colors cursor-pointer`}>
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        {post.slug ? (
                          <Link to={post.slug}>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter Signup */}
                <Card className="animate-slide-in-right border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Stay Updated
                    </CardTitle>
                    <CardDescription>
                      Get the latest insights delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input placeholder="Your email address" />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 btn-animate">
                        Subscribe
                      </Button>
                      <p className="text-xs text-gray-500">
                        No spam. Unsubscribe anytime.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Articles */}
                <Card className="animate-slide-in-right animate-delay-200 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Trending Articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {featuredArticles.map((article, index) => (
                        <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                          <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors mb-1">
                            {article.title}
                          </h4>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{article.category}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="animate-slide-in-right animate-delay-400 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <div 
                          key={category.id}
                          className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span className="text-gray-700">{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stay ahead with Easenext insights and turn knowledge into competitive advantage
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 btn-animate hover-lift">
            Stay Ahead with Easenext Insights
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
