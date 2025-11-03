import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { FluidText } from "@/components/FluidText";

const TermsAndConditions = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions"
        description="Review the terms and conditions governing your use of NFT Las Vegas™ services."
        keywords="terms, conditions, legal, agreement, NFT Las Vegas"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" align="center" className="mb-4">
              Terms & Conditions
            </FluidText>
            <FluidText size="lg" className="text-muted-foreground max-w-3xl mx-auto">
              Review the terms and conditions governing your use of NFT Las Vegas™ services.
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-12 animate-slide-in-up animate-delay-200">
            
            {/* Definitions */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Definitions
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Scope of Services */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Scope of Services
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Client Responsibilities */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Client Responsibilities
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Intellectual Property Rights */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Intellectual Property Rights
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Confidentiality & Data Protection */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Confidentiality & Data Protection
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Limitations of Liability */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Limitations of Liability
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Termination & Cancellation */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Termination & Cancellation
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Dispute Resolution */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Dispute Resolution
              </FluidText>
              <FluidText as="h3" size="xl" weight="medium" className="mb-3 mt-6">
                Governing Law
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
              <FluidText as="h3" size="xl" weight="medium" className="mb-3 mt-6">
                Arbitration
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Amendments & Updates */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Amendments & Updates
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Contact Information */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Contact Information
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

export default TermsAndConditions;
