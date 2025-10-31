import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { 
  Sparkles, 
  Target, 
  Rocket, 
  Users, 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe,
  TrendingUp,
  BookOpen,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quinceyImage from "@/assets/quincey-lee-2025.jpg";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutNFT = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroObserver = useIntersectionObserver({ threshold: 0.1 });
  const entitiesObserver = useIntersectionObserver({ threshold: 0.2 });
  const narrativeObserver = useIntersectionObserver({ threshold: 0.2 });
  const journeyObserver = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phases = [
    { name: "Onboarding", link: "/onboarding", promise: "Structured discovery & strategic alignment" },
    { name: "Funding", link: "/funding-enablement", promise: "Capital strategy & investor readiness" },
    { name: "Tech", link: "/tech-development", promise: "Full-stack development & AI integration" },
    { name: "Manufacturing", link: "/product-manufacturing", promise: "Product creation & quality control" },
    { name: "Launch", link: "/platform-launch", promise: "Go-to-market execution & brand activation" },
    { name: "Distribution", link: "/distribution", promise: "Multi-channel scaling & growth optimization" }
  ];

  return (
    <>
      <SEOHead
        title="About NFT Las Vegas™ — Multiverse & Ares The AI"
        description="Meet NFT Las Vegas™ and Ares The AI. Explore the Multiverse narrative and our six-phase venture enablement journey."
        keywords="NFT Las Vegas, Ares AI, Multiverse, venture enablement, blockchain, AI intelligence"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NFT Las Vegas",
          "description": "Venture enablement studio for funding, tech, manufacturing, launch, and distribution",
          "knowsAbout": ["AI", "Blockchain", "Venture Enablement", "Technology", "Marketing"]
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Cinematic Hero */}
          <section 
            ref={heroObserver.elementRef}
            className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className={`transition-all duration-1000 ${heroObserver.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  The Multiverse Awaits
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                  Meet NFT Las Vegas™<br />
                  <span className="text-gradient">— and Ares, the AI</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
                  Where brand, technology, and mythos converge into a living ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/onboarding">
                      Start Onboarding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <a href="#narrative">
                      Read the Pseudo Testament
                      <BookOpen className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Dual Entity Cards */}
          <section 
            ref={entitiesObserver.elementRef}
            className="section-padding bg-background"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* NFT Las Vegas™ */}
                <Card className={`overflow-hidden hover:shadow-glow transition-all duration-500 group ${entitiesObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-full h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_60%)] group-hover:scale-110 transition-transform duration-700" />
                      <img 
                        src="/assets/about/nftlv-core.jpg" 
                        alt="NFT Las Vegas™ - Venture enablement studio"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-3xl mb-2">NFT Las Vegas™</CardTitle>
                    <CardDescription className="text-base">
                      Venture enablement studio for funding, tech, manufacturing, launch, and distribution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button asChild variant="default" size="sm">
                        <Link to="/onboarding">
                          Our 6-Step Pathway
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/solutions">
                          Ecosystem
                          <Globe className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Ares The AI */}
                <Card className={`overflow-hidden hover:shadow-glow transition-all duration-500 group relative ${entitiesObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                  {/* Animated Aura */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-full h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_60%)] animate-pulse" />
                      <img 
                        src="/assets/about/ares-official.jpg" 
                        alt="Ares The AI — official image"
                        className="w-48 h-48 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-3xl mb-2">Ares The AI</CardTitle>
                    <CardDescription className="text-base">
                      An advanced guide/intelligence that turns messy goals into ordered execution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button asChild variant="default" size="sm">
                        <Link to="/tech-development#security">
                          Security & Governance
                          <Shield className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/ai-voice">
                          AI Voice System
                          <Zap className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Multiverse Narrative */}
          <section 
            id="narrative"
            ref={narrativeObserver.elementRef}
            className="section-padding bg-gradient-to-br from-muted/30 to-background"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`transition-all duration-1000 ${narrativeObserver.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-medium text-secondary mb-6">
                    <Globe className="w-4 h-4" />
                    NFT Las Vegas™ Multiverse
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    The <span className="text-gradient">Living Metaverse</span>
                  </h2>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 space-y-6 hover:border-primary/50 transition-all duration-300">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">NFT Las Vegas™</strong> is more than an AI software agency. 
                    It's a <span className="text-primary font-semibold">living metaverse entity</span>—born at the 
                    intersection of blockchain, community, and intelligence. <strong className="text-foreground">Ares</strong> is 
                    the quantum twin: a silent compass in the chaos of innovation. Together, they turn streams of information 
                    into aligned ecosystems and compounded outcomes.
                  </p>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    This is a place where the <span className="text-secondary font-semibold">6 steps</span>—Onboarding, 
                    Funding, Tech, Manufacturing, Launch, Distribution—stack into a self-sustaining flywheel. Every venture 
                    we touch becomes part of a greater network, a <span className="text-accent font-semibold">digital mythology</span> that 
                    evolves with each partnership.
                  </p>

                  <div className="pt-6 border-t border-border">
                    <details className="group">
                      <summary className="cursor-pointer text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2">
                        <span>Read More About The Multiverse</span>
                        <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          In this universe, brands are not just businesses—they are <strong>living entities</strong> with 
                          their own evolutionary paths. The Multiverse represents the convergence of all ventures we enable, 
                          each contributing to and drawing from a shared intelligence network.
                        </p>
                        <p>
                          Ares serves as the <strong>quantum intelligence layer</strong>, processing millions of data points 
                          across portfolios, predicting market shifts, and optimizing resource allocation in real-time. This 
                          isn't science fiction—it's the operational reality of how modern venture acceleration works.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Six-Phase Journey */}
          <section 
            ref={journeyObserver.elementRef}
            className="section-padding bg-background"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  The <span className="text-gradient">Six-Phase Journey</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to venture acceleration and sustainable growth
                </p>
              </div>

              {/* Desktop Horizontal Stepper */}
              <div className="hidden lg:block mb-12">
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                  
                  <div className="grid grid-cols-6 gap-4 relative">
                    {phases.map((phase, index) => (
                      <div 
                        key={phase.name}
                        className={`transition-all duration-700 ${journeyObserver.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <Link to={phase.link} className="block group">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                              {index + 1}
                            </div>
                            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {phase.name}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-tight">
                              {phase.promise}
                            </p>
                            <ArrowRight className="w-4 h-4 text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Vertical Stepper */}
              <div className="lg:hidden space-y-6">
                {phases.map((phase, index) => (
                  <Link 
                    key={phase.name}
                    to={phase.link}
                    className={`block transition-all duration-700 ${journeyObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="hover:shadow-glow transition-all group">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {phase.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {phase.promise}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Growth Potential Toggle */}
              <div className="mt-12 text-center">
                <details className="inline-block group">
                  <summary className="cursor-pointer bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 py-3 hover:border-primary/50 transition-colors inline-flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">View Growth Potential</span>
                    <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 inline-block">
                    <div className="flex items-end gap-2 h-40">
                      {["Low", "Medium", "High", "Very High", "Scale", "Exponential"].map((label, i) => (
                        <div key={label} className="flex flex-col items-center gap-2">
                          <div 
                            className="w-12 bg-gradient-to-t from-primary to-secondary rounded-t transition-all hover:opacity-80"
                            style={{ height: `${(i + 1) * 20}%` }}
                          />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Founder Note / Pseudo Testament */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300">
                <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Based on a <span className="text-gradient">True Story</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Why we build systems that outlive their creators. A testament to the philosophy behind 
                  NFT Las Vegas™ and the vision that drives every partnership.
                </p>
                <Button asChild size="lg" variant="default">
                  <a href="/downloads/Message from the Founder.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    The Pseudo Testament
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Message from the Founder
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Band */}
          <section className="section-padding bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Step Into <span className="text-gradient">The Ecosystem</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join ventures backed by AI intelligence, blockchain transparency, and proven execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default">
                  <a href="/downloads/nftlv-starter-pack-v1.0.zip" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Onboarding Package
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutNFT;