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
      <div className="min-h-dvh bg-background text-foreground">
        <Header />
        
        <main className="max-w-[900px] mx-auto px-4 md:px-6 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12 animate-fade-in">
            <FluidText as="h1" size="4xl" weight="bold" className="mb-4">
              Privacy Policy
            </FluidText>
            <FluidText className="text-muted-foreground mb-6">
              Effective Date: 11/3/2025
            </FluidText>
            <FluidText className="text-muted-foreground leading-relaxed">
              NFT Las Vegas™ Distribution Label ("Company," "we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website NFT Las Vegas, use our services, or engage with us in any manner. By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy.
            </FluidText>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 animate-slide-in-up animate-delay-200">
            
            {/* Information We Collect */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                1. Information We Collect
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several types of information from and about users of our website and services, including:
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <FluidText weight="semibold" className="mb-2">A. Personal Information</FluidText>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>Business name and details</li>
                    <li>Payment and billing information (processed securely by third-party providers)</li>
                  </ul>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">B. Non-Personal Information</FluidText>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Browser type and version</li>
                    <li>IP address</li>
                    <li>Device type and operating system</li>
                    <li>Referral source (how you arrived at our website)</li>
                    <li>Website interactions and usage data</li>
                    <li>Cookies and tracking technology data</li>
                  </ul>
                </div>
                <div>
                  <FluidText weight="semibold" className="mb-2">C. Information from Third Parties</FluidText>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Social media interactions if you connect via platforms such as LinkedIn, Twitter, or Facebook</li>
                    <li>Third-party analytics tools and marketing partners</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                2. How We Use Your Information
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground leading-relaxed">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve user experience and optimize website performance</li>
                <li>Personalize and tailor marketing and advertising efforts</li>
                <li>Process transactions and send necessary communications</li>
                <li>Respond to inquiries, support requests, and customer service needs</li>
                <li>Enforce our Terms & Conditions and protect against fraudulent activities</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                3. Sharing Your Information
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell or rent your personal information. However, we may share it under the following circumstances:
              </p>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p><strong>With Service Providers:</strong> We work with third-party vendors to assist with payment processing, analytics, marketing, hosting, and other operational functions.</p>
                <p><strong>For Legal Compliance:</strong> If required by law, we may disclose information to government authorities or legal parties.</p>
                <p><strong>In Business Transfers:</strong> If we undergo a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</p>
                <p><strong>With Your Consent:</strong> We may share your information when you provide explicit consent to do so.</p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                4. Data Security
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                5. Cookies & Tracking Technologies
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use cookies, pixels, and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground leading-relaxed">
                <li>Analyze website traffic and user behavior</li>
                <li>Personalize your experience on our website</li>
                <li>Deliver targeted advertisements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings. Note that disabling cookies may impact certain features of our website.
              </p>
            </section>

            {/* Your Rights & Choices */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                6. Your Rights & Choices
              </FluidText>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground leading-relaxed">
                <li>Access, correct, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to data processing</li>
                <li>Withdraw consent where applicable</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at [Insert Contact Email]. We will respond in accordance with applicable laws.
              </p>
            </section>

            {/* Third-Party Links & Services */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                7. Third-Party Links & Services
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                8. Children's Privacy
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from them. If we learn that we have collected information from a child, we will take immediate steps to delete it.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                9. International Data Transfers
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                If you are accessing our services from outside the United States, please be aware that your data may be transferred, stored, and processed in the United States, where data protection laws may differ from those in your country.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section>
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                10. Changes to This Privacy Policy
              </FluidText>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy regularly.
              </p>
            </section>

            {/* Contact Us */}
            <section className="border-t border-border pt-8">
              <FluidText as="h2" size="2xl" weight="semibold" className="mb-4">
                11. Contact Us
              </FluidText>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p>If you have any questions about this Privacy Policy or your personal information, you can contact us at:</p>
                <div className="mt-4">
                  <p className="font-semibold text-foreground">NFT Las Vegas™ Distribution Label</p>
                  <p>7429 Royal Crystal St. Las Vegas, NV 89149</p>
                </div>
                <p className="mt-6 font-semibold text-foreground">
                  Thank you for trusting NFT Las Vegas™ with your digital marketing and technology solutions needs!
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

export default PrivacyPolicy;
