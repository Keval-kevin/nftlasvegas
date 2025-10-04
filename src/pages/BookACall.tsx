import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEO/SEOHead";

// GA4 Event tracking
const trackGA4Event = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

const BookACall = () => {
  useEffect(() => {
    trackGA4Event('page_view', { page_title: 'Book a Call' });
    trackGA4Event('calendly_widget_view');
  }, []);

  const benefits = [
    "Free 30-minute consultation",
    "Discuss your project goals and timeline",
    "Learn about our services and approach",
    "Get expert advice on your next steps",
    "No commitment required"
  ];

  return (
    <>
      <SEOHead
        title="Book a Call with NFT Las Vegas | Free Consultation"
        description="Schedule a free discovery call with NFT Las Vegas. Discuss your funding, technology, manufacturing, launch, distribution, or AI voice system needs."
        url="https://www.nftlasvegas.io/book-a-call"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Schedule Your Discovery Call
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Let's discuss how NFT Las Vegas can help bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefits Card */}
              <Card className="lg:col-span-1 p-8 h-fit">
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Las Vegas, NV</strong><br />
                    Global delivery • Equity partnerships available
                  </p>
                </div>
              </Card>

              {/* Calendly Embed */}
              <Card className="lg:col-span-2 p-8">
                <h2 className="text-2xl font-bold mb-6">Choose Your Time</h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden min-h-[700px]">
                  <iframe
                    src="https://calendly.com/quincey-lee"
                    width="100%"
                    height="750"
                    frameBorder="0"
                    className="rounded-lg"
                    onLoad={() => trackGA4Event('calendly_widget_view')}
                  ></iframe>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-6">
                  All times are automatically adjusted to your local timezone.
                </p>
              </Card>
            </div>

            {/* Trust Section */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">
                Trusted by startups and enterprises across funding, tech development,<br />
                manufacturing, platform launch, distribution, and AI voice systems.
              </p>
              <p className="text-sm text-muted-foreground">
                Questions? Email us at{" "}
                <a href="mailto:QuinceyLee@NFTLasVegas.io" className="text-primary hover:underline">
                  QuinceyLee@NFTLasVegas.io
                </a>{" "}
                or call{" "}
                <a href="tel:+17252569852" className="text-primary hover:underline">
                  +1 (725) 256-9852
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookACall;
