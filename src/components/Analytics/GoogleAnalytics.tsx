
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _linkedin_partner_id: string;
    lintrk: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId?: string;
  facebookPixelId?: string;
  linkedInPartnerId?: string;
}

export const GoogleAnalytics = ({ 
  measurementId = "G-7NVLMVTXGD", // Updated with your actual GA4 Measurement ID
  facebookPixelId = "XXXXXXXXXX", // Replace with actual Facebook Pixel ID
  linkedInPartnerId = "XXXXXXX" // Replace with actual LinkedIn Partner ID
}: GoogleAnalyticsProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics 4
    if (measurementId && measurementId !== "G-XXXXXXXXXX") {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      `;
      document.head.appendChild(script2);
    }

    // Initialize Facebook Pixel
    if (facebookPixelId && facebookPixelId !== "XXXXXXXXXX") {
      const script3 = document.createElement('script');
      script3.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script3);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1" />`;
      document.head.appendChild(noscript);
    }

    // Initialize LinkedIn Insight Tag
    if (linkedInPartnerId && linkedInPartnerId !== "XXXXXXX") {
      const script4 = document.createElement('script');
      script4.innerHTML = `
        _linkedin_partner_id = "${linkedInPartnerId}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `;
      document.head.appendChild(script4);

      const script5 = document.createElement('script');
      script5.async = true;
      script5.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      document.head.appendChild(script5);

      const noscript2 = document.createElement('noscript');
      noscript2.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif" />`;
      document.head.appendChild(noscript2);
    }
  }, [measurementId, facebookPixelId, linkedInPartnerId]);

  // Track page views on route changes
  useEffect(() => {
    if (window.gtag && measurementId !== "G-XXXXXXXXXX") {
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }

    if (window.fbq && facebookPixelId !== "XXXXXXXXXX") {
      window.fbq('track', 'PageView');
    }

    if (window.lintrk && linkedInPartnerId !== "XXXXXXX") {
      window.lintrk('track', { conversion_id: 'pageview' });
    }
  }, [location, measurementId, facebookPixelId, linkedInPartnerId]);

  return null;
};

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: object) => {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackConversion = (conversionName: string, value?: number) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionName,
      value: value
    });
  }
  if (window.fbq) {
    window.fbq('track', 'Purchase', { value: value, currency: 'USD' });
  }
};
