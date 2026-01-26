import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft, Crown } from 'lucide-react';
import { SEOHead } from '@/components/SEO/SEOHead';

const AIVoiceAdvanced = () => {
  const included = [
    "Complex call flows + conversation memory",
    "Intent routing & dynamic branching",
    "Post-call analysis & sentiment detection",
    "Advanced CRM integration with custom fields",
    "Calendar booking with smart scheduling",
    "2-week post-launch optimization period",
    "Advanced performance dashboard",
    "Up to 5 revisions",
    "Priority support during setup"
  ];

  return (
    <>
      <SEOHead
        title="Advanced Plan - AI Voice System | NFT Las Vegas™"
        description="Premium AI Voice Agent with memory, intent routing, and post-call analysis for $10,000."
      />
      <div className="min-h-dvh bg-background">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium mb-4">
                <Crown className="w-4 h-4" />
                Advanced Plan - Most Popular
              </div>
              <h1 className="text-5xl font-bold mb-4">$10,000</h1>
              <p className="text-xl text-muted-foreground">One-time setup fee</p>
            </div>

            <Card className="mb-12 border-primary shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)]">
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
                  • Enterprise sales teams with complex qualification criteria
                </p>
                <p className="text-muted-foreground">
                  • Multi-call campaigns requiring conversation continuity
                </p>
                <p className="text-muted-foreground">
                  • Teams needing deep analytics and optimization
                </p>
                <p className="text-muted-foreground">
                  • High volume (2,000–5,000+ calls/month)
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Premium Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Conversation Memory</h4>
                  <p className="text-sm text-muted-foreground">Agents remember past interactions and personalize follow-ups.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Intent Routing</h4>
                  <p className="text-sm text-muted-foreground">Smart routing based on detected customer intent and sentiment.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Post-Call Analysis</h4>
                  <p className="text-sm text-muted-foreground">Automatic transcription, sentiment scoring, and actionable insights.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">2-Week Optimization</h4>
                  <p className="text-sm text-muted-foreground">Dedicated period to refine scripts and improve conversion rates.</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the intake form below and we'll schedule your discovery call within 24 hours.
              </p>
              <div className="bg-background border border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">[HubSpot Form Embed Placeholder]</p>
                <p className="text-xs text-muted-foreground">
                  Form will capture: Name, Email, Company, Current call volume, Key use cases, Integration requirements
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

export default AIVoiceAdvanced;
