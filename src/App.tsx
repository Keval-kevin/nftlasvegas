
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import { GoogleAnalytics } from "@/components/Analytics/GoogleAnalytics";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { ResponsiveTestingHelper } from "@/components/ResponsiveTestingHelper";
import IndexNFT from "./pages/IndexNFT";
import Onboarding from "./pages/Onboarding";
import AboutNFT from "./pages/AboutNFT";
import Multiverse from "./pages/Multiverse";
import Nonprofit from "./pages/Nonprofit";
import Takeover from "./pages/Takeover";
import Bookstore from "./pages/Bookstore";
import SolutionsNFT from "./pages/SolutionsNFT";
import ServicesNFT from "./pages/ServicesNFT";
import FundingEnablement from "./pages/FundingEnablement";
import TechDevelopmentNFT from "./pages/TechDevelopmentNFT";
import ProductManufacturing from "./pages/ProductManufacturing";
import PlatformLaunch from "./pages/PlatformLaunch";
import DistributionNFT from "./pages/DistributionNFT";
import CaseStudiesNFT from "./pages/CaseStudiesNFT";
import Contact from "./pages/Contact";
import BookACall from "./pages/BookACall";
import AIVoice from "./pages/AIVoice";
import AIVoiceStarter from "./pages/AIVoiceStarter";
import AIVoiceProfessional from "./pages/AIVoiceProfessional";
import AIVoiceAdvanced from "./pages/AIVoiceAdvanced";
import AIVoiceEnterprise from "./pages/AIVoiceEnterprise";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider delayDuration={300} skipDelayDuration={100}>
          <Toaster />
          <ScrollToTop />
          <PerformanceMonitor />
          <ResponsiveTestingHelper />
          <GoogleAnalytics 
            measurementId="G-7NVLMVTXGD" 
            facebookPixelId="XXXXXXXXXX"
            linkedInPartnerId="XXXXXXX"
          />
          <Routes>
            <Route path="/" element={<IndexNFT />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/about" element={<AboutNFT />} />
            <Route path="/multiverse" element={<Multiverse />} />
            <Route path="/nonprofit" element={<Nonprofit />} />
            <Route path="/takeover" element={<Takeover />} />
            <Route path="/bookstore" element={<Bookstore />} />
            <Route path="/solutions" element={<SolutionsNFT />} />
            <Route path="/services" element={<ServicesNFT />} />
            <Route path="/funding-enablement" element={<FundingEnablement />} />
            <Route path="/tech-development" element={<TechDevelopmentNFT />} />
            <Route path="/product-manufacturing" element={<ProductManufacturing />} />
            <Route path="/platform-launch" element={<PlatformLaunch />} />
            <Route path="/distribution" element={<DistributionNFT />} />
            <Route path="/case-studies" element={<CaseStudiesNFT />} />
            <Route path="/ai-voice" element={<AIVoice />} />
            <Route path="/ai-voice/starter" element={<AIVoiceStarter />} />
            <Route path="/ai-voice/professional" element={<AIVoiceProfessional />} />
            <Route path="/ai-voice/advanced" element={<AIVoiceAdvanced />} />
            <Route path="/ai-voice/enterprise" element={<AIVoiceEnterprise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-call" element={<BookACall />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
