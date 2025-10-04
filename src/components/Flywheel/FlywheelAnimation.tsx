import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DollarSign, Code, Package, Rocket, Globe } from "lucide-react";
import nftLogo from "@/assets/nft-logo.jpeg";

const pillars = [
  { icon: DollarSign, label: "Funding", color: "from-primary to-primary-glow", link: "/funding-enablement" },
  { icon: Code, label: "Tech", color: "from-secondary to-accent", link: "/tech-development-nft" },
  { icon: Package, label: "Manufacturing", color: "from-accent to-secondary", link: "/product-manufacturing" },
  { icon: Rocket, label: "Launch", color: "from-primary to-secondary", link: "/platform-launch" },
  { icon: Globe, label: "Distribution", color: "from-secondary to-primary", link: "/distribution-nft" },
];

export const FlywheelAnimation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] flex items-center justify-center">
      {/* Center Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_60px_rgba(59,130,246,0.6)] flex items-center justify-center border-4 border-white/20 overflow-hidden">
          <img src={nftLogo} alt="NFT Las Vegas" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Rotating Pillars */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-linear"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {pillars.map((pillar, index) => {
          const angle = (index * 360) / pillars.length;
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <Link
              key={pillar.label}
              to={pillar.link}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${rotation}deg)`,
              }}
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${pillar.color} shadow-lg flex flex-col items-center justify-center border-2 border-white/30 hover:scale-110 transition-transform cursor-pointer group`}>
                <pillar.icon className="w-8 h-8 text-white mb-1 group-hover:scale-125 transition-transform" />
                <span className="text-xs text-white font-semibold">{pillar.label}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};
