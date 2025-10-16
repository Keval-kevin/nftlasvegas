import { useState, useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { DollarSign, Code, Package, Rocket, Globe } from "lucide-react";
import nftLogo from "@/assets/nft-logo.jpeg";

type Pillar = {
  id: string;
  label: string;
  blurb: string;
  href: string;
  icon: React.ElementType;
  angle: number;
};

const PILLARS: Pillar[] = [
  { 
    id: "funding", 
    label: "Funding", 
    blurb: "Investor narrative, data room & capital strategy—become fundable.", 
    href: "/funding-enablement", 
    icon: DollarSign,
    angle: -90 
  },
  { 
    id: "tech", 
    label: "Tech", 
    blurb: "AI, Web3, and enterprise integrations—designed for scale.", 
    href: "/tech-development", 
    icon: Code,
    angle: -18 
  },
  { 
    id: "manufacturing", 
    label: "Manufacturing", 
    blurb: "Prototype → certify → mass produce with reliable partners.", 
    href: "/product-manufacturing", 
    icon: Package,
    angle: 54 
  },
  { 
    id: "launch", 
    label: "Launch", 
    blurb: "Positioning, content engine, marketing ops & analytics—aligned.", 
    href: "/platform-launch", 
    icon: Rocket,
    angle: 126 
  },
  { 
    id: "distribution", 
    label: "Distribution", 
    blurb: "Channels, marketplaces, enablement kits & SLAs.", 
    href: "/distribution", 
    icon: Globe,
    angle: 198 
  },
];

export const EcosystemOrbit = () => {
  const [active, setActive] = useState<Pillar | null>(PILLARS[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tappedNode, setTappedNode] = useState<string | null>(null);
  const descId = useId();
  const autoRotateTimer = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);

  const resetAutoRotate = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (autoRotateTimer.current) clearInterval(autoRotateTimer.current);
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    inactivityTimer.current = setTimeout(() => {
      autoRotateTimer.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % PILLARS.length;
          setActive(PILLARS[newIndex]);
          return newIndex;
        });
      }, 3000);
    }, 4000);
  };

  useEffect(() => {
    resetAutoRotate();
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (autoRotateTimer.current) clearInterval(autoRotateTimer.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newIndex = (currentIndex - 1 + PILLARS.length) % PILLARS.length;
        setCurrentIndex(newIndex);
        setActive(PILLARS[newIndex]);
        resetAutoRotate();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const newIndex = (currentIndex + 1) % PILLARS.length;
        setCurrentIndex(newIndex);
        setActive(PILLARS[newIndex]);
        resetAutoRotate();
      } else if (e.key === "Enter" && active) {
        window.location.href = active.href;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, active]);

  const handleNodeInteraction = (p: Pillar, index: number, isMobile: boolean) => {
    if (isMobile) {
      if (tappedNode === p.id) {
        window.location.href = p.href;
      } else {
        setTappedNode(p.id);
        setActive(p);
        setCurrentIndex(index);
        resetAutoRotate();
      }
    } else {
      setActive(p);
      setCurrentIndex(index);
      resetAutoRotate();
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Section Header */}
      <div className="text-center z-20 px-4 mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
          <span className="text-foreground">The </span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Complete Ecosystem
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-[56ch] mx-auto">
          Five integrated pillars working in harmony to accelerate your venture from concept to market dominance
        </p>
      </div>

      {/* Orbit Stage */}
      <div className="relative min-h-[640px] md:min-h-[760px] xl:min-h-[840px] flex items-center justify-center">
        {/* Background vignette and particles */}
        <div 
          aria-hidden 
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_65%)]" 
        />

        {/* Orbit container */}
        <div className="relative aspect-square w-[86vw] max-w-[980px] xl:max-w-[1080px] mx-auto">
          {/* Dotted orbit ring with slow animation */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            aria-hidden
          />
          
          {/* Glow ring */}
          <div 
            className="absolute inset-0 rounded-full shadow-[0_0_140px_24px_hsl(var(--primary)/0.22)]" 
            aria-hidden 
          />

          {/* Center logo with pulsing aura */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              className="size-[120px] md:size-[180px] xl:size-[200px] rounded-full bg-card/60 backdrop-blur-sm border-2 border-primary/25 flex items-center justify-center overflow-hidden"
              animate={{ 
                boxShadow: [
                  "0_0_40px_hsl(var(--primary)/0.3)",
                  "0_0_60px_hsl(var(--primary)/0.4)",
                  "0_0_40px_hsl(var(--primary)/0.3)"
                ]
              }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            >
              <img
                src={nftLogo}
                alt="NFT Las Vegas"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Pillar nodes */}
          {PILLARS.map((p, index) => {
            const baseRadius = 210;
            const mdRadius = 300;
            const xlRadius = 340;
            const rad = (p.angle * Math.PI) / 180;
            
            const xBase = Math.cos(rad) * baseRadius;
            const yBase = Math.sin(rad) * baseRadius;
            const xMd = Math.cos(rad) * mdRadius;
            const yMd = Math.sin(rad) * mdRadius;
            const xXl = Math.cos(rad) * xlRadius;
            const yXl = Math.sin(rad) * xlRadius;
            
            const isActive = active?.id === p.id;
            const Icon = p.icon;

            return (
              <Link
                key={p.id}
                to={p.href}
                onMouseEnter={() => handleNodeInteraction(p, index, false)}
                onFocus={() => handleNodeInteraction(p, index, false)}
                onClick={(e) => {
                  const isMobile = window.innerWidth < 768;
                  if (isMobile && tappedNode !== p.id) {
                    e.preventDefault();
                    handleNodeInteraction(p, index, true);
                  }
                }}
                className="absolute outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${xBase}px), calc(-50% + ${yBase}px))`,
                }}
                aria-describedby={descId}
                aria-label={`${p.label}: ${p.blurb}`}
              >
                <style>{`
                  @media (min-width: 768px) {
                    a[aria-label="${p.label}: ${p.blurb}"] {
                      transform: translate(calc(-50% + ${xMd}px), calc(-50% + ${yMd}px)) !important;
                    }
                  }
                  @media (min-width: 1280px) {
                    a[aria-label="${p.label}: ${p.blurb}"] {
                      transform: translate(calc(-50% + ${xXl}px), calc(-50% + ${yXl}px)) !important;
                    }
                  }
                `}</style>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1.06 : 1,
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <div className={`
                    size-[92px] md:size-[120px] xl:size-[136px] rounded-full 
                    bg-gradient-to-br from-primary via-accent to-secondary 
                    p-[2px] 
                    shadow-lg
                    ${isActive ? 'shadow-[0_0_48px_hsl(var(--primary)/0.7)]' : 'shadow-[0_0_24px_hsl(var(--primary)/0.35)]'}
                    transition-all duration-300
                  `}>
                    <div className="size-full rounded-full bg-card/90 backdrop-blur-sm flex flex-col items-center justify-center border border-primary/10 gap-1.5">
                      <Icon className={`w-7 h-7 md:w-9 md:h-9 xl:w-10 xl:h-10 transition-all duration-300 ${isActive ? 'scale-110 text-primary' : 'text-foreground'}`} />
                      <span className="text-xs md:text-sm font-semibold">{p.label}</span>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        role="tooltip"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 -top-4 -translate-y-full px-4 py-2.5 rounded-xl bg-popover/95 backdrop-blur-md border border-border text-xs md:text-sm text-popover-foreground shadow-2xl max-w-[240px] md:max-w-[300px] text-center z-50 pointer-events-none"
                      >
                        {p.blurb}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-popover/95" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Caption bar */}
        <div
          id={descId}
          className="pointer-events-none absolute bottom-6 md:bottom-10 left-4 right-4 md:left-8 md:right-8 flex flex-col items-center justify-center z-20 gap-2"
        >
          <motion.div 
            className="max-w-3xl w-full rounded-2xl bg-card/85 backdrop-blur-md border border-border px-4 py-3 md:px-6 md:py-4 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-center text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">{active?.label}:</span> {active?.blurb}{" "}
              <Link 
                to={active?.href ?? "#"} 
                className="pointer-events-auto underline decoration-primary/80 hover:text-primary transition-colors ml-1 font-medium"
              >
                Learn more →
              </Link>
            </p>
          </motion.div>
          
          {/* Keyboard navigation hint */}
          <p className="text-xs text-muted-foreground/60 hidden md:block pointer-events-none">
            Use ← → arrow keys to navigate
          </p>
        </div>
      </div>
    </section>
  );
};
