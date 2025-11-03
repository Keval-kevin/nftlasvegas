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
        
        <main className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" className="mb-6">
              Accessibility Statement
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 animate-slide-in-up animate-delay-200">
            
            {/* Our Promised Commitment to Accessibility */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Our Promised Commitment to Accessibility
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NFT Las Vegas™ Limited is committed to ensuring digital accessibility for all users, including individuals with disabilities. We strive to provide an inclusive and user-friendly experience for all visitors by implementing accessibility best practices and continuously improving our digital presence. Our goal is to make our website, products, and services as accessible as possible to everyone, regardless of ability or technology.
              </p>
              <FluidText as="h3" size="xl" weight="semibold" className="mb-3 mt-6">
                What web accessibility is
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                An accessible site allows visitors with disabilities to browse the site with the same or a similar level of ease and enjoyment as other visitors. This can be achieved with the capabilities of the system on which the site is operating, and through assistive technologies.
              </p>
            </section>

            {/* Accessibility Standards & Compliance */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Accessibility Standards & Compliance
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We aim to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards, which serve as a global benchmark for accessibility. These guidelines help us ensure that our website is:
              </p>
              <div className="space-y-3 text-muted-foreground leading-relaxed ml-4">
                <p><strong>Perceivable</strong> – Content is presented in ways that all users can perceive, including text alternatives for non-text content and adaptable formats.</p>
                <p><strong>Operable</strong> – Navigation is accessible via keyboard, screen readers, and other assistive technologies.</p>
                <p><strong>Understandable</strong> – Clear, readable text and predictable website functionality for ease of use.</p>
                <p><strong>Robust</strong> – Compatible with a wide range of browsers, devices, and assistive technologies.</p>
              </div>
            </section>

            {/* Features & Enhancements */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Features & Enhancements
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To enhance accessibility, NFT Las Vegas™ has incorporated the following features into our website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground leading-relaxed">
                <li><strong>Keyboard Navigation:</strong> Our website is fully navigable using a keyboard for users who cannot use a mouse.</li>
                <li><strong>Alt Text for Images:</strong> Descriptive alt text is provided for meaningful images to assist screen reader users.</li>
                <li><strong>Readable Fonts & Contrast:</strong> We ensure high-contrast text and easy-to-read fonts for improved legibility.</li>
                <li><strong>Resizable Text:</strong> Users can adjust text sizes without loss of content or functionality.</li>
                <li><strong>Video Captions & Transcripts:</strong> Closed captions and transcripts are provided for multimedia content when applicable.</li>
                <li><strong>Form Accessibility:</strong> All forms are structured for clear navigation with proper labeling and validation.</li>
              </ul>
            </section>

            {/* Ongoing Accessibility Efforts */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Ongoing Accessibility Efforts
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                NFT Las Vegas™ is dedicated to the continuous enhancement of accessibility. We conduct regular audits, user testing, and updates to maintain compliance and improve the user experience for individuals with disabilities. Our team actively monitors advancements in accessibility guidelines and technology to implement new improvements as needed.
              </p>
            </section>

            {/* Feedback & Assistance */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Feedback & Assistance
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We value feedback from our users and welcome any suggestions or concerns regarding accessibility. If you experience difficulty accessing any part of our website or need assistance, please contact us:
              </p>
              <div className="text-muted-foreground leading-relaxed space-y-2 ml-4">
                <p>Email: <a href="mailto:NFTLasVegas@NFTLasVegas.io" className="text-primary hover:underline">NFTLasVegas@NFTLasVegas.io</a></p>
                <p>Phone: +1(702)-443-2406</p>
                <p>Mailing Address: 7429 Royal Crystal St. Las Vegas, NV 89149</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We are committed to responding to inquiries promptly and ensuring that everyone can access our services effectively.
              </p>
            </section>

            {/* Future Improvements */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                Future Improvements
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NFT Las Vegas™ is continually working to enhance accessibility and inclusivity. We are dedicated to making ongoing improvements and adopting emerging technologies that benefit all users. Our commitment to accessibility is a reflection of our broader mission to create a digital environment that is open, inclusive, and user-friendly for everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                Thank you for visiting NFT Las Vegas™ Distribution Label. We appreciate your support as we work towards a more accessible and innovative digital experience for all!
              </p>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AccessibilityStatement;
