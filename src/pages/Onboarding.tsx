import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <>
      <SEOHead
        title="Onboarding - NFT Las Vegas™"
        description="Start your journey with NFT Las Vegas. Complete our onboarding process to begin your digital transformation."
        keywords="onboarding, get started, consultation, discovery call"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Welcome to <span className="text-gradient">NFT Las Vegas™</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Let's begin your journey from vision to velocity
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Discovery call to understand your vision and goals",
                    "Comprehensive assessment of your current state",
                    "Customized roadmap for your digital transformation",
                    "Introduction to your dedicated team",
                    "Clear timeline and milestone planning"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg py-6"
                  >
                    <Link to="/contact">Schedule Discovery Call</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-2 border-primary/50 hover:border-primary text-lg py-6"
                  >
                    Download Onboarding Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Onboarding;
