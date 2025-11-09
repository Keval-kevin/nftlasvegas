import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Award, ExternalLink } from "lucide-react";

const Takeover = () => {
  const sponsorBenefits = [
    "Be recognized alongside Coinbase-backed initiatives like Stand With Crypto",
    "Be promoted in NFT Las Vegas™ initiatives and affiliate events throughout the year",
    "Connect with academic institutions, student orgs, and influential blockchain builders",
    "Gain brand exposure across flyers, banners, digital content, merchandise, giveaways, and speaking opportunities depending on your tier",
    "Support the registration and continuous development of UNLV NFT as a 501(c)(3) nonprofit, fueling youth-led Web3 education and innovation in Nevada"
  ];

  return (
    <>
      <SEOHead
        title="Web3 Wednesdays - NFT Las Vegas™ | Blockchain Meetup Series"
        description="Monthly blockchain-powered meetup series in Las Vegas. Connect with Web3 leaders, builders, students, and investors every first Wednesday."
        keywords="Web3 Wednesdays, blockchain meetup, NFT Las Vegas, Web3 events, crypto community, Stand With Crypto"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://static.wixstatic.com/media/916fb2_4180662d58b648e9a0cfed7893a444f6f000.jpg/v1/fill/w_1200,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/916fb2_4180662d58b648e9a0cfed7893a444f6f000.jpg"
                alt="Web3 Wednesdays Event"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Every First Wednesday</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Web3 Wednesdays
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                  Powered by NFT Las Vegas™
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A monthly blockchain-powered meetup series spotlighting innovation, education, and strategic relationships in Las Vegas
                </p>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-primary/20 mb-12">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Web3 Wednesdays is a monthly blockchain-powered meetup series hosted by NFT Las Vegas™ in partnership with{" "}
                    <a href="https://www.meetup.com/vegas-crypto-group/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Vegas Crypto Group
                    </a>{" "}
                    and{" "}
                    <a href="https://standwithcrypto.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Stand With Crypto
                    </a>
                    , grassroots movements backed by Coinbase. Held every first Wednesday of the month, this event is designed to spotlight innovation, drive education, and cultivate strategic relationships in the heart of Las Vegas' rapidly growing tech scene.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With a dedicated community of +30 monthly attendees and growing, and an extended newsletter reach of over 250 engaged Web3 leaders, builders, students, and investors, Web3 Wednesdays brings together entrepreneurs, developers, and forward-thinking organizations for high-impact conversation and collaboration. Our RSVP list is the home of +2,100 registrants who are eager to find the next trusted local gathering to bring various forms of value to.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Each event features live speakers, startup demos, and curated networking opportunities that connect sponsors with emerging talent, institutional stakeholders, and next-gen consumer communities. Our events are marketed across Meetup, Luma, Eventbrite, Instagram, and Discord, reaching thousands of viewers and attendees regionally and nationwide.
                  </p>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-primary/20 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6">
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">Monthly</div>
                    <div className="text-sm text-muted-foreground">First Wednesday</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-secondary/20 hover:border-secondary transition-colors duration-300">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Monthly Attendees</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">250+</div>
                    <div className="text-sm text-muted-foreground">Newsletter Reach</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-primary/20 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6">
                    <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">2,100+</div>
                    <div className="text-sm text-muted-foreground">RSVP List</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Sponsor Section */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Sponsor?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Sponsoring Web3 Wednesdays means more than visibility — it means meaningful engagement
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {sponsorBenefits.map((benefit, idx) => (
                  <Card key={idx} className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground mb-2">
                    Whether you're a startup accelerator, VC firm, DAO, or leading tech company —
                  </p>
                  <p className="text-xl font-semibold mb-6">
                    Web3 Wednesdays is your gateway to visibility, partnership, and trusted impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Become a Sponsor
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in empowering the Web3 community in Las Vegas. Connect with innovators, support education, and showcase your brand to the next generation of builders.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full">
                <a href="https://www.nftlasvegas.io/_files/ugd/916fb2_1a0aed501ae248ada6d39ae5fa08cac2.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Sponsorship Application
                </a>
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Takeover;
