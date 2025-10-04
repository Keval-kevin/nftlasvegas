import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Cog, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      title: "Consulting Services",
      description: "Strategic guidance to transform your business operations and accelerate growth.",
      icon: TrendingUp,
      features: [
        "Tech & Digital Consulting",
        "Business Process Reengineering", 
        "Product-Market Fit Strategy",
        "Go-To-Market Strategy"
      ]
    },
    {
      title: "Product Development",
      description: "End-to-end development from MVP to market-ready solutions.",
      icon: Cog,
      features: [
        "MVP to Market Development",
        "Fullstack Web & Mobile Apps",
        "Cloud Infrastructure & DevOps",
        "UI/UX Research & Design"
      ]
    },
    {
      title: "Hire Experts",
      description: "Access our curated network of experienced professionals on-demand.",
      icon: Users,
      features: [
        "Experienced Engineers & Designers",
        "AI Experts & Data Scientists",
        "Product Managers & Consultants",
        "Flexible Engagement Models"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 animate-fade-in">
            Comprehensive Services for Every Need
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-in-right animate-delay-200">
            Whether you need strategic consulting, custom development, or expert talent, 
            we have the right service model to accelerate your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="hover-lift transition-all duration-300 animate-scale-in bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full mb-4 mx-auto hover-scale transition-all duration-300">
                  <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="text-gray-700 flex items-start animate-slide-in-left"
                      style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 btn-animate hover-lift">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="mt-16 lg:mt-20 bg-gray-50 p-8 lg:p-12 rounded-2xl lg:rounded-3xl animate-fade-in animate-delay-500">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12">
            Flexible Engagement Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Fixed-Scope Projects",
                description: "Well-defined deliverables with clear timelines and pricing."
              },
              {
                title: "Dedicated Teams",
                description: "Long-term partnerships with dedicated resources for your projects."
              },
              {
                title: "On-Demand Talent",
                description: "Hourly, weekly, or project-based expert talent when you need it."
              }
            ].map((model, index) => (
              <div 
                key={model.title}
                className="text-center bg-white p-6 lg:p-8 rounded-xl hover-lift animate-slide-in-left"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                  {model.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
