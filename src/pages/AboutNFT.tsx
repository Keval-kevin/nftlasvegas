import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Sparkles, Target, Rocket, Users } from "lucide-react";
import quinceyImage from "@/assets/quincey-lee.png";
import { useState, useEffect } from "react";

const AboutNFT = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEOHead
        title="About NFT Las Vegas™ - Venture Enablement Leaders"
        description="NFT Las Vegas™ is more than a digital agency — it's a venture accelerator combining blockchain transparency, AI intelligence, and full-stack enterprise solutions."
        keywords="venture acceleration, digital transformation, blockchain, AI, leadership"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Powering Digital Innovation
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Building the <span className="text-gradient">Future of Business</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  NFT Las Vegas™ is more than a digital agency — it's a <strong>venture accelerator</strong> combining 
                  blockchain transparency, AI intelligence, and full-stack enterprise solutions. We partner through 
                  equity-based collaborations to build scalable ecosystems of innovation.
                </p>
              </div>

              {/* Mission Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    icon: Sparkles,
                    title: "Innovation Without Limits",
                    description: "We seamlessly integrate AI and blockchain technologies to create solutions that push the boundaries of what's possible.",
                    gradient: "from-primary to-accent"
                  },
                  {
                    icon: Users,
                    title: "Equity-Driven Partnerships",
                    description: "Our sweat equity model aligns our success with yours, creating true partnerships built on shared vision and outcomes.",
                    gradient: "from-secondary to-primary"
                  },
                  {
                    icon: Rocket,
                    title: "Future-Ready Execution",
                    description: "From strategy to launch, we provide comprehensive support under one roof, accelerating your journey to market.",
                    gradient: "from-accent to-secondary"
                  }
                ].map((card, index) => (
                  <div 
                    key={card.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Leadership</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visionary leaders combining human creativity with artificial intelligence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Quincey K. Lee */}
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                  <div className="mb-6">
                    <img 
                      src={quinceyImage} 
                      alt="Quincey K. Lee - CEO & Founder" 
                      className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform border-4 border-primary/20"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Quincey K. Lee</h3>
                    <p className="text-primary font-medium mb-4">CEO & Founder</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Visionary entrepreneur with 15+ years building transformative ventures across marketing, 
                      blockchain, and enterprise technology. Expert in venture acceleration and strategic partnerships.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Venture Strategy", "Blockchain", "AI Innovation", "Marketing"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ares the AI */}
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                  {/* Animated Aura Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse" />
                  
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-secondary via-accent to-primary mx-auto shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform border-4 border-secondary/20">
                      <div className="text-6xl">🤖</div>
                    </div>
                  </div>
                  
                  <div className="text-center relative">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Ares the AI</h3>
                    <p className="text-secondary font-medium mb-4">Chief Intelligence & Security Officer</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Advanced AI system providing 24/7 intelligence, security analysis, and strategic insights. 
                      Ares processes millions of data points to optimize operations and protect our ventures.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["AI Security", "Data Analysis", "Automation", "Intelligence"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs font-medium text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-all duration-300">
                <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                  "We empower businesses, entrepreneurs & visionaries with cutting-edge marketing, technology & 
                  blockchain solutions that drive sustainable growth and create lasting impact in the digital economy."
                </blockquote>
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
