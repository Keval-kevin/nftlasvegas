import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart, ReferenceDot } from "recharts";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const PHASES_DATA = [
  { 
    phase: "Onboarding", 
    index: 10,
    benefit: "Clarity, access, and a 90-day roadmap.",
    route: "/onboarding",
    milestone: "Journey Starts",
    journeyLabel: "Start"
  },
  { 
    phase: "Funding", 
    index: 28,
    benefit: "Investor narrative, data room, capital strategy.",
    route: "/funding-enablement",
    milestone: "Funding Ready",
    journeyLabel: "Validate"
  },
  { 
    phase: "Tech", 
    index: 45,
    benefit: "AI, Web3, and enterprise integrations designed for scale.",
    route: "/tech-development",
    milestone: "MVP Assembled",
    journeyLabel: "Build"
  },
  { 
    phase: "Manufacturing", 
    index: 62,
    benefit: "Prototype → certify → mass produce with reliable partners.",
    route: "/product-manufacturing",
    milestone: "Production Ready",
    journeyLabel: "Make"
  },
  { 
    phase: "Launch", 
    index: 82,
    benefit: "Positioning, content engine, marketing ops, analytics.",
    route: "/platform-launch",
    milestone: "Public Launch",
    journeyLabel: "Announce"
  },
  { 
    phase: "Distribution", 
    index: 100,
    benefit: "Channels, marketplaces, enablement kits, & SLAs.",
    route: "/distribution",
    milestone: "Channel Live",
    journeyLabel: "Scale"
  }
];

const getGrowthLevel = (index: number): string => {
  if (index <= 20) return "Low";
  if (index <= 50) return "Medium";
  if (index <= 80) return "High";
  return "Very High";
};

export const EcosystemChart = () => {
  const navigate = useNavigate();
  const [showAreaFill, setShowAreaFill] = useState(true);
  const [showMilestones, setShowMilestones] = useState(true);
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload[0]) return null;

    const phase = PHASES_DATA.find(p => p.phase === payload[0].payload.phase);
    if (!phase) return null;

    return (
      <div className="bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-glow max-w-xs">
        <p className="text-sm font-bold text-white mb-1">{phase.phase}</p>
        <p className="text-xs text-muted-foreground mb-3">{phase.benefit}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground">Growth potential:</span>
          <span className="text-xs font-semibold text-secondary">{getGrowthLevel(phase.index)}</span>
        </div>
        {showMilestones && (
          <div className="text-xs text-violet-300 mb-3 italic">
            Milestone: {phase.milestone}
          </div>
        )}
        <Link to={phase.route} className="text-xs text-secondary hover:text-secondary/80 transition-colors">
          Learn more →
        </Link>
      </div>
    );
  };

  const handlePhaseClick = (phase: string) => {
    const phaseData = PHASES_DATA.find(p => p.phase === phase);
    if (phaseData) {
      navigate(phaseData.route);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-secondary font-medium mb-3 tracking-wide uppercase">
            Compounded outcomes, one integrated journey.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Journey to Market Dominance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how your brand's growth potential compounds as you move through the NFT Las Vegas™ ecosystem.
          </p>
        </div>

        {/* Chart Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl">
          {/* Controls */}
          <div className="flex flex-wrap justify-end items-center gap-3 mb-6">
            <button
              onClick={() => setShowAreaFill(!showAreaFill)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                showAreaFill
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-muted-foreground border border-white/5'
              } hover:bg-white/15`}
            >
              Show area fill
            </button>
            <button
              onClick={() => setShowMilestones(!showMilestones)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                showMilestones
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-muted-foreground border border-white/5'
              } hover:bg-white/15`}
            >
              Show milestones
            </button>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart 
              data={PHASES_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              
              <XAxis 
                dataKey="phase" 
                stroke="rgba(255,255,255,0.3)" 
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                angle={-20}
                textAnchor="end"
                height={80}
                onClick={(data: any) => data && handlePhaseClick(data.value)}
                style={{ cursor: 'pointer' }}
              />
              
              <YAxis 
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                stroke="rgba(255,255,255,0.3)" 
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                label={{ 
                  value: 'Growth Potential (Index)', 
                  angle: -90, 
                  position: 'insideLeft', 
                  fill: 'rgba(255,255,255,0.6)',
                  style: { textAnchor: 'middle' }
                }}
              />
              
              <Tooltip content={<CustomTooltip />} />
              
              {showAreaFill && (
                <Area
                  type="monotone"
                  dataKey="index"
                  fill="url(#areaGradient)"
                  stroke="none"
                  animationDuration={500}
                  animationEasing="ease-in-out"
                />
              )}

              <Line
                type="monotone"
                dataKey="index"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                dot={{ 
                  fill: '#8b5cf6', 
                  r: 5,
                  stroke: '#fff',
                  strokeWidth: 2,
                  cursor: 'pointer'
                }}
                activeDot={{ 
                  r: 7, 
                  fill: '#ec4899',
                  stroke: '#fff',
                  strokeWidth: 2,
                  cursor: 'pointer',
                  onClick: (_: any, payload: any) => handlePhaseClick(payload.payload.phase)
                }}
                animationDuration={600}
                animationEasing="ease-in-out"
                onMouseEnter={(data: any) => setHoveredPhase(data.phase)}
                onMouseLeave={() => setHoveredPhase(null)}
              />

              {showMilestones && PHASES_DATA.map((phase, idx) => (
                <ReferenceDot
                  key={phase.phase}
                  x={phase.phase}
                  y={phase.index}
                  r={0}
                  label={{
                    value: phase.milestone,
                    position: idx % 2 === 0 ? 'top' : 'bottom',
                    fill: '#a78bfa',
                    fontSize: 10,
                    offset: 15
                  }}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>

          {/* Journey Labels */}
          <div className="flex justify-between mt-4 px-4 text-xs text-muted-foreground">
            {PHASES_DATA.map((phase) => (
              <div key={phase.phase} className="text-center" style={{ width: `${100 / PHASES_DATA.length}%` }}>
                {phase.journeyLabel}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Band */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 text-center">
          <p className="text-lg font-semibold text-white mb-4">
            Ready to map your growth potential?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/onboarding">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Start Onboarding
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Book a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
