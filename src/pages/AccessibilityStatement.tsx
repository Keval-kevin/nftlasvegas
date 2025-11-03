import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { FluidText } from "@/components/FluidText";

const AccessibilityStatement = () => {
  return (
    <>
      <SEOHead
        title="Accessibility Statement"
        description="Our commitment to a more accessible and inclusive digital experience."
        keywords="accessibility, WCAG, inclusive, web standards, NFT Las Vegas"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" align="center" className="mb-4">
              Accessibility Statement
            </FluidText>
            <FluidText size="lg" className="text-muted-foreground max-w-3xl mx-auto">
              Our commitment to a more accessible and inclusive digital experience.
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-12 animate-slide-in-up animate-delay-200">
            
            {/* Our Promised Commitment to Accessibility */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Our Promised Commitment to Accessibility
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Features & Enhancements */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Features & Enhancements
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Ongoing Accessibility Efforts */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Ongoing Accessibility Efforts
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Feedback & Assistance */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Feedback & Assistance
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Future Improvements */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Future Improvements
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AccessibilityStatement;
