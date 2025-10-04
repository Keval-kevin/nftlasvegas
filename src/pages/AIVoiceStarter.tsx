import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/SEO/SEOHead';

const AIVoiceStarter = () => {
  const included = [
    "Simple call flow design",
    "Basic knowledge base setup",
    "CRM integration (HubSpot or Salesforce)",
    "Foundation telephony setup",
    "Basic training & handoff",
    "Up to 2 revisions"
  ];

  return (
    <>
      <SEOHead
        title="Starter Plan - AI Voice System | NFT Las Vegas™"
        description="Get started with AI Voice Agents. Simple flow, basic KB, and CRM integration for $2,500 one-time setup."
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
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Starter Plan
              </div>
              <h1 className="text-5xl font-bold mb-4">$2,500</h1>
              <p className="text-xl text-muted-foreground">One-time setup fee</p>
            </div>

            <Card className="mb-12">
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
                  • Teams testing AI voice for the first time
                </p>
                <p className="text-muted-foreground">
                  • Simple lead qualification or appointment booking
                </p>
                <p className="text-muted-foreground">
                  • Fixed scripts with minimal branching
                </p>
                <p className="text-muted-foreground">
                  • Small volume (&lt;500 calls/month)
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
                  Form will capture: Name, Email, Company, Desired start date, Brief description
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

export default AIVoiceStarter;
