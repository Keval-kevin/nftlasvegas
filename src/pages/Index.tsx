
import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { Solutions } from "@/components/Solutions";
import { WhyEasenext } from "@/components/WhyEasenext";
import { Services } from "@/components/Services";
import { BlogPreview } from "@/components/BlogPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FeaturedSolutions } from "@/components/FeaturedSolutions";
import { TransformationStats } from "@/components/TransformationStats";

import { SEOHead } from "@/components/SEO/SEOHead";
import { AdvancedSEO } from "@/components/AdvancedSEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AdvancedSEO 
        title="Easenext - Smart Tech Solutions & On-Demand Talent"
        description="Transform your business with AI automation, healthcare innovation, and custom software development. Expert tech solutions for modern enterprises."
        keywords={["AI automation", "healthcare technology", "custom software development", "business process automation", "tech consulting", "digital transformation"]}
        url="https://easenext.com"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Easenext",
          "description": "Smart tech solutions and on-demand talent for business transformation",
          "url": "https://easenext.com",
          "logo": "https://easenext.com/lovable-uploads/45d400ac-8bf5-41af-8aaf-1c03b17e2b04.png",
          "services": [
            "AI Automation Solutions",
            "Healthcare Technology Solutions", 
            "Business Process Automation",
            "Custom Software Development"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://easenext.com/contact"
          }
        }}
      />
      <Header />
      <Hero />
      <FeaturedSolutions />
      <PartnersMarquee />
      <TransformationStats />
      <Solutions />
      <WhyEasenext />
      <Services />
      <BlogPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
