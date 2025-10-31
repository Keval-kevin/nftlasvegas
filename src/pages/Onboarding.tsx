import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ClipboardCheck, DollarSign, Code, Box, Rocket, Globe, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { multiDownload } from "@/lib/utils";

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
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Welcome to <span className="text-gradient">NFT Las Vegas™</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Let&apos;s begin your journey from vision to velocity
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
                    asChild
                    className="flex-1 border-2 border-primary/50 hover:border-primary text-lg py-6"
                  >
                    <a href="/downloads/nftlv-starter-pack-v1.0.zip" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Onboarding Guide
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 6-Step Pathway */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The 6-Step <span className="text-gradient">Processing Pathway</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Transform big ideas into scalable realities with strategy, infrastructure, and momentum built into every phase.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Step 1: Onboarding */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <ClipboardCheck className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 1: Onboarding</CardTitle>
                    <CardDescription className="text-base font-semibold">Establish the Foundation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Alignment through vision mapping, needs assessment, and clear roadmap generation.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Project Intake + Vision Mapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Needs Assessment + Timeline Drafting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ecosystem Resource Walkthrough</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 1.0 Access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 2: Funding Enablement */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 2: Funding Enablement</CardTitle>
                    <CardDescription className="text-base font-semibold">Structure Your Path to Capital</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Align your business model with realistic funding sources and deliverables.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Budget Modeling + Cost Breakdown</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Pitch Decks + Grant Templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Revenue Planning + Monetization Logic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 1.0 Continuation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 3: Tech Development */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 3: Tech Development</CardTitle>
                    <CardDescription className="text-base font-semibold">Build Core Infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Build exact infrastructure - websites, apps, AI tools, CRMs, or dashboards.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Platform Architecture Planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>UI/UX Flow Mapping + Feature Prioritization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Web/App/CRM Development Execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 2.0 Access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 4: Product Manufacturing */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Box className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 4: Product Manufacturing</CardTitle>
                    <CardDescription className="text-base font-semibold">Go From Concept to Creation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Coordinate your entire manufacturing journey with global supplier access.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Product Sourcing + MOQ Planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Sample Order Management + Cost Analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>DDP Shipping, Insurance + Inventory Logistics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 2.0 Continuation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 5: Launch Strategy */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 5: Launch Strategy</CardTitle>
                    <CardDescription className="text-base font-semibold">Activate Awareness + Demand</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Design your launch with campaigns, moments, and rollouts that convert.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Go-To-Market Planning + Rollout Schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Influencer Seeding + Campaign Strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Analytics Setup + Conversion Goal Tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 3.0 Access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Step 6: Distribution */}
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Step 6: Distribution</CardTitle>
                    <CardDescription className="text-base font-semibold">Get It Into Their Hands</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Ensure your product or service reaches your audience at sustainable scale.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>E-Commerce Integration + Fulfillment Support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Shipping Insurance + Returns Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Creator + Affiliate Sales Channel Expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Toolkit 3.0 Continuation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Toolkits Section */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  NFT Las Vegas <span className="text-gradient">Toolkits</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Custom frameworks, templates, and checklists to guide your journey
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Toolkit 1.0</CardTitle>
                    <CardDescription>Onboarding + Funding Enablement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Forms, checklists, and frameworks for foundation and capital.</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Toolkit 2.0</CardTitle>
                    <CardDescription>Tech Development + Product Manufacturing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Build frameworks and manufacturing coordination tools.</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">Toolkit 3.0</CardTitle>
                    <CardDescription>Launch + Distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Campaign strategy and distribution channel templates.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="section-padding bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your <span className="text-gradient">Journey</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your vision into a self-running brand backed by proven strategy and infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                  <Link to="/contact">Schedule Discovery Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/downloads/nftlv-starter-pack-v1.0.zip" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Starter Pack
                  </a>
                </Button>
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
