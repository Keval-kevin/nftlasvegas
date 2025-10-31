import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { X, ArrowRight, Quote, Target, Lightbulb, TrendingUp as TrendingUpIcon, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    slug: "amilo-halos",
    title: "Amilo Halos",
    client: "Amilo Halos",
    industry: "Early Learning",
    blurb: "Family-led early learning brand building trust for a toddler education app through authentic storytelling.",
    logo: "/case-studies/amilo-halos-logo.jpg",
    tags: ["Early Learning", "Content Production", "Testimonial Campaign"],
    challenge: "Amilo Halos, a family-led brand focused on early childhood learning and emotional bonding, sought a way to build trust and visibility for their upcoming toddler education app. The brand needed to bridge real-life use cases with authentic testimonials to introduce their platform in a compelling and credible way.",
    approach: "NFT Las Vegas™ designed and directed a custom testimonial shoot featuring the founding family using the app in their day-to-day life. We crafted a talent agreement that allowed the family to represent themselves while promoting the brand authentically. The shoot included guided interviews, product interaction, and social content that aligned with their mission.",
    results: [
      "Full campaign content produced for launch",
      "Talent signed under a scalable pricing structure",
      "Positioned Amilo Halos as a brand with real users and heartfelt storytelling",
      "Ongoing partnership with plans for additional media sessions"
    ],
    testimonial: {
      text: "We're so grateful to be working with a team that really understands the mission behind Amilo Halos. The shoot felt genuine, and it helped bring our vision to life with care and precision.",
      author: "Chaymarie Tyana Bailey",
      position: "Co-Founder of Amilo Halos"
    },
    servicesUsed: ["Content Strategy", "Live-Action Production", "Talent Agreements", "Social Assets"]
  },
  {
    id: 2,
    slug: "enthralla",
    title: "Enthralla, Inc.",
    client: "Enthralla, Inc.",
    industry: "EdTech",
    blurb: "Toddler education app launch with full CRM onboarding, cross-channel setup, and founder enablement.",
    logo: "/case-studies/enthralla-logo.jpg",
    tags: ["EdTech", "HubSpot", "GTM", "Paid Social"],
    challenge: "Enthralla, Inc. was preparing to launch an early-learning education app designed for toddlers, based on breakthrough cognitive insights like subitizing. The founder needed full-service CRM onboarding, digital strategy, social setup, and a launch campaign — all while supporting an older founder with limited tech background.",
    approach: "NFT Las Vegas™ created a multi-phase onboarding plan for Enthralla, including custom HubSpot CRM setup, strategic ad campaign design, and platform training. We also managed social media identity creation across Meta, Google, TikTok, and more — guiding the founder through every step with care and precision.",
    results: [
      "Executed HubSpot CRM Kickoff & Strategic Kickstart Package",
      "Established presence across all major ad & social platforms",
      "Developed a working relationship with the founder and his son for ongoing support",
      "Designed an AI-backed marketing ecosystem for long-term growth"
    ],
    testimonial: {
      text: "The team at NFT Las Vegas has been a godsend. I've worked with many firms in my career, but none have combined deep technical skills with this level of care and clarity. It's not just a service — it's a partnership.",
      author: "Muir Matteson",
      position: "Founder of Enthralla, Inc."
    },
    servicesUsed: ["HubSpot Onboarding", "Paid Social Setup", "Creative Strategy", "Founder Enablement"]
  }
];


const CaseStudiesNFT = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <>
      <SEOHead
        title="Case Studies - Real Client Success Stories"
        description="See how NFT Las Vegas has helped brands like Amilo Halos and Enthralla achieve their goals through strategic content, CRM onboarding, and digital transformation."
        keywords="case studies, client success stories, Amilo Halos, Enthralla, EdTech, early learning, HubSpot onboarding"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "NFT Las Vegas Case Studies",
          "description": "Real client success stories from NFT Las Vegas",
          "hasPart": caseStudies.map(cs => ({
            "@type": "CreativeWork",
            "name": cs.title,
            "description": cs.blurb,
            "author": {
              "@type": "Organization",
              "name": "NFT Las Vegas"
            }
          }))
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Real projects. Real results. See how we've helped brands build trust, launch platforms, and scale with precision.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                <div className="bg-white rounded-lg p-4 mb-4 inline-flex items-center justify-center w-[200px] h-[64px] shadow-sm">
                    <img 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.title} logo`}
                      className="h-12 sm:h-14 w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                    />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    {caseStudy.blurb}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={() => setSelectedCase(caseStudy)}
                        className="flex-1"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = '/contact#book-demo';
                        }}
                        className="flex-1"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mini CTA */}
          <div className="max-w-2xl mx-auto text-center p-8 bg-muted/30 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Ready to Build Your Success Story?</h3>
            <p className="text-muted-foreground mb-6">Download our Onboarding Package to get started</p>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/#starter-pack'}
            >
              Download Onboarding Package
            </Button>
          </div>
        </main>

        <Footer />

        {/* Case Study Detail Modal */}
        <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
          <DialogContent className="max-w-[820px] max-h-[90vh] overflow-y-auto">
            {selectedCase && (
              <div className="space-y-8">
                {/* Sticky Header */}
                <DialogHeader className="sticky top-0 bg-background pb-4 border-b z-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-lg p-3 flex-shrink-0 w-[180px] h-[56px] flex items-center justify-center shadow-sm">
                      <img 
                        src={selectedCase.logo} 
                        alt={`${selectedCase.title} logo`}
                        className="h-10 sm:h-12 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.src = '/placeholder.svg'; }}
                      />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl md:text-3xl">{selectedCase.title}</DialogTitle>
                      <p className="text-muted-foreground text-sm mt-1">{selectedCase.industry}</p>
                    </div>
                  </div>
                </DialogHeader>

                {/* The Challenge */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                {/* Our Approach */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Our Approach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.approach}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <TrendingUpIcon className="w-5 h-5 text-primary" />
                    Results
                  </h3>
                  <ul className="space-y-3">
                    {selectedCase.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <blockquote className="text-lg italic mb-4 leading-relaxed" cite={selectedCase.testimonial.author}>
                        "{selectedCase.testimonial.text}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {selectedCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{selectedCase.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{selectedCase.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Used */}
                <div>
                  <h4 className="font-semibold mb-3">Services Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.servicesUsed.map(service => (
                      <Badge key={service} variant="outline" className="text-sm">{service}</Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t bg-muted/30 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">Ready to Start Your Journey?</h4>
                  <p className="text-muted-foreground mb-4">Let's build something amazing together</p>
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/contact#book-demo'}
                  >
                    Book a Discovery Call
                  </Button>
                </div>

                <div className="pt-4 flex gap-4 justify-end">
                  <Button onClick={() => setSelectedCase(null)} variant="outline">
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CaseStudiesNFT;
