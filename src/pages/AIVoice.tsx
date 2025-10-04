import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Phone, Calendar, Brain, BarChart3, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEO/SEOHead';

const AIVoice = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const features = [
    { icon: <MessageSquare className="w-6 h-6" />, title: "CRM-native", desc: "Instant logging, lists, and routing." },
    { icon: <Calendar className="w-6 h-6" />, title: "Calendar-smart", desc: "Auto-book meetings and re-attempt no-answers." },
    { icon: <Zap className="w-6 h-6" />, title: "Human handoff", desc: "Seamless transfer when intent or sentiment requires it." },
    { icon: <Brain className="w-6 h-6" />, title: "Memory & analysis", desc: "Context carryover, intent recognition, post-call insights." },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      url: "/ai-voice/starter",
      features: ["Simple flow", "Basic KB", "CRM integration", "Foundation setup"]
    },
    {
      name: "Professional",
      price: "$5,000",
      url: "/ai-voice/professional",
      features: ["Complex flows", "Guided onboarding", "Re-attempt no answer", "Calendar booking", "Baseline monitoring/reports"]
    },
    {
      name: "Advanced",
      price: "$10,000",
      url: "/ai-voice/advanced",
      features: ["Complex flows + memory", "Intent routing", "Post-call analysis", "2-week optimization", "Advanced dashboard"],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      url: "/ai-voice/enterprise",
      features: ["Full enterprise deployment", "Custom governance", "Unlimited scale", "Dedicated support"]
    }
  ];

  const addOns = [
    { name: "Extra AI agents", price: "$2,000/agent" },
    { name: "Multilingual support", price: "$500/language" },
    { name: "Custom TTS", price: "$3,500+" },
    { name: "Webhooks (Stripe, etc.)", price: "$1,500/integration" },
    { name: "Other CRMs/ERPs", price: "$2,500+" }
  ];

  const supportPlans = [
    { name: "Basic", price: "$750/mo", minutes: "500", hours: "10" },
    { name: "Standard", price: "$2,000/mo", minutes: "2,000", hours: "15" },
    { name: "Premium", price: "$4,000/mo", minutes: "5,000", hours: "20" },
    { name: "Elite", price: "Custom", minutes: "10,000+", hours: "25+" }
  ];

  const faqs = [
    { q: "How is data retained?", a: "All conversation data is encrypted and stored per your compliance requirements (HIPAA, SOC 2, etc.)." },
    { q: "What languages are supported?", a: "English by default. Add Spanish, French, Mandarin, and 20+ others via multilingual add-on." },
    { q: "How does human handoff work?", a: "Based on intent, sentiment, or explicit keywords, the agent transfers to your team with full context." },
    { q: "What are the SLAs?", a: "Response times and uptime guarantees scale with your monthly support plan." }
  ];

  return (
    <>
      <SEOHead
        title="AI Voice Agents - NFT Las Vegas™"
        description="AI Voice Agents that book meetings, qualify leads, and reduce costs. From simple call flows to memory-based conversations—fully integrated with your CRM."
        keywords="AI voice agents, CRM integration, lead qualification, automated calls, voice AI"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              AI Voice System
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              AI Voice Agents that Book, Qualify, and Learn.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From simple call flows to memory-aware conversations—fully integrated with your CRM and calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">Start with a Discovery Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href="#plans">Compare Plans</a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Design the flow", desc: "We map your scripts, intents, and handoffs." },
                { step: "02", title: "Connect your stack", desc: "HubSpot/Salesforce + Zoom/Teams/Google + telephony." },
                { step: "03", title: "Launch & optimize", desc: "Monitor, fine-tune, and scale minutes with clear dashboards." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Pillars */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Teams Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, i) => (
                <Card key={i} className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {feat.icon}
                    </div>
                    <CardTitle className="text-lg">{feat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section id="plans" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Setup Plans</h2>
            <p className="text-center text-muted-foreground mb-16">One-time investment to get your AI Voice Agent live</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, i) => (
                <Card 
                  key={i} 
                  className={`relative ${plan.featured ? 'border-primary shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]' : ''} hover:shadow-lg transition-all`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary mt-2">{plan.price}</div>
                    <CardDescription>One-time setup</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                      <Link to={plan.url}>
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Add-ons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-lg bg-background border border-border">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Support */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Monthly Support</h2>
            <p className="text-center text-muted-foreground mb-16">Ongoing maintenance, optimization, and minutes included</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportPlans.map((plan, i) => (
                <Card key={i} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">{plan.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Minutes</span>
                      <span className="font-semibold">{plan.minutes}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Support Hours</span>
                      <span className="font-semibold">{plan.hours}</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">Overage pricing and SLAs apply</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Telephony & PM */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Telephony Options</h3>
              <p className="text-muted-foreground mb-4">
                Twilio/Telnyx numbers, verified number options, or SIP config for your existing number.
              </p>
              <p className="text-sm text-muted-foreground">
                Note: Carrier and LLM usage is billed by providers (pass-through).
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Project Management (25%)</h3>
              <p className="text-muted-foreground mb-4">
                Dedicated oversight, vendor coordination, milestones, and GTM alignment.
              </p>
              <p className="text-sm text-muted-foreground">
                Your outsourced innovation team managing end-to-end delivery.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to launch your AI Voice Agent?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a discovery call or compare plans to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href="#plans">Compare Plans</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIVoice;
