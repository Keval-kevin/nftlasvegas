import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Sitemap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Solutions", path: "/solutions" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      category: "Solutions",
      links: [
        { name: "Business Process Solutions", path: "/business-process-solutions" },
        { name: "Healthcare Solutions", path: "/healthcare-solutions" },
        { name: "AI & Automation Solutions", path: "/ai-automation-solutions" },
        { name: "Trending Technologies Solutions", path: "/trending-technologies-solutions" }
      ]
    },
    {
      category: "Services",
      links: [
        { name: "Product Development", path: "/product-development" },
        { name: "Hire Experts", path: "/hire-experts" },
        { name: "Case Studies", path: "/case-studies" }
      ]
    },
    {
      category: "Industry Focus",
      links: [
        { name: "Healthcare Innovation", path: "/healthcare-innovation" },
        { name: "AI Automation", path: "/ai-automation" },
        { name: "Trending Technologies", path: "/trending-technologies" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
            Site <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Map</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto animate-slide-in-left animate-delay-200">
            Navigate through all our pages and discover everything Easenext has to offer
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <Card 
                key={section.category}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    {section.category}
                    <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link 
                          to={link.path}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                        >
                          <ExternalLink className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span className="group-hover:translate-x-2 transition-transform duration-200">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* External Links */}
          <Card className="mt-8 animate-scale-in animate-delay-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                External Links
                <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/ease-next/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <ExternalLink className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      LinkedIn Company Page
                    </span>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
