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
        
        <main className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" className="mb-4">
              Terms & Conditions
            </FluidText>
            <FluidText className="text-muted-foreground mb-2">
              Last updated: 11/3/25
            </FluidText>
            <FluidText weight="semibold" className="mb-6">
              NFT Las Vegas™ Limited Distribution Label
            </FluidText>
            <FluidText weight="semibold" className="mb-6">
              Digital Marketing & Technology Solutions
            </FluidText>
            <FluidText className="text-muted-foreground leading-relaxed">
              Welcome to NFT Las Vegas™. These Terms & Conditions govern your access to and use of our website, services, and offerings, including digital marketing, technology solutions, blockchain integration, AI services, and equity-based partnerships. By using our services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 animate-slide-in-up animate-delay-200">
            
            {/* Definitions */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                1. Definitions
              </FluidText>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>"NFT Las Vegas™" refers to our company, including its owners, directors, employees, affiliates, and representatives.</p>
                <p>"Client" refers to any individual or entity engaging in our services.</p>
                <p>"Services" includes, but is not limited to, digital marketing, branding, technology development, blockchain solutions, AI-driven analytics, and business consulting.</p>
                <p>"Website" refers to NFTLasVegas.io, including any related domains, subdomains, and services.</p>
              </div>
            </section>

            {/* Scope of Services */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                2. Scope of Services
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">2.1 Marketing & Branding</FluidText>
                  <p>We provide comprehensive branding, digital marketing strategies, and execution across multiple platforms. Performance-based results depend on market conditions, audience engagement, and third-party platform policies.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">2.2 Technology Development</FluidText>
                  <p>We develop customized web, mobile, and enterprise solutions. The project scope, deliverables, and timelines will be outlined in individual client contracts.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">2.3 Blockchain & AI Solutions</FluidText>
                  <p>NFT Las Vegas™ offers blockchain integration, AI-driven analytics, and smart contract development. Clients acknowledge the evolving nature of these technologies and assume responsibility for their application.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">2.4 Equity-Based Partnerships</FluidText>
                  <p>For select projects, we provide development, consulting, and growth services in exchange for equity. These agreements are subject to separate legal contracts outlining ownership, responsibilities, and exit strategies.</p>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                3. Client Responsibilities
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">3.1 Accurate Information</FluidText>
                  <p>Clients must provide accurate, complete, and up-to-date information. NFT Las Vegas™ is not responsible for any outcomes arising from misinformation.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">3.2 Compliance</FluidText>
                  <p>Clients must ensure that all materials and requests comply with applicable laws, including intellectual property rights, advertising standards, and data protection regulations.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">3.3 Payment & Fees</FluidText>
                  <p>Payments must be made in accordance with the agreed-upon terms. Late or non-payment may result in service suspension or termination.</p>
                </div>
              </div>
            </section>

            {/* Intellectual Property Rights */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                4. Intellectual Property Rights
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">4.1 Ownership of Work</FluidText>
                  <p>NFT Las Vegas™ retains ownership of all proprietary tools, templates, and methodologies used in service execution. Custom-developed content or software will be assigned as per contract terms.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">4.2 Trademarks & Branding</FluidText>
                  <p>Clients may not use NFT Las Vegas™ trademarks, logos, or branding without written permission.</p>
                </div>
              </div>
            </section>

            {/* Confidentiality & Data Protection */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                5. Confidentiality & Data Protection
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">5.1 Confidential Information</FluidText>
                  <p>Both parties agree to maintain the confidentiality of any sensitive business, marketing, or financial information exchanged during engagements.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">5.2 Data Security</FluidText>
                  <p>We implement industry-standard security measures to protect client data. However, we do not guarantee absolute security and are not liable for third-party breaches.</p>
                </div>
              </div>
            </section>

            {/* Limitations of Liability */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                6. Limitations of Liability
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                NFT Las Vegas™ is not liable for indirect, incidental, or consequential damages arising from service use. Liability, if applicable, is limited to the amount paid by the client for the respective service.
              </p>
            </section>

            {/* Termination & Cancellation */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                7. Termination & Cancellation
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">7.1 Client-Initiated Termination</FluidText>
                  <p>Clients may terminate their service agreements with prior written notice, subject to applicable fees and outstanding balances.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">7.2 Company-Initiated Termination</FluidText>
                  <p>NFT Las Vegas™ reserves the right to terminate services if the client breaches any terms, engages in illegal activities, or fails to meet payment obligations.</p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                8. Dispute Resolution
              </FluidText>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">8.1 Governing Law</FluidText>
                  <p>These Terms & Conditions are governed by the laws of the State of Nevada.</p>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">8.2 Arbitration</FluidText>
                  <p>Any disputes will be resolved through binding arbitration in Nevada, with each party bearing its costs unless otherwise determined.</p>
                </div>
              </div>
            </section>

            {/* Amendments & Updates */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                9. Amendments & Updates
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                NFT Las Vegas™ reserves the right to modify these Terms & Conditions at any time. Updates will be posted on our website, and continued use of our services constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                10. Contact Information
              </FluidText>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>For any inquiries regarding these Terms & Conditions, please contact us at:</p>
                <div className="mt-4">
                  <p className="font-semibold text-foreground">NFT Las Vegas™ Distribution Label</p>
                  <p><a href="mailto:QuinceyLee@NFTLasVegas.io" className="text-primary hover:underline">QuinceyLee@NFTLasVegas.io</a></p>
                  <p>+1(725)-256-9852</p>
                  <p>7429 Royal Crystal St.</p>
                  <p>Las Vegas, Nevada 89149</p>
                  <p>NFTLasVegas.io</p>
                </div>
                <p className="mt-6 italic">
                  By using our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  NFT Las Vegas™ - Digital Marketing & Technology Solutions You Can Trust
                </p>
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
