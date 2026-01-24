import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Loader2 } from 'lucide-react';
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

const aiVoiceFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  company: z.string().trim().max(100).optional(),
  preferredPlan: z.string().optional(),
  message: z.string().trim().max(500).optional(),
});

type AIVoiceFormData = z.infer<typeof aiVoiceFormSchema>;

interface AIVoiceRequestFormProps {
  portalId?: string;
  formId?: string;
}

export const AIVoiceRequestForm = ({
  portalId = "",
  formId = ""
}: AIVoiceRequestFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof AIVoiceFormData, string>>>({});
  const [formData, setFormData] = useState<AIVoiceFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    preferredPlan: '',
    message: '',
  });
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
          target: "#hubspot-ai-voice-form",
          onFormSubmitted: () => {
            toast({
              title: "Request Submitted! 📞",
              description: "Our AI Voice Assistant will call you soon.",
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

  const handleInputChange = (field: keyof AIVoiceFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = aiVoiceFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof AIVoiceFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof AIVoiceFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Track GA4 event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ai_voice_request_submit', {
        event_category: 'lead',
        preferred_plan: formData.preferredPlan || 'not_specified',
      });
    }
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted! 📞",
      description: "Our AI Voice Assistant will call you soon.",
    });
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      preferredPlan: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  // Show fallback form if HubSpot is not configured or hasn't loaded
  if (!isHubSpotConfigured || !hubspotLoaded) {
    return (
      <form onSubmit={handleFallbackSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              type="text" 
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              disabled={isSubmitting}
            />
            {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <Input 
              type="text" 
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              disabled={isSubmitting}
            />
            {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              type="email" 
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <Input 
              type="tel" 
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            type="text" 
            placeholder="Company (optional)"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            disabled={isSubmitting}
          />
          <Select 
            value={formData.preferredPlan} 
            onValueChange={(value) => handleInputChange('preferredPlan', value)}
            disabled={isSubmitting}
          >
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue placeholder="Preferred Plan (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="starter">Starter - $2,500</SelectItem>
              <SelectItem value="professional">Professional - $5,000</SelectItem>
              <SelectItem value="advanced">Advanced - $10,000</SelectItem>
              <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Textarea 
          placeholder="Tell us about your use case (optional)"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
          disabled={isSubmitting}
        />

        <Button 
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4" />
              Request AI Call
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className="hubspot-ai-voice-wrapper">
      <div 
        id="hubspot-ai-voice-form" 
        ref={formContainerRef}
        className="hubspot-form-container"
      />
      <style>{`
        .hubspot-ai-voice-wrapper {
          width: 100%;
        }
        
        .hubspot-form-container .hs-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .hubspot-form-container .hs-form-field {
          width: 100%;
        }
        
        .hubspot-form-container .hs-form label {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground));
        }
        
        .hubspot-form-container .hs-form input[type="email"],
        .hubspot-form-container .hs-form input[type="text"],
        .hubspot-form-container .hs-form input[type="tel"],
        .hubspot-form-container .hs-form textarea,
        .hubspot-form-container .hs-form select {
          width: 100%;
          padding: 0.625rem 0.875rem;
          background-color: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 0.375rem;
          color: hsl(var(--foreground));
          font-size: 0.875rem;
          transition: border-color 0.2s;
        }
        
        .hubspot-form-container .hs-form input:hover,
        .hubspot-form-container .hs-form textarea:hover,
        .hubspot-form-container .hs-form select:hover {
          border-color: hsl(var(--primary) / 0.5);
        }
        
        .hubspot-form-container .hs-form input:focus,
        .hubspot-form-container .hs-form textarea:focus,
        .hubspot-form-container .hs-form select:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 2px hsl(var(--primary) / 0.2);
        }
        
        .hubspot-form-container .hs-form input::placeholder,
        .hubspot-form-container .hs-form textarea::placeholder {
          color: hsl(var(--muted-foreground));
        }
        
        .hubspot-form-container .hs-form input[type="submit"],
        .hubspot-form-container .hs-form .hs-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
        }
        
        .hubspot-form-container .hs-form input[type="submit"]:hover,
        .hubspot-form-container .hs-form .hs-button:hover {
          background-color: hsl(var(--primary) / 0.9);
          transform: translateY(-1px);
        }
        
        .hubspot-form-container .hs-form .hs-error-msgs {
          list-style: none;
          padding: 0;
          margin: 0.25rem 0 0 0;
        }
        
        .hubspot-form-container .hs-form .hs-error-msgs li {
          color: hsl(var(--destructive));
          font-size: 0.75rem;
        }
        
        .hubspot-form-container .submitted-message {
          color: hsl(142 76% 36%);
          font-size: 0.875rem;
          padding: 1rem;
          text-align: center;
        }
        
        .hubspot-form-container .hs-form .legal-consent-container {
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground));
        }
        
        .hubspot-form-container .hs-form .legal-consent-container a {
          color: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
};
