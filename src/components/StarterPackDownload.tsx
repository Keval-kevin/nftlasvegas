import { useState, useEffect } from 'react';
import { Download, FileText, Calendar, CheckCircle, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import nftLogo from '@/assets/nft-logo.jpeg';

export const StarterPackDownload = () => {
  const [open, setOpen] = useState(false);
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unlocked = localStorage.getItem('nftlv_onboarding_gate') === '1';
      setHasUnlocked(unlocked);
    }
  }, []);

  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  };

  const startDownload = () => {
    trackEvent('onboarding_pack_download', {
      pack_version: 'v1.0',
      download_method: hasUnlocked ? 'direct' : 'gated'
    });
    
    const link = document.getElementById('dl-pack') as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  };

  const handleDownloadClick = () => {
    if (hasUnlocked) {
      startDownload();
      toast({
        title: "Download Started",
        description: "Your Onboarding Package is downloading now.",
      });
    } else {
      setOpen(true);
      trackEvent('onboarding_pack_modal_open');
    }
  };

  const sendToHubSpot = async (formData: FormData) => {
    const data = {
      fields: [
        { name: 'firstname', value: formData.get('firstName') },
        { name: 'lastname', value: formData.get('lastName') },
        { name: 'email', value: formData.get('email') },
        { name: 'company', value: formData.get('company') || '' },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      }
    };

    // Replace with actual HubSpot form GUID when available
    const HUBSPOT_PORTAL_ID = 'YOUR_PORTAL_ID';
    const HUBSPOT_FORM_GUID = 'HS_FORM_GUID_ONBOARDING';
    
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      return response.ok;
    } catch (error) {
      console.error('HubSpot submission failed:', error);
      return false;
    }
  };

  const sendEmailWithLinks = async (email: string, name: string) => {
    // Fallback email service using EmailJS
    const templateParams = {
      to_email: email,
      to_name: name,
      download_links: `
        • Onboarding Suite: ${window.location.origin}/downloads/NFT Las Vegas - Onboarding Package.pdf
        • Toolkit 1.0: ${window.location.origin}/downloads/NFT Las Vegas - Toolkit 1.0 Onboarding & Funding Enablement.pdf
        • Toolkit 2.0: ${window.location.origin}/downloads/NFT Las Vegas - Toolkit 2.0 Tech Development & Product Manufacturing.pdf
        • Toolkit 3.0: ${window.location.origin}/downloads/NFT Las Vegas - Toolkit 3.0 Launch Strategy & Distribution.pdf
        • Message from Founder: ${window.location.origin}/downloads/Message from the Founder.pdf
        • Full Starter Pack: ${window.location.origin}/downloads/nftlv-starter-pack-v1.0.zip
      `
    };

    // This would use EmailJS or similar service
    console.log('Email would be sent with:', templateParams);
    return true;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    const honeypot = formData.get('website') as string;
    if (honeypot) {
      console.log('Bot detected');
      return;
    }

    // Validate business email
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    
    if (!email || !email.includes('@') || !firstName || !lastName) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!consentChecked) {
      toast({
        title: "Consent Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Track lead event
      trackEvent('onboarding_pack_lead', {
        email,
        company: formData.get('company') || 'Not provided'
      });

      // Submit to HubSpot
      await sendToHubSpot(formData);

      // Send email with links
      await sendEmailWithLinks(email, firstName);

      // Set localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('nftlv_onboarding_gate', '1');
      }
      
      setHasUnlocked(true);
      startDownload();
      setOpen(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 8000);
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or download directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkipGate = () => {
    setOpen(false);
    startDownload();
    toast({
      title: "Download Started",
      description: "Your Onboarding Package is downloading now.",
    });
  };

  return (
    <>
      {/* Hidden download link */}
      <a
        id="dl-pack"
        href="/downloads/nftlv-starter-pack-v1.0.zip?v=1.0"
        download="NFT-Las-Vegas-Starter-Pack-v1.0.zip"
        rel="noopener"
        className="hidden"
        aria-hidden="true"
      >
        Download
      </a>

      {/* Main Component */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--primary),0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(var(--primary),0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="flex-shrink-0">
              <img 
                src={nftLogo} 
                alt="NFT Las Vegas Logo" 
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NFT Las Vegas™ Onboarding Package
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Complete 6-Step Processing Pathway + Toolkits</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <FileText className="w-4 h-4 text-primary" />
              <span>Onboarding Suite (6-Step Processing Pathway)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Toolkit 1.0 – Onboarding + Funding Enablement</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Toolkit 2.0 – Tech Development + Product Manufacturing</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Toolkit 3.0 – Launch Strategy + Distribution</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>Message from the Founder</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Onboarding Package
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact#book-demo">Book a Discovery Call</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/onboarding">Start Onboarding</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Gate */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-md mx-4 bg-card rounded-2xl shadow-2xl border border-border p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h4 id="modal-title" className="text-2xl font-bold mb-2">
                Get Your Onboarding Package
              </h4>
              <p className="text-muted-foreground text-sm">
                Complete the form to receive the full package plus an email with all download links.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px]"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full mt-1.5 px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full mt-1.5 px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Work Email *</Label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-1.5 px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="you@company.com"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We'll email you the download links
                </p>
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full mt-1.5 px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <Checkbox
                  id="consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer">
                  I agree to be contacted by NFT Las Vegas™ and accept the{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline" target="_blank">
                    Privacy Policy
                  </a>
                  . *
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting || !consentChecked}
              >
                <Download className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Get Onboarding Package'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={handleSkipGate}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Skip & Download Directly
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Banner */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 z-50 w-full max-w-md mx-4 bg-card rounded-xl shadow-2xl border border-primary p-6 animate-slide-in-right">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h5 className="font-semibold mb-1">Success!</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Your download has started. We've also emailed your links to all toolkits and resources.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="/downloads/NFT Las Vegas - Onboarding Package.pdf" target="_blank" rel="noopener">
                    <FileText className="w-3 h-3 mr-1" />
                    View Suite
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="/contact#book-demo">
                    <Calendar className="w-3 h-3 mr-1" />
                    Book Call
                  </a>
                </Button>
              </div>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="p-1 rounded hover:bg-muted transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-card/95 backdrop-blur-lg border-t border-border md:hidden animate-slide-in-right">
        <Button
          onClick={handleDownloadClick}
          className="w-full bg-gradient-to-r from-primary to-secondary"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Onboarding Package
        </Button>
      </div>
    </>
  );
};
