import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          target: string;
          css?: string;
        }) => void;
      };
    };
  }
}

interface HubSpotNewsletterFormProps {
  portalId?: string;
  formId?: string;
}

export const HubSpotNewsletterForm = ({
  portalId = "YOUR_PORTAL_ID",
  formId = "YOUR_FORM_ID"
}: HubSpotNewsletterFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const existingScript = document.querySelector('script[src*="hsforms.net"]');
    
    const initForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          portalId,
          formId,
          target: "#hubspot-newsletter-form"
        });
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
      // Cleanup form container on unmount
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [portalId, formId]);

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
