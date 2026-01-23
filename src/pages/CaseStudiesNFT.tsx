import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { ArrowRight, Quote, Target, Lightbulb, TrendingUp as TrendingUpIcon, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    slug: "enthralla",
    title: "Enthralla, Inc.",
    client: "Enthralla, Inc.",
    industry: "EdTech",
    blurb: "End-to-end venture architecture for a next-generation early learning platform.",
    logo: "/case-studies/enthralla-logo.jpg",
    tags: ["App Development", "Web Development", "Go-To-Market"],
    challenge: "Enthralla, Inc. was building Subitize, an early-learning application grounded in cognitive research and designed to strengthen toddlers' foundational number sense. The founder—a seasoned educator with deep pedagogical expertise—needed full operational support to bring the platform to market: CRM infrastructure, strategic marketing, social presence, advertising architecture, and ongoing guidance through a complex launch cycle. With limited technical background and a product rooted in nuanced developmental theory, the venture required a partner capable of bridging vision and execution at every level.",
    approach: "NFT Las Vegas™ designed and executed a multi-phase launch strategy, beginning with a full HubSpot CRM buildout tailored to the founder's workflow. We established brand presence across Meta, Google, TikTok, and LinkedIn, while architecting a scalable ad funnel to support user acquisition and investor visibility.\n\nIn parallel, we provided hands-on guidance—translating complex marketing systems into clear actions the founder could own. Weekly working sessions ensured alignment, minimized friction, and delivered forward momentum on tight timelines.",
    results: [
      "Executed HubSpot CRM Kickoff & Strategic Kickstart Package",
      "Established presence across all major advertising & social platforms",
      "Developed a working relationship with the founder and his family for ongoing support",
      "Designed an AI-backed marketing ecosystem for long-term growth"
    ],
    testimonial: {
      text: "The team at NFT Las Vegas has been a miracle. I've worked with many firms in my career, but none have combined deep technical skills with this level of care and clarity. It's not just a service — it's a true partnership.",
      author: "Muir Matteson",
      position: "Founder of Enthralla, Inc."
    },
    servicesUsed: ["HubSpot CRM Onboarding", "Paid Social Setup", "Creative Strategy", "Founder Enablement", "Platform Architecture", "Go-To-Market Planning"]
  }
];

const CaseStudiesNFT = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <>
      <SEOHead
        title="Case Studies - Real Client Success Stories"
        description="See how NFT Las Vegas has helped brands like Enthralla achieve their goals through strategic content, CRM onboarding, and digital transformation."
        keywords="case studies, client success stories, Enthralla, EdTech, early learning, HubSpot onboarding"
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
          <div className="max-w-2xl mx-auto mb-16">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="bg-white rounded-lg p-6 mb-4 inline-flex items-center justify-center w-full h-[120px] shadow-sm">
                    <img 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.title} logo`}
                      className="h-20 sm:h-24 w-auto object-contain"
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
                          window.location.href = '/contact';
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
                    <div className="bg-white rounded-lg p-3 flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center shadow-sm">
                      <img 
                        src={selectedCase.logo} 
                        alt={`${selectedCase.title} logo`}
                        className="h-14 sm:h-16 w-auto object-contain"
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

                {/* Our Role */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Our Role
                  </h3>
                  {selectedCase.approach.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
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
                  <h4 className="font-semibold mb-3">Services & Capabilities</h4>
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
                    onClick={() => window.location.href = '/contact'}
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
