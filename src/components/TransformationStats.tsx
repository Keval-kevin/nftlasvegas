
import { useEffect, useState } from "react";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

export const TransformationStats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    support: 0,
    experts: 0
  });

  const finalValues = {
    projects: 200,
    satisfaction: 98,
    support: 24,
    experts: 50
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals.find(interval => interval === interval));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.projects,
      suffix: "+",
      label: "Projects Delivered",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      value: counters.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      value: counters.support,
      suffix: "/7",
      label: "Support Available",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Award,
      value: counters.experts,
      suffix: "+",
      label: "Expert Developers",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Driving Digital Transformation
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in-right animate-delay-200">
            Numbers that speak to our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${stat.gradient} mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-pulse-glow">
                {stat.value}{stat.suffix}
              </div>
              
              <div className="text-blue-200 font-medium text-lg group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in animate-delay-800">
          <p className="text-blue-100 text-lg mb-6">
            Ready to join our success stories?
          </p>
          <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <span className="mr-2">🚀</span>
            Let's build something amazing together
          </div>
        </div>
      </div>
    </section>
  );
};
