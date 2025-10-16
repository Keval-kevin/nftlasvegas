import { useState, useEffect, useId } from "react";
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
    blurb: "Investor narrative, data room, & capital strategy—become fundable.", 
    href: "/funding-enablement", 
    icon: DollarSign,
    angle: -110 
  },
  { 
    id: "tech", 
    label: "Tech", 
    blurb: "AI, Web3, and enterprise integrations—designed for scale.", 
    href: "/tech-development-nft", 
    icon: Code,
    angle: -40 
  },
  { 
    id: "manufacturing", 
    label: "Manufacturing", 
    blurb: "Prototype → certify → mass produce with reliable partners.", 
    href: "/product-manufacturing", 
    icon: Package,
    angle: 20 
  },
  { 
    id: "launch", 
    label: "Launch", 
    blurb: "Positioning, content engine, marketing ops, analytics—aligned.", 
    href: "/platform-launch", 
    icon: Rocket,
    angle: 90 
  },
  { 
    id: "distribution", 
    label: "Distribution", 
    blurb: "Channels, marketplaces, enablement kits, & SLAs.", 
    href: "/distribution-nft", 
    icon: Globe,
    angle: 160 
  },
];

export const EcosystemOrbit = () => {
  const [active, setActive] = useState<Pillar | null>(PILLARS[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const descId = useId();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newIndex = (currentIndex - 1 + PILLARS.length) % PILLARS.length;
        setCurrentIndex(newIndex);
        setActive(PILLARS[newIndex]);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const newIndex = (currentIndex + 1) % PILLARS.length;
        setCurrentIndex(newIndex);
        setActive(PILLARS[newIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-[540px] md:min-h-[680px] xl:min-h-[760px] flex items-center justify-center overflow-hidden">
      {/* Section Header */}
      <div className="absolute top-8 md:top-12 left-0 right-0 text-center z-20 px-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
          <span className="text-foreground">The </span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Complete Ecosystem
          </span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Five integrated pillars working in harmony to accelerate your venture from concept to market dominance
        </p>
      </div>

      {/* Background glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_60%)]" 
      />

      {/* Orbit container */}
      <div className="relative aspect-square w-[86vw] max-w-[680px] md:max-w-[780px] xl:max-w-[880px]">
        {/* Dotted orbit ring with slow animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
          animate={{ rotate: active ? 360 : 0 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          aria-hidden
        />
        
        {/* Glow ring */}
        <div 
          className="absolute inset-0 rounded-full shadow-[0_0_120px_20px_hsl(var(--primary)/0.25)]" 
          aria-hidden 
        />

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div 
            className="size-32 md:size-40 xl:size-48 rounded-full bg-card/50 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center shadow-[0_0_60px_hsl(var(--primary)/0.4)] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
          const baseRadius = 180;
          const mdRadius = 220;
          const xlRadius = 260;
          const rad = (p.angle * Math.PI) / 180;
          
          // Calculate positions for different screen sizes
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
              onMouseEnter={() => {
                setActive(p);
                setCurrentIndex(index);
              }}
              onFocus={() => {
                setActive(p);
                setCurrentIndex(index);
              }}
              className="absolute outline-none"
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
                  size-20 md:size-24 xl:size-28 rounded-full 
                  bg-gradient-to-br from-primary to-secondary 
                  p-[2px] 
                  shadow-lg
                  ${isActive ? 'shadow-[0_0_40px_hsl(var(--primary)/0.6)]' : 'shadow-[0_0_20px_hsl(var(--primary)/0.3)]'}
                  transition-shadow duration-300
                `}>
                  <div className="size-full rounded-full bg-card/90 backdrop-blur-sm flex flex-col items-center justify-center border border-primary/10 gap-1">
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                    <span className="text-[10px] md:text-xs font-semibold">{p.label}</span>
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
                      className="absolute left-1/2 -translate-x-1/2 -top-3 -translate-y-full px-4 py-2 rounded-lg bg-popover/95 backdrop-blur-sm border border-border text-xs md:text-sm text-popover-foreground shadow-xl max-w-[240px] md:max-w-[280px] text-center z-50 pointer-events-none"
                    >
                      {p.blurb}
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover/95" />
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
        className="pointer-events-none absolute bottom-6 md:bottom-8 xl:bottom-12 left-4 right-4 md:left-12 md:right-12 flex items-center justify-center z-20"
      >
        <motion.div 
          className="max-w-3xl w-full rounded-2xl bg-card/80 backdrop-blur-md border border-border px-4 py-3 md:px-6 md:py-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-center text-xs md:text-sm lg:text-base text-muted-foreground">
            <span className="font-semibold text-foreground">{active?.label}:</span> {active?.blurb}{" "}
            <Link 
              to={active?.href ?? "#"} 
              className="pointer-events-auto underline decoration-primary/80 hover:text-primary transition-colors ml-1 font-medium"
            >
              Learn more →
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 hidden md:block pointer-events-none">
        Use ← → arrow keys to navigate
      </div>
    </section>
  );
};
