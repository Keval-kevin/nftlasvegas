
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogPreview = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains.",
      author: "Sarah Chen",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=300",
      slug: "/blog/ai-healthcare"
    },
    {
      title: "Building Scalable Healthcare Solutions",
      excerpt: "Learn the key principles and best practices for developing healthcare applications that can grow with your needs.",
      author: "Dr. Michael Rodriguez",
      date: "2024-03-12",
      readTime: "8 min read",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=300",
      slug: "/blog/react-development"
    },
    {
      title: "The Rise of Web3 Technologies",
      excerpt: "Explore the transformative potential of blockchain and decentralized applications in modern business.",
      author: "Alex Thompson",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Web3",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=300",
      slug: "/blog/design-systems"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
            <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Latest Insights</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in animate-delay-200">
            Stay Ahead with Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animate-delay-400">
            Get the latest trends, insights, and expert advice on technology, business innovation, and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="group hover-lift card-hover animate-scale-in border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-700 hover:bg-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <Link to={post.slug}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in animate-delay-600">
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
