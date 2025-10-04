import { HeroNFT } from "@/components/Hero/HeroNFT";
import { FlywheelAnimation } from "@/components/Flywheel/FlywheelAnimation";
import { SolutionsCarousel } from "@/components/Solutions/SolutionsCarousel";
import { ThreeStepJourney } from "@/components/Journey/ThreeStepJourney";
import { FinalCTABand } from "@/components/CTA/FinalCTABand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";

const IndexNFT = () => {
  return (
    <>
      <SEOHead
        title="NFT Las Vegas™ - Venture Enablement & Digital Transformation"
        description="Your all-in-one partner for marketing, branding & enterprise-level tech development. From funding to launch, powered by AI, Blockchain & Human Creativity."
        keywords="venture acceleration, digital transformation, AI automation, blockchain solutions, marketing agency, tech development"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroNFT />
          
          {/* Flywheel Section */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  The <span className="text-gradient">Complete Ecosystem</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Five integrated pillars working in harmony to accelerate your venture from concept to market dominance
                </p>
              </div>
              <FlywheelAnimation />
            </div>
          </section>

          <SolutionsCarousel />
          
          <ThreeStepJourney />
          
          <FinalCTABand />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndexNFT;
