import { useEffect, useState } from "react";
import { Star, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const PartnersMarquee = () => {
  const partners = [
    { name: "DiamondTier Capital", industry: "Business Funding", logo: "/partners/diamondtier-logo.png" },
    { name: "StrtUp Boost", industry: "Startup Community", logo: "/partners/strtupboost-logo.png" },
    { name: "CETDIGIT", industry: "CRM Solutions", logo: "/partners/cetdigit-logo.png" },
    { name: "Scrubbed", industry: "Accounting & Finance", logo: "/partners/scrubbed-logo.png" },
    { name: "ToTo Marketing", industry: "Digital Advertising", logo: "/partners/toto-marketing-logo.png" },
    { name: "Alibaba", industry: "E-Commerce & Tech", logo: "/partners/alibaba-logo.svg" },
    { name: "EaseNext", industry: "Technology Training", logo: "/partners/easenext-logo.png" },
    { name: "Clustox", industry: "Software Development", logo: "/partners/clustox-logo.png" },
    { name: "AI Certs", industry: "AI Certification", logo: "/partners/aicerts-logo.png" }
  ];

  const stats = [
    { icon: Star, label: "Client Satisfaction", value: "98%", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Business Growth", value: "300%", color: "text-green-500" },
    { icon: Award, label: "Industry Awards", value: "25+", color: "text-purple-500" }
  ];

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-y border-blue-100 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              Trusted Worldwide
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span> Worldwide
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join 200+ companies who've transformed their business with our expert solutions
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 group"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`} />
                <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Continuous Scrolling Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-8" style={{ 
              width: 'calc(280px * 18)'
            }}>
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-between h-20 px-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/60 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 min-w-[280px] group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        style={{ filter: 'brightness(0.9)' }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {partner.name}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        {partner.industry}
                      </div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-duplicate-${index}`}
                  className="flex-shrink-0 flex items-center justify-between h-20 px-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-white/60 hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 min-w-[280px] group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        style={{ filter: 'brightness(0.9)' }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {partner.name}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        {partner.industry}
                      </div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ready to join these industry leaders?</p>
            <Link to="/contact">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                Start Your Journey
                <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
