
import { CheckCircle, Zap, Shield, Users, Award, Clock, Target, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export const WhyEasenext = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.why-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to deliver solutions that give you a competitive advantage.",
      stats: "50+ innovative projects",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Every project is focused on measurable outcomes that directly impact your business growth.",
      stats: "3x faster ROI average",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles with agile methodologies ensure quick time-to-market.",
      stats: "50% faster delivery",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures protect your data and maintain compliance standards.",
      stats: "100% security compliance",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with seasoned professionals who understand your industry and challenges.",
      stats: "98% client satisfaction",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning solutions with a track record of successful implementations.",
      stats: "200+ successful projects",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Easenext?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-in-right animate-delay-200">
            We combine innovation, expertise, and dedication to deliver exceptional results 
            that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => (
            <div 
              key={value.title}
              data-index={index}
              className={`why-item group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-500 hover:-translate-y-2 ${
                visibleItems.includes(index) ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Icon Container */}
              <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="h-10 w-10 text-white" />
                
                {/* Pulse Animation */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} animate-ping opacity-20`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {value.description}
              </p>
              
              {/* Stats Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${value.color} rounded-full text-white text-sm font-semibold shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                {value.stats}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mission Statement with Enhanced Design */}
        <div className="mt-20 lg:mt-24 relative">
          <div className="bg-white/90 backdrop-blur-lg p-12 lg:p-16 rounded-4xl shadow-2xl border border-white/50 text-center animate-fade-in animate-delay-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Our Mission</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Democratizing Access to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  World-Class Technology
                </span>
              </h3>
              
              <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                We deliver tailored digital solutions, intelligent systems, and expert talent that help 
                organizations stay ahead in a changing world. Our vision is a future where businesses, 
                regardless of size, can access the same level of innovation as Fortune 500 companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
