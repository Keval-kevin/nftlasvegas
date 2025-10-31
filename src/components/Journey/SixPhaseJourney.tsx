import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ClipboardCheck, 
  DollarSign, 
  Code, 
  Box, 
  Rocket, 
  Globe,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const phases = [
  {
    id: 1,
    title: "Onboarding",
    link: "/onboarding",
    description: "Clarity, access, 90-day roadmap",
    icon: ClipboardCheck,
    growth: 20
  },
  {
    id: 2,
    title: "Funding",
    link: "/funding-enablement",
    description: "Investor narrative, data room, capital strategy",
    icon: DollarSign,
    growth: 35
  },
  {
    id: 3,
    title: "Tech",
    link: "/tech-development",
    description: "AI, Web3, enterprise integrations for scale",
    icon: Code,
    growth: 55
  },
  {
    id: 4,
    title: "Manufacturing",
    link: "/product-manufacturing",
    description: "Prototype → certify → mass-produce",
    icon: Box,
    growth: 70
  },
  {
    id: 5,
    title: "Launch",
    link: "/platform-launch",
    description: "Positioning, content engine, marketing ops, analytics",
    icon: Rocket,
    growth: 85
  },
  {
    id: 6,
    title: "Distribution",
    link: "/distribution",
    description: "Channels, marketplaces, enablement kits, SLAs",
    icon: Globe,
    growth: 100
  }
];

const getGrowthLabel = (value: number) => {
  if (value <= 25) return "Low";
  if (value <= 50) return "Medium";
  if (value <= 75) return "High";
  return "Very High";
};

export const SixPhaseJourney = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [showGrowthPotential, setShowGrowthPotential] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [progressFill, setProgressFill] = useState(0);
  const observer = useIntersectionObserver({ threshold: 0.2 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Progress line animation on scroll
  useEffect(() => {
    if (observer.isIntersecting) {
      const timer = setTimeout(() => {
        setProgressFill(100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [observer.isIntersecting]);

  // Auto-advance animation (respect prefers-reduced-motion)
  useEffect(() => {
    if (prefersReducedMotion || showGrowthPotential) return;

    const startAutoAdvance = () => {
      autoAdvanceRef.current = setInterval(() => {
        setActivePhase(prev => (prev + 1) % phases.length);
      }, 2500);
    };

    // Start after 2s idle
    timeoutRef.current = setTimeout(startAutoAdvance, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, [prefersReducedMotion, showGrowthPotential]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showGrowthPotential) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActivePhase(prev => (prev - 1 + phases.length) % phases.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActivePhase(prev => (prev + 1) % phases.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showGrowthPotential]);

  const chartData = phases.map(phase => ({
    name: phase.title,
    growth: phase.growth,
    label: getGrowthLabel(phase.growth)
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
          <p className="text-sm font-medium text-foreground">{payload[0].payload.name}</p>
          <p className="text-xs text-muted-foreground">{payload[0].payload.label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section ref={observer.elementRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-gradient">Six-Phase Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            A systematic approach to venture acceleration and sustainable growth.
          </p>

          {/* Toggle */}
          <div className="inline-flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={!showGrowthPotential ? "default" : "ghost"}
              size="sm"
              onClick={() => setShowGrowthPotential(false)}
              className="rounded-md"
            >
              Journey
            </Button>
            <Button
              variant={showGrowthPotential ? "default" : "ghost"}
              size="sm"
              onClick={() => setShowGrowthPotential(true)}
              className="rounded-md"
            >
              Growth Potential
            </Button>
          </div>
        </div>

        {/* Desktop/Tablet: Horizontal Timeline */}
        <div className="hidden md:block">
          {!showGrowthPotential ? (
            <div className="relative pb-12">
              {/* Progress Line */}
              <div className="absolute top-14 left-8 right-8 h-0.5 bg-muted overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                  style={{ width: `${progressFill}%` }}
                />
              </div>

              <div className="grid grid-cols-6 gap-4 relative">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const isActive = activePhase === index;
                  const isHovered = hoveredCard === index;

                  return (
                    <div
                      key={phase.id}
                      className={`transition-all duration-500 ${
                        observer.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Link 
                        to={phase.link}
                        className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                        aria-describedby={`phase-${phase.id}-description`}
                      >
                        <Card 
                          className={`bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full transition-all duration-300 ${
                            isActive || isHovered 
                              ? 'shadow-glow -translate-y-0.5 scale-[1.01] border-primary/50' 
                              : 'hover:border-primary/30'
                          }`}
                        >
                          <CardContent className="p-0 flex flex-col items-center text-center space-y-3 relative">
                            {/* Badge */}
                            <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                              <span className="text-white text-xs font-bold">{phase.id}</span>
                            </div>

                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-foreground text-sm leading-tight">
                              {phase.title}
                            </h3>
                          </CardContent>
                        </Card>

                        {/* Popover */}
                        {isHovered && (
                          <div 
                            id={`phase-${phase.id}-description`}
                            role="tooltip"
                            className="absolute mt-2 left-1/2 -translate-x-1/2 w-48 bg-card border border-border rounded-lg shadow-xl p-3 z-20 animate-fade-in"
                          >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border" />
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-7 border-r-7 border-b-7 border-transparent border-b-card" />
                            <p className="text-xs text-muted-foreground text-center leading-relaxed">
                              {phase.description}
                            </p>
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Helper Text */}
              <p className="text-xs text-center text-muted-foreground mt-8">
                Use ← → keys to explore the journey
              </p>
            </div>
          ) : (
            <div className="py-8">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    hide
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="growth" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                    fill="url(#colorGrowth)"
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {/* Progress Bar */}
          <div className="h-1 bg-muted rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
              style={{ width: `${progressFill}%` }}
            />
          </div>

          {!showGrowthPotential ? (
            phases.map((phase, index) => {
              const Icon = phase.icon;
              const isOpen = openAccordion === index;

              return (
                <Card 
                  key={phase.id}
                  className={`bg-slate-900/70 backdrop-blur-sm border border-white/10 transition-all duration-500 ${
                    observer.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="w-full text-left p-4 flex items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    {/* Badge + Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-[10px] font-bold">
                        {phase.id}
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{phase.title}</h3>
                    </div>

                    {/* Chevron */}
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-3 animate-accordion-down">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                      <Button asChild size="sm" className="w-full">
                        <Link to={phase.link}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  )}
                </Card>
              );
            })
          ) : (
            <div className="py-4">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <defs>
                    <linearGradient id="colorGrowthMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={10}
                    tickLine={false}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis hide />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="growth" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 3 }}
                    fill="url(#colorGrowthMobile)"
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
