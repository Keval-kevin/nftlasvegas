import { useState, useEffect } from 'react';
import { Download, FileText, Calendar, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const StarterPackDownload = () => {
  const [open, setOpen] = useState(false);
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const unlocked = localStorage.getItem('nftlv_pack_unlocked') === '1';
      setHasUnlocked(unlocked);
    }
  }, []);

  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }
  };

  const startDownload = () => {
    trackEvent('starter_pack_download', {
      pack_version: 'v1.0',
      download_method: hasUnlocked ? 'direct' : 'gated'
    });
    
    const link = document.getElementById('dl-pack') as HTMLAnchorElement;
    if (link) {
      link.click();
      toast({
        title: "Download Started",
        description: "Your Starter Pack is downloading now.",
      });
    }
  };

  const handleDownloadClick = () => {
    if (hasUnlocked) {
      startDownload();
    } else {
      setOpen(true);
      trackEvent('starter_pack_modal_open');
    }
  };

  const handleSubmitSuccess = (email?: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nftlv_pack_unlocked', '1');
    }
    setHasUnlocked(true);
    trackEvent('starter_pack_lead', { email });
    startDownload();
    setOpen(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleSkipGate = () => {
    setOpen(false);
    startDownload();
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
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NFT Las Vegas™ Starter Pack
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Version 1.0 • Complete Onboarding Bundle</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <FileText className="w-4 h-4 text-primary" />
              <span>Comprehensive Onboarding Guide PDF</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>AI Voice System Kickoff Checklist</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>90-Day Strategic Plan Template</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Starter Pack
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Book a Discovery Call</a>
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
                Get Your Starter Pack
              </h4>
              <p className="text-muted-foreground">
                Enter your email to receive the complete onboarding bundle and exclusive templates.
              </p>
            </div>

            {/* Simple Email Form (HubSpot can be integrated here) */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                
                // Simple validation
                if (email && email.includes('@')) {
                  handleSubmitSuccess(email);
                } else {
                  toast({
                    title: "Invalid Email",
                    description: "Please enter a valid email address.",
                    variant: "destructive"
                  });
                }
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <Button type="submit" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Get Starter Pack
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
              <h5 className="font-semibold mb-1">Download Started!</h5>
              <p className="text-sm text-muted-foreground mb-3">
                Your Starter Pack is downloading. Check your downloads folder.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="/downloads/NFT Las Vegas — Onboarding Guide v1.0.pdf" target="_blank" rel="noopener">
                    <FileText className="w-3 h-3 mr-1" />
                    Open Guide
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="/contact">
                    <Calendar className="w-3 h-3 mr-1" />
                    Book Call
                  </a>
                </Button>
              </div>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="p-1 rounded hover:bg-muted transition-colors"
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
          Download Starter Pack
        </Button>
      </div>
    </>
  );
};
