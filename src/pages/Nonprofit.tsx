import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, GraduationCap, Lightbulb, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Nonprofit = () => {
  return (
    <>
      <SEOHead
        title="Non Profit - NFT Las Vegas™ | Community & Philanthropy"
        description="Supporting Web3 education, youth innovation, and community development through UNLV NFT and grassroots initiatives."
        keywords="nonprofit, community, philanthropy, UNLV NFT, Web3 education, youth programs"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Community & Philanthropy
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Empowering the next generation of Web3 innovators through education, mentorship, and community-driven initiatives
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    NFT Las Vegas™ is committed to building sustainable, community-driven ecosystems that empower individuals and organizations to thrive in the Web3 era.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Through our nonprofit initiatives, we focus on education, mentorship, and creating pathways for underrepresented communities to participate in the digital economy.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in the power of decentralized technology to create more equitable, transparent, and inclusive systems for all.
                  </p>
                </div>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      UNLV NFT Initiative
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We're actively working to register UNLV NFT as a 501(c)(3) nonprofit organization, dedicated to fueling youth-led Web3 education and innovation in Nevada.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This initiative brings together students, faculty, and industry leaders to create real-world learning opportunities in blockchain technology, digital art, and decentralized systems.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Programs Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-secondary/20 hover:border-secondary transition-colors duration-300">
                  <CardHeader>
                    <Users className="h-8 w-8 text-secondary mb-3" />
                    <CardTitle>Community Building</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Creating spaces for Web3 enthusiasts, builders, and learners to connect, collaborate, and grow together through regular meetups and events.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-accent mb-3" />
                    <CardTitle>Student Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Providing scholarships, mentorship, and hands-on project opportunities for students interested in blockchain, NFTs, and Web3 technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <Lightbulb className="h-8 w-8 text-primary mb-3" />
                    <CardTitle>Innovation Labs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Supporting early-stage Web3 projects and startups with resources, guidance, and connections to help bring innovative ideas to life.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Youth & Student Programs */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Youth & Student Initiatives</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Empowering the next generation of Web3 leaders through education, mentorship, and real-world experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Web3 Education Workshops</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Regular workshops and training sessions covering blockchain fundamentals, smart contract development, NFT creation, and decentralized applications.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Hands-on coding sessions with industry professionals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Introduction to blockchain technology and cryptocurrency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>NFT creation and digital art workshops</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Student Mentorship Program</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Connecting students with experienced Web3 professionals for one-on-one guidance, career advice, and project support.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Personalized career guidance and networking opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Technical skill development and project reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Access to industry events and conferences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Partner with Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Support Web3 education and innovation in Nevada. Whether through sponsorship, mentorship, or collaboration, there are many ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full">
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/takeover">
                    Support Web3 Wednesdays
                  </Link>
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

export default Nonprofit;
