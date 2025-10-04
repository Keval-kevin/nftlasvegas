import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft, Star } from 'lucide-react';
import { SEOHead } from '@/components/SEO/SEOHead';

const AIVoiceProfessional = () => {
  const included = [
    "Complex call flow design with branching logic",
    "Guided onboarding & scripting workshop",
    "Re-attempt no-answer automation",
    "Calendar booking integration (Zoom/Teams/Google)",
    "CRM integration (HubSpot or Salesforce)",
    "Baseline monitoring & reporting dashboard",
    "Up to 3 revisions",
    "1-week post-launch monitoring"
  ];

  return (
    <>
      <SEOHead
        title="Professional Plan - AI Voice System | NFT Las Vegas™"
        description="Advanced AI Voice Agent setup with complex flows, calendar booking, and monitoring for $5,000."
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Professional Plan
              </div>
              <h1 className="text-5xl font-bold mb-4">$5,000</h1>
              <p className="text-xl text-muted-foreground">One-time setup fee</p>
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
                  • Sales teams qualifying and booking demos
                </p>
                <p className="text-muted-foreground">
                  • Multi-step flows with conditional logic
                </p>
                <p className="text-muted-foreground">
                  • Integration with existing calendar systems
                </p>
                <p className="text-muted-foreground">
                  • Medium volume (500–2,000 calls/month)
                </p>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the intake form below and we'll schedule your discovery call within 24 hours.
              </p>
              <div className="bg-background border border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">[HubSpot Form Embed Placeholder]</p>
                <p className="text-xs text-muted-foreground">
                  Form will capture: Name, Email, Company, CRM type, Calendar platform, Desired features
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Book Discovery Call</Link>
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

export default AIVoiceProfessional;
