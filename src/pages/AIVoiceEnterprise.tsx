import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft, Building2 } from 'lucide-react';
import { SEOHead } from '@/components/SEO/SEOHead';

const AIVoiceEnterprise = () => {
  const included = [
    "Full enterprise deployment planning",
    "Custom governance & compliance frameworks",
    "Multi-team orchestration & routing",
    "Advanced security & data retention policies",
    "Unlimited revisions during setup",
    "Dedicated technical account manager",
    "White-glove onboarding & training",
    "Custom SLAs & support agreements",
    "Ongoing strategic consulting"
  ];

  return (
    <>
      <SEOHead
        title="Enterprise Plan - AI Voice System | NFT Las Vegas™"
        description="Custom enterprise AI Voice Agent deployment with full governance, compliance, and dedicated support."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/ai-voice">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Plans
              </Link>
            </Button>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                Enterprise Plan
              </div>
              <h1 className="text-5xl font-bold mb-4">Custom Pricing</h1>
              <p className="text-xl text-muted-foreground">Tailored to your organization's needs</p>
            </div>

            <Card className="mb-12 border-primary/40">
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-12 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Ideal For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  • Fortune 500 companies with complex requirements
                </p>
                <p className="text-muted-foreground">
                  • Organizations requiring HIPAA, SOC 2, or custom compliance
                </p>
                <p className="text-muted-foreground">
                  • Multi-department or global deployments
                </p>
                <p className="text-muted-foreground">
                  • Very high volume (10,000+ calls/month)
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-lg p-8 mb-12 border border-primary/30">
              <h3 className="text-2xl font-bold mb-6">Enterprise Advantages</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Custom Governance</h4>
                  <p className="text-muted-foreground">
                    Build compliance frameworks that match your industry standards—healthcare, finance, government, or custom requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Dedicated Account Management</h4>
                  <p className="text-muted-foreground">
                    A technical account manager who understands your business, coordinates vendors, and ensures seamless execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Unlimited Scale</h4>
                  <p className="text-muted-foreground">
                    Whether you're handling 10,000 or 100,000 calls per month, we architect for your growth trajectory.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Strategic Consulting</h4>
                  <p className="text-muted-foreground">
                    Beyond setup—ongoing strategy sessions to optimize ROI, identify new use cases, and drive continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Let's Discuss Your Requirements</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise deployments are unique. Fill out the form below and we'll schedule a consultation to understand your needs and build a custom proposal.
              </p>
              <div className="bg-background border border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">[HubSpot Enterprise Form Embed Placeholder]</p>
                <p className="text-xs text-muted-foreground">
                  Form will capture: Name, Email, Company, Title, Call volume estimate, Compliance requirements, Timeline
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ai-voice">Compare Other Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIVoiceEnterprise;
