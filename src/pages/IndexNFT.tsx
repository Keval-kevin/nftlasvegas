import { HeroNFT } from "@/components/Hero/HeroNFT";
import { EcosystemChart } from "@/components/Flywheel/EcosystemChart";
import { SolutionsCarousel } from "@/components/Solutions/SolutionsCarousel";
import { ThreeStepJourney } from "@/components/Journey/ThreeStepJourney";
import { FinalCTABand } from "@/components/CTA/FinalCTABand";
import { StarterPackDownload } from "@/components/StarterPackDownload";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";

const IndexNFT = () => {
  return (
    <>
      <SEOHead
        title="NFT Las Vegas™ Distribution Label"
        description="Your key to unlocking full-stack venture enablement that combines blockchain, AI, and enterprise infrastructure to create self-sustainable economies."
        keywords="NFT Las Vegas, distribution label, venture enablement, blockchain, AI automation, enterprise infrastructure, digital transformation"
        image="/og-image.jpg"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroNFT />
          
          {/* Complete Ecosystem Section */}
          <EcosystemChart />

          <SolutionsCarousel />
          
          <ThreeStepJourney />
          
          {/* Starter Pack Download Section */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <StarterPackDownload />
            </div>
          </section>
          
          <FinalCTABand />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndexNFT;
