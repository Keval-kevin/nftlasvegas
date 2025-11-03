import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { FluidText } from "@/components/FluidText";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Learn how NFT Las Vegas™ collects, uses, and protects your information."
        keywords="privacy, policy, data protection, GDPR, NFT Las Vegas"
      />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" align="center" className="mb-4">
              Privacy Policy
            </FluidText>
            <FluidText size="lg" className="text-muted-foreground max-w-3xl mx-auto">
              Learn how NFT Las Vegas™ collects, uses, and protects your information.
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-12 animate-slide-in-up animate-delay-200">
            
            {/* Information We Collect */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Information We Collect
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* How We Use Your Information */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                How We Use Your Information
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Sharing Your Information */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Sharing Your Information
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Data Security */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Data Security
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Cookies & Tracking Technologies
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Your Rights & Choices */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Your Rights & Choices
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Third-Party Links & Services */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Third-Party Links & Services
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Children's Privacy */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Children's Privacy
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* International Data Transfers */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                International Data Transfers
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Changes to This Privacy Policy */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Changes to This Privacy Policy
              </FluidText>
              <FluidText className="text-muted-foreground leading-relaxed">
                [Content to be added from existing site]
              </FluidText>
            </section>

            {/* Contact Us */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Contact Us
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

export default PrivacyPolicy;
