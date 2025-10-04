import nftLogo from "@/assets/nft-logo.jpeg";

const segments = [
  { label: "Onboarding", gradient: "from-cyan-400 to-blue-500" },
  { label: "Funding\nEnablement", gradient: "from-purple-500 to-pink-500" },
  { label: "Tech\nDevelopment", gradient: "from-pink-500 to-purple-600" },
  { label: "Product\nManufacturing", gradient: "from-purple-600 to-pink-600" },
  { label: "Platform\nLaunch", gradient: "from-blue-500 to-cyan-400" },
  { label: "Distribution", gradient: "from-cyan-500 to-blue-500" },
];

export const FlywheelAnimation = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Building Self-Sustainable Ecosystems
        </h2>
      </div>

      {/* Circular Ecosystem Diagram */}
      <div className="relative w-full aspect-square max-w-2xl mx-auto">
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative">
            {/* Inner glow circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl animate-pulse" />
            
            {/* Logo container with neon border */}
            <div className="relative w-40 h-40 rounded-full border-4 border-purple-500/50 shadow-[0_0_60px_rgba(168,85,247,0.6)] bg-gradient-to-br from-purple-900/90 to-blue-900/90 flex items-center justify-center overflow-hidden">
              <img 
                src={nftLogo} 
                alt="NFT Las Vegas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Circular segments */}
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            {/* Gradients for each segment */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#db2777', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0.9 }} />
            </linearGradient>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
            </linearGradient>

            {/* Glow filters */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer circle path */}
          {segments.map((segment, index) => {
            const segmentAngle = 360 / segments.length;
            const startAngle = index * segmentAngle - 90;
            const endAngle = startAngle + segmentAngle;
            
            const outerRadius = 180;
            const innerRadius = 90;
            
            const startOuter = {
              x: 200 + outerRadius * Math.cos((startAngle * Math.PI) / 180),
              y: 200 + outerRadius * Math.sin((startAngle * Math.PI) / 180),
            };
            const endOuter = {
              x: 200 + outerRadius * Math.cos((endAngle * Math.PI) / 180),
              y: 200 + outerRadius * Math.sin((endAngle * Math.PI) / 180),
            };
            const startInner = {
              x: 200 + innerRadius * Math.cos((endAngle * Math.PI) / 180),
              y: 200 + innerRadius * Math.sin((endAngle * Math.PI) / 180),
            };
            const endInner = {
              x: 200 + innerRadius * Math.cos((startAngle * Math.PI) / 180),
              y: 200 + innerRadius * Math.sin((startAngle * Math.PI) / 180),
            };

            const pathData = `
              M ${startOuter.x} ${startOuter.y}
              A ${outerRadius} ${outerRadius} 0 0 1 ${endOuter.x} ${endOuter.y}
              L ${startInner.x} ${startInner.y}
              A ${innerRadius} ${innerRadius} 0 0 0 ${endInner.x} ${endInner.y}
              Z
            `;

            return (
              <g key={index} className="hover:opacity-90 transition-opacity cursor-pointer">
                <path
                  d={pathData}
                  fill={`url(#grad${index + 1})`}
                  stroke={index % 2 === 0 ? '#22d3ee' : '#a855f7'}
                  strokeWidth="2"
                  filter="url(#glow)"
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* Labels positioned around the circle */}
        {segments.map((segment, index) => {
          const angle = (index * 360) / segments.length - 90 + (360 / segments.length) / 2;
          const radius = 220;
          const x = 50 + (radius / 2) * Math.cos((angle * Math.PI) / 180);
          const y = 50 + (radius / 2) * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute text-center pointer-events-none"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="text-white font-bold text-sm md:text-lg whitespace-pre-line drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {segment.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
