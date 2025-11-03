import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarterPackDownload } from "@/components/StarterPackDownload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Users, Briefcase, Newspaper, HeadphonesIcon, ArrowRight, Upload, CheckCircle2 } from "lucide-react";
import { sendInquiryEmail } from "@/service/sendInquiryEmail";
import { SEOHead } from "@/components/SEO/SEOHead";

// GA4 Event tracking
const trackGA4Event = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    timeline: "",
    message: "",
    monthlyMinutes: "",
    telephony: "",
    crm: "",
    consent: false,
    file: null as File | null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAIVoiceFields, setShowAIVoiceFields] = useState(false);
  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === "interest") {
      setShowAIVoiceFields(value === "AI Voice System");
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 25 * 1024 * 1024) {
      handleInputChange("file", file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track GA4 event
    trackGA4Event('contact_submit', {
      interest: formData.interest,
      budget: formData.budget,
      timeline: formData.timeline
    });
    sendInquiryEmail(formData).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          interest: "",
          budget: "",
          timeline: "",
          message: "",
          monthlyMinutes: "",
          telephony: "",
          crm: "",
          consent: false,
          file: null
        });
      }, 5000);
    }).catch(() => {});
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    trackGA4Event('page_view', {
      page_title: 'Contact'
    });
  }, []);
  const quickContactCards = [{
    icon: Briefcase,
    title: "Sales",
    description: "Funding, Tech, Manufacturing, Launch, Distribution",
    action: () => scrollToSection('contact-form')
  }, {
    icon: Users,
    title: "Partnerships",
    description: "Agencies, vendors, channels",
    action: () => scrollToSection('contact-form')
  }, {
    icon: Newspaper,
    title: "Media/Press",
    description: "Press inquiries and media relations",
    action: () => scrollToSection('contact-form')
  }, {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Technical and customer support",
    action: () => scrollToSection('contact-form')
  }];
  const faqItems = [{
    question: "What are your response times?",
    answer: "We typically respond within 1 business day. For urgent inquiries, please call us directly at +1 (725) 256-9852."
  }, {
    question: "Do you offer NDAs for initial discussions?",
    answer: "Yes, we're happy to sign mutual NDAs before discussing your project details. Simply mention this in your inquiry."
  }, {
    question: "Do you accept equity-based partnerships?",
    answer: "Absolutely. We evaluate equity partnerships for projects that align with our expertise and vision. Contact us to discuss terms."
  }, {
    question: "What CRMs and telephony systems do you support?",
    answer: "We integrate with HubSpot, Salesforce, Twilio, Telnyx, and many other platforms. If you have a specific system, let us know."
  }, {
    question: "How do you handle security and compliance?",
    answer: "We follow industry best practices for data security and can accommodate HIPAA, SOC 2, and other compliance requirements."
  }];
  return <>
      <SEOHead title="Contact NFT Las Vegas | Let's Build What's Next" description="Get in touch with NFT Las Vegas for funding enablement, tech development, product manufacturing, platform launch, distribution, or AI voice systems." url="https://www.nftlasvegas.io/contact" />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Build What's Next
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                Tell us where you're headed—funding, technology, manufacturing, launch, distribution, or AI voice systems—and we'll make it real.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 max-w-2xl mx-auto px-4">
                <Button size="lg" onClick={() => scrollToSection('booking-section')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact-form')}>
                  Send Message
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Las Vegas, NV • Global delivery • Equity-based partnerships available
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickContactCards.map((card, index) => <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-[1.02] bg-card/50 backdrop-blur" onClick={card.action} style={{
              animationDelay: `${index * 80}ms`
            }}>
                  <card.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Dual Path Section */}
        <section id="booking-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendly Embed */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Book a Discovery Call</h2>
                <p className="text-muted-foreground mb-6">Schedule a 30 minutes consultation with our team. We'll discuss your goals and how we can help.</p>
                <div className="bg-gray-50 rounded-lg overflow-hidden min-h-[700px]">
                  <iframe src="https://calendly.com/nftlasvegas" width="100%" height="700" frameBorder="0" onLoad={() => trackGA4Event('calendly_widget_view')}></iframe>
                </div>
              </Card>

              {/* Contact Form */}
              <Card id="contact-form" className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                {isSubmitted ? <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will respond within 1 business day.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We don't sell data. Ever.
                    </p>
                  </div> : <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} required className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" value={formData.company} onChange={e => handleInputChange("company", e.target.value)} required className="w-full" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} className="w-full" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="interest">Interest *</Label>
                        <Select value={formData.interest} onValueChange={value => handleInputChange("interest", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Funding Enablement">Funding Enablement</SelectItem>
                            <SelectItem value="Tech Development">Tech Development</SelectItem>
                            <SelectItem value="Product Manufacturing">Product Manufacturing</SelectItem>
                            <SelectItem value="Platform Launch">Platform Launch</SelectItem>
                            <SelectItem value="Distribution">Distribution</SelectItem>
                            <SelectItem value="AI Voice System">AI Voice System</SelectItem>
                            <SelectItem value="General">General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={value => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<$25k">&lt;$25k</SelectItem>
                            <SelectItem value="$25-75k">$25–75k</SelectItem>
                            <SelectItem value="$75-150k">$75–150k</SelectItem>
                            <SelectItem value="$150-500k">$150–500k</SelectItem>
                            <SelectItem value="$500k+">$500k+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select value={formData.timeline} onValueChange={value => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ASAP (0–30 days)">ASAP (0–30 days)</SelectItem>
                          <SelectItem value="1–3 months">1–3 months</SelectItem>
                          <SelectItem value="3–6 months">3–6 months</SelectItem>
                          <SelectItem value="6+ months">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                     {showAIVoiceFields && <>
                        <div className="space-y-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">AI Voice System Details</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="monthlyMinutes">Estimated Monthly Minutes</Label>
                            <Input id="monthlyMinutes" type="number" value={formData.monthlyMinutes} onChange={e => handleInputChange("monthlyMinutes", e.target.value)} placeholder="e.g., 2000" className="w-full" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telephony">Current Telephony</Label>
                            <Select value={formData.telephony} onValueChange={value => handleInputChange("telephony", value)}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select provider" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Twilio">Twilio</SelectItem>
                                <SelectItem value="Telnyx">Telnyx</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                                <SelectItem value="None">None</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="crm">CRM System</Label>
                            <Select value={formData.crm} onValueChange={value => handleInputChange("crm", value)}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select CRM" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="HubSpot">HubSpot</SelectItem>
                                <SelectItem value="Salesforce">Salesforce</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </>}

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Requirements *</Label>
                      <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} required rows={4} placeholder="Share only what's helpful. You can upload a deck anytime." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="file">Upload File (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                        <input id="file" type="file" accept=".pdf,.pptx,.docx,.zip" onChange={handleFileChange} className="hidden" />
                        <label htmlFor="file" className="cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            {formData.file ? formData.file.name : "Upload deck/specs (PDF, PPTX, DOCX, ZIP - Max 25MB)"}
                          </p>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="consent" checked={formData.consent} onCheckedChange={checked => handleInputChange("consent", checked as boolean)} required />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                        I agree to the Privacy Policy and to be contacted by NFT Las Vegas™. *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" disabled={!formData.consent}>
                      Send Your Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      We don't sell data. Ever.
                    </p>
                  </form>}
              </Card>
            </div>
          </div>
        </section>

        {/* Direct Contact / Office */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          NFT Las Vegas Ltd.<br />
                          7429 Royal Crystal St.<br />
                          Las Vegas, NV 89149
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:QuinceyLee@NFTLasVegas.io" className="text-primary hover:underline">
                          QuinceyLee@NFTLasVegas.io
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+17252569852" className="text-primary hover:underline">
                          +1 (725) 256-9852
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg overflow-hidden h-[400px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8!2d-115.3!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiAxMTXCsDE4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{
                  border: 0,
                  filter: 'grayscale(30%)'
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Starter Pack Download Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <StarterPackDownload />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
            <p className="text-center mt-8 text-sm text-muted-foreground">
              For full terms and privacy information, visit our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure where to start?</h2>
            <p className="text-xl text-muted-foreground mb-8">We'll guide you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('booking-section')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg">
                Book a Call
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = '/onboarding'} className="px-8 py-6 text-lg">
                Start Onboarding
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>;
};
export default Contact;