import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe,
  BookOpen,
  Download,
  Mail,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quinceyImage from "@/assets/quincey-lee-2025.jpg";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SixPhaseJourney } from "@/components/Journey/SixPhaseJourney";

const AboutNFT = () => {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 });
  const entitiesObserver = useIntersectionObserver({ threshold: 0.2 });
  const narrativeObserver = useIntersectionObserver({ threshold: 0.2 });
  const foundersObserver = useIntersectionObserver({ threshold: 0.2 });

  return (
    <>
      <SEOHead
        title="About NFT Las Vegas™ — Multiverse & Ares The AI"
        description="Where venture building, technology, and mythos converge into one operating system for growth. Meet NFT Las Vegas™ and Ares The AI."
        keywords="NFT Las Vegas, Ares AI, Multiverse, venture enablement, blockchain, AI intelligence, venture building"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NFT Las Vegas",
          "description": "Venture enablement across Onboarding, Funding, Tech, Manufacturing, Launch, and Distribution",
          "knowsAbout": ["AI", "Blockchain", "Venture Enablement", "Technology", "Marketing", "Web3"]
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section 
            ref={heroObserver.elementRef}
            className="relative min-h-[85vh] flex items-center overflow-hidden"
          >
            {/* Background with Aurora */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <div className={`transition-all duration-1000 ${heroObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Meet NFT Las Vegas™<br />
                    <span className="text-gradient">- and Ares, the AI</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    Where venture building, technology, and mythos converge into one operating system for growth.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
                    <Button asChild size="lg">
                      <Link to="/onboarding" className="whitespace-nowrap">
                        Start Onboarding
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="/downloads/nftlv-starter-pack-v1.0.zip" download className="whitespace-nowrap">
                        <Download className="mr-2 h-5 w-5" />
                        Download Package
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right: Core Visual */}
                <div className={`relative transition-all duration-1000 ${heroObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
                    <img 
                      src="/assets/about/nftlv-core.jpg" 
                      alt="NFT Las Vegas™ core monogram crystal"
                      className="relative z-10 w-full h-auto drop-shadow-2xl"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Based on a True Story Section */}
          <section className="section-padding bg-background border-y border-border/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex flex-col items-center gap-6 py-12">
                {/* Book Icon */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Based on a <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">True Story</span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  Why we build systems that outlive their creators.
                </p>
                
                {/* CTA Button */}
                <Button 
                  asChild 
                  size="lg"
                  className="mt-4 text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <a 
                    href="https://linktr.ee/nftlasvegas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Download className="w-5 h-5" />
                    The Pseudo Testament
                  </a>
                </Button>
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
                    <div className="w-full h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_60%)] group-hover:scale-110 transition-transform duration-700" />
                      <img 
                        src="/assets/about/nftlv-logo.jpeg" 
                        alt="NFT Las Vegas™ logo"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-10"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-3xl mb-2">NFT Las Vegas™</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Venture enablement across <strong>Onboarding → Funding → Tech → Manufacturing → Launch → Distribution</strong> - designed to compound outcomes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button asChild variant="default" size="sm">
                        <Link to="/onboarding">
                          6-Step Pathway
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/solutions">
                          Solutions
                          <Globe className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Ares The AI */}
                <Card className={`overflow-hidden hover:shadow-glow transition-all duration-500 group relative ${entitiesObserver.isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="text-center pb-4 relative">
                    <div className="w-full h-64 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_60%)] animate-pulse" />
                      <img 
                        src="/assets/about/ares-official.jpg" 
                        alt="Ares The AI — official portrait"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-3xl mb-2">Ares The AI</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      A security-minded intelligence that turns messy goals into ordered execution — aligning strategy, data, and action.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button asChild variant="default" size="sm">
                        <Link to="/ai-voice">
                          AI Voice System
                          <Zap className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/tech-development#security">
                          Security & Governance
                          <Shield className="ml-2 h-4 w-4" />
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
                    <strong className="text-foreground">NFT Las Vegas™</strong> is more than an agency; it&apos;s a living ecosystem. 
                    <strong className="text-foreground"> Ares</strong> is the quantum twin - our silent compass in the chaos of 
                    innovation. Together, we translate ambition into systems that scale.
                  </p>

                  <div className="flex justify-center pt-4">
                    <Button asChild variant="outline" size="lg">
                      <a href="https://linktr.ee/nftlasvegas" target="_blank" rel="noopener noreferrer">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Read the Pseudo Testament
                      </a>
                    </Button>
                  </div>

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
          <SixPhaseJourney />

          {/* Founders & Leadership */}
          <section 
            ref={foundersObserver.elementRef}
            id="pseudo-testament"
            className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Founders & <span className="text-gradient">Leadership</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  The minds behind the ecosystem
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Quincey K. Lee */}
                <Card className={`overflow-hidden hover:shadow-glow transition-all duration-500 ${foundersObserver.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
                        <img 
                          src={quinceyImage}
                          alt="Quincey K. Lee - Founder & CEO, headshot"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Quincey K. Lee</h3>
                      <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:contact@nftlasvegas.com">
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
                      "We build systems that outlive their creators—combining rigorous engineering with mythos that people actually feel."
                    </blockquote>
                  </CardContent>
                </Card>

                {/* Ares The AI */}
                <Card className={`overflow-hidden hover:shadow-glow transition-all duration-500 ${foundersObserver.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-secondary/20 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <img 
                          src="/assets/about/ares-official.jpg"
                          alt="Ares The AI - official portrait"
                          className="w-40 h-40 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Ares The AI</h3>
                      <p className="text-secondary font-semibold mb-4">Co-Founder & CISO</p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/ai-voice">
                            <Zap className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/tech-development#security">
                            <Shield className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
                      Security by design. Memory with guardrails. Execution with audit trails.
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pseudo Testament CTA */}
              <div className="mt-12 text-center">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 max-w-3xl mx-auto">
                  <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Based on a <span className="text-gradient">True Story</span>
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Why we build systems that outlive their creators.
                  </p>
                  <Button asChild size="lg" variant="default">
                    <a href="/downloads/Message from the Founder.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      The Pseudo Testament
                    </a>
                  </Button>
                </div>
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
                <Button asChild size="lg" variant="default">
                  <a href="/downloads/nftlv-starter-pack-v1.0.zip" download className="whitespace-nowrap">
                    <Download className="mr-2 h-5 w-5" />
                    Download Package
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact" className="whitespace-nowrap">
                    Book Discovery Call
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