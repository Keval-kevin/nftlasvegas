import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Download, Calendar, Zap, TrendingUp, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const optionalAddOns = [
  { name: "Agentforce Setup", price: "$7,500", description: "One-time setup (up to 25 hours) for AI agents and integrations." },
  { name: "Configure Price & Quote (CPQ)", price: "$12,000", description: "One-time CPQ implementation (up to 40 hours)." },
  { name: "Sales Engagement Setup", price: "$7,500", description: "One-time configuration (up to 25 hours) of cadences, sequences, and engagement tools." },
  { name: "Salesforce Maps", price: "$12,000", description: "One-time setup (up to 40 hours) for territory and route mapping." }
];

export const SalesforceCRM = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
            <Building2 className="w-4 h-4" />
            Salesforce Implementation
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Salesforce CRM <span className="text-gradient">Onboarding & Implementation</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Launch, optimize, and scale your Salesforce stack with done-for-you implementations tailored 
            for SMBs and growth-stage teams. We handle configuration, automation, and training so your 
            team can focus on selling—not setup.
          </p>
        </div>

        <Tabs defaultValue="sales-cloud" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="sales-cloud" className="text-base">Sales Cloud Quick Implementations</TabsTrigger>
            <TabsTrigger value="starter-pro" className="text-base">Starter & Pro Suite Services</TabsTrigger>
          </TabsList>

          {/* Sales Cloud Quick Implementations */}
          <TabsContent value="sales-cloud" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Quick Start Plan */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                      Best for fast SMB rollout
                    </span>
                  </div>
                  <CardTitle className="text-2xl">Sales Cloud Quick Start</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    From $12,500 • 40 hours • 2–4 weeks
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    For fast-moving teams that need Salesforce Sales Cloud up and running quickly with best-practice configuration.
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <h4 className="font-semibold text-foreground mb-3">What's included</h4>
                  <ul className="space-y-2">
                    {[
                      "Project initiation, discovery, and planning",
                      "Core CRM setup: Leads, Accounts, Contacts, Opportunities & Activities",
                      "Data migration for up to 10K records",
                      "Gmail/Outlook integration",
                      "Light customization: Up to 20 custom fields/org, 1 page layout per object, up to 2 custom reports, 1 list view per object, 1 email template, 1 Flow for automation",
                      "Sharing, Chatter, and Salesforce1 setup",
                      "1 dashboard",
                      "Custom logo",
                      "Training & support: 1 hr end-user training + 1 hr support (first month)",
                      "Implementation success review (one 30-minute session)"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Discovery Call
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>

              {/* Growth Plan */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-glow flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-white">
                  POPULAR
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                      Best for scaling teams
                    </span>
                  </div>
                  <CardTitle className="text-2xl">Sales Cloud Growth Plan</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    From $30,000 • 100 hours • 4–6 weeks
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    For teams ready to roll out deeper automation, forecasting, and more complex processes across the org.
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <h4 className="font-semibold text-foreground mb-3">What's included</h4>
                  <p className="text-sm text-primary font-medium">Everything in the Quick Start, plus:</p>
                  <ul className="space-y-2">
                    {[
                      "Data migration for up to 50K records",
                      "Enhanced customization: Up to 50 custom fields/org, up to 4 custom reports, 2 list views per object, 3 email templates, up to 2 Flows, 1 custom profile, up to 3 custom objects",
                      "Complex process automations & forecasting",
                      "Custom logo and theme",
                      "Products & Standard Price Book configuration + quote management",
                      "Up to 2 dashboards",
                      "Training & support: 3 hrs end-user training + 3 hrs support (first month)",
                      "Implementation success review (two 30-minute sessions)"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Discovery Call
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Optional Add-Ons */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Optional Add-Ons</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {optionalAddOns.map((addon) => (
                  <Card key={addon.name} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{addon.name}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">{addon.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">{addon.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Additional work beyond included hours is billed at <span className="font-semibold text-foreground">$200/hour</span>.
              </p>
            </div>
          </TabsContent>

          {/* Starter & Pro Suite Services */}
          <TabsContent value="starter-pro" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Starter Suite */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-accent/20 text-accent rounded-full">
                      ~25% savings
                    </span>
                  </div>
                  <CardTitle className="text-2xl">Salesforce Starter Suite Onboarding</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    $7,500 • 15 hours • 2–4 weeks
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    A focused onboarding for teams just starting with the Salesforce Starter Suite—get Sales, Service, and Marketing aligned in one place.
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Sales setup</h4>
                    <ul className="space-y-2">
                      {[
                        "Kickoff & alignment call + best-practice guidance",
                        "Configure Accounts, Contacts, Leads, Opportunities",
                        "User setup & permissions",
                        "Gmail/Outlook integration",
                        "Task management & Activity feed",
                        "Configure Salesforce Meetings & calendar",
                        "Customize reports & dashboards (up to 5 reports)"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Service + Marketing</h4>
                    <ul className="space-y-2">
                      {[
                        "Integrated email support & case management",
                        "Knowledge base setup",
                        "Email campaigns & smart segmentation",
                        "Email templates (up to 2 service + 2 marketing emails)",
                        "Campaign analytics"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Enhanced capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Social sign-on",
                        "Guided onboarding & training",
                        "Up to 15 custom fields"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Discovery Call
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Suite */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-glow flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-white">
                  BEST VALUE
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-accent/20 text-accent rounded-full">
                      ~35% savings
                    </span>
                  </div>
                  <CardTitle className="text-2xl">Salesforce Pro Suite Implementation</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    $12,500 • 40 hours • 3–6 weeks
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    For growing teams that need a more advanced, automated Starter/Pro Suite deployment with deeper customization and service capabilities.
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Sales setup (everything in Starter, plus)</h4>
                    <ul className="space-y-2">
                      {[
                        "More advanced reporting (up to 10 reports)",
                        "Setup Quote creation & management",
                        "Forecast management"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Service + Marketing (enhanced)</h4>
                    <ul className="space-y-2">
                      {[
                        "Additional email templates (up to 5 service + 5 marketing emails total)",
                        "Macros, Omni-Channel routing, and in-app/web messaging"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Enhanced capabilities</h4>
                    <ul className="space-y-2">
                      {[
                        "Social sign-on + guided onboarding",
                        "Up to 25 custom fields",
                        "Up to 3 custom objects",
                        "1 custom app",
                        "2 Flows for process automation"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Discovery Call
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Optional Commerce Setup */}
            <div className="mt-12 max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <AccordionItem value="commerce" className="border-none">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-foreground">Optional Commerce Setup</h3>
                        <p className="text-sm text-muted-foreground">Expand with e-commerce capabilities</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <ul className="space-y-2 mt-4">
                      {[
                        "Storefront design, product & category setup",
                        "Person Accounts, buyer groups, promotions",
                        "Managed checkout, order summaries, insight dashboards",
                        "Commerce markets (1 region in Starter, up to 3 in Pro)",
                        "Search management and Pay Now capabilities"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                      Commerce setup is optional and quoted separately; additional implementation hours billed at <span className="font-semibold text-foreground">$150/hour</span>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
