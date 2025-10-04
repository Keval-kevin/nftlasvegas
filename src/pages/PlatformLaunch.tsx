import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Rocket, Target, Megaphone, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "GTM Strategy",
    description: "Comprehensive go-to-market planning aligned with your business goals and target audience.",
    deliverables: [
      "Market positioning & messaging",
      "Launch timeline & milestones",
      "Channel strategy & mix",
      "Competitive analysis"
    ],
    color: "from-primary to-primary-glow"
  },
  {
    icon: Megaphone,
    title: "Marketing Operations",
    description: "Set up and optimize marketing automation, CRM, and campaign management systems.",
    deliverables: [
      "Marketing automation setup",
      "CRM configuration & workflows",
      "Email campaign management",
      "Social media strategy"
    ],
    color: "from-secondary to-accent"
  },
  {
    icon: BarChart3,
    title: "Analytics & Attribution",
    description: "Implement tracking, reporting, and attribution to measure and optimize performance.",
    deliverables: [
      "Analytics implementation",
      "Dashboard creation",
      "Attribution modeling",
      "Performance reporting"
    ],
    color: "from-accent to-secondary"
  },
  {
    icon: Users,
    title: "Content & Community",
    description: "Create engaging content and build community momentum around your launch.",
    deliverables: [
      "Content strategy & creation",
      "Social media management",
      "Community building",
      "Influencer partnerships"
    ],
    color: "from-primary to-secondary"
  }
];

const launchPhases = [
  {
    phase: "Pre-Launch",
    duration: "4-8 weeks",
    activities: [
      "Market research & positioning",
      "Landing page & waitlist",
      "Beta testing program",
      "Press kit & materials"
    ]
  },
  {
    phase: "Launch Week",
    duration: "7 days",
    activities: [
      "Coordinated announcements",
      "PR & media outreach",
      "Influencer activations",
      "Paid media campaigns"
    ]
  },
  {
    phase: "Post-Launch",
    duration: "4-12 weeks",
    activities: [
      "Performance monitoring",
      "Campaign optimization",
      "Customer onboarding",
      "Feedback collection"
    ]
  },
  {
    phase: "Scale",
    duration: "Ongoing",
    activities: [
      "Growth experiments",
      "Market expansion",
      "Partnership development",
      "Product iterations"
    ]
  }
];

const PlatformLaunch = () => {
  return (
    <>
      <SEOHead
        title="Platform Launch - NFT Las Vegas™"
        description="Go-to-market strategy, marketing operations, and analytics. Launch your platform with confidence and momentum."
        keywords="GTM strategy, product launch, marketing operations, analytics, platform launch"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                  <Rocket className="w-4 h-4 animate-bounce-subtle" />
                  Platform Launch
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Launch with <span className="text-gradient">Maximum Impact</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  Strategic go-to-market execution combining marketing operations, analytics, 
                  and content to ensure your platform reaches the right audience at the right time.
                </p>

                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Plan My Launch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Video Placeholder */}
              <div className="relative max-w-5xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-muted to-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-muted-foreground">Launch Strategy Overview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Launch <span className="text-gradient">Services</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive support to make your launch successful
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Launch Phases */}
          <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Launch <span className="text-gradient">Timeline</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A phased approach to ensure maximum impact and sustainable growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {launchPhases.map((phase, index) => (
                  <div 
                    key={phase.phase}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{phase.phase}</h3>
                    <p className="text-sm text-primary mb-4 font-medium">{phase.duration}</p>

                    <div className="space-y-2">
                      {phase.activities.map((activity) => (
                        <div key={activity} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Launch Your Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a go-to-market strategy that generates momentum and drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-lg px-10 py-6"
                  >
                    Schedule Launch Planning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/50 hover:border-primary text-lg px-10 py-6"
                  >
                    View Launch Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PlatformLaunch;
