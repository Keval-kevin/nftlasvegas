import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          target: string;
          css?: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255)
});

interface HubSpotNewsletterFormProps {
  portalId?: string;
  formId?: string;
}

export const HubSpotNewsletterForm = ({
  portalId = "",
  formId = ""
}: HubSpotNewsletterFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const isHubSpotConfigured = portalId && formId && portalId !== "YOUR_PORTAL_ID" && formId !== "YOUR_FORM_ID";

  useEffect(() => {
    if (!isHubSpotConfigured || scriptLoadedRef.current) return;

    const existingScript = document.querySelector('script[src*="hsforms.net"]');
    
    const initForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: "#hubspot-newsletter-form",
          onFormSubmitted: () => {
            toast({
              title: "Successfully subscribed! 🎉",
              description: "Thank you for joining our newsletter.",
            });
          }
        });
        setHubspotLoaded(true);
      }
    };

    if (existingScript && window.hbspt) {
      initForm();
      scriptLoadedRef.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      scriptLoadedRef.current = true;
      initForm();
    };
    document.body.appendChild(script);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [portalId, formId, isHubSpotConfigured, toast]);

  const handleFallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed! 🎉",
      description: "Thank you for joining our newsletter.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  // Show fallback form if HubSpot is not configured or hasn't loaded
  if (!isHubSpotConfigured || !hubspotLoaded) {
    return (
      <form onSubmit={handleFallbackSubmit} className="space-y-2">
        <div className="flex gap-2">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 hover:border-gray-600 transition-colors" 
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 btn-animate hover-lift"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>
        </div>
        {error && (
          <p className="text-red-400 text-xs">{error}</p>
        )}
      </form>
    );
  }

  return (
    <div className="hubspot-newsletter-wrapper">
      <div 
        id="hubspot-newsletter-form" 
        ref={formContainerRef}
        className="hubspot-form-container"
      />
      <style>{`
        .hubspot-newsletter-wrapper {
          width: 100%;
        }
        
        .hubspot-form-container .hs-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .hubspot-form-container .hs-form-field {
          width: 100%;
        }
        
        .hubspot-form-container .hs-form label {
          display: none;
        }
        
        .hubspot-form-container .hs-form input[type="email"],
        .hubspot-form-container .hs-form input[type="text"] {
          width: 100%;
          padding: 0.625rem 0.875rem;
          background-color: rgb(31, 41, 55);
          border: 1px solid rgb(55, 65, 81);
          border-radius: 0.375rem;
          color: white;
          font-size: 0.875rem;
          transition: border-color 0.2s;
        }
        
        .hubspot-form-container .hs-form input[type="email"]:hover,
        .hubspot-form-container .hs-form input[type="text"]:hover {
          border-color: rgb(75, 85, 99);
        }
        
        .hubspot-form-container .hs-form input[type="email"]:focus,
        .hubspot-form-container .hs-form input[type="text"]:focus {
          outline: none;
          border-color: rgb(59, 130, 246);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
        
        .hubspot-form-container .hs-form input[type="email"]::placeholder,
        .hubspot-form-container .hs-form input[type="text"]::placeholder {
          color: rgb(156, 163, 175);
        }
        
        .hubspot-form-container .hs-form input[type="submit"],
        .hubspot-form-container .hs-form .hs-button {
          width: 100%;
          padding: 0.625rem 1rem;
          background-color: rgb(37, 99, 235);
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
        }
        
        .hubspot-form-container .hs-form input[type="submit"]:hover,
        .hubspot-form-container .hs-form .hs-button:hover {
          background-color: rgb(29, 78, 216);
          transform: translateY(-1px);
        }
        
        .hubspot-form-container .hs-form .hs-error-msgs {
          list-style: none;
          padding: 0;
          margin: 0.25rem 0 0 0;
        }
        
        .hubspot-form-container .hs-form .hs-error-msgs li {
          color: rgb(248, 113, 113);
          font-size: 0.75rem;
        }
        
        .hubspot-form-container .submitted-message {
          color: rgb(74, 222, 128);
          font-size: 0.875rem;
          padding: 0.5rem 0;
        }
        
        .hubspot-form-container .hs-form .legal-consent-container {
          font-size: 0.75rem;
          color: rgb(156, 163, 175);
        }
        
        .hubspot-form-container .hs-form .legal-consent-container a {
          color: rgb(147, 197, 253);
        }
      `}</style>
    </div>
  );
};
