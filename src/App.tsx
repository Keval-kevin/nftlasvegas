
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
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import BusinessProcessSolutions from "./pages/BusinessProcessSolutions";
import HealthcareSolutions from "./pages/HealthcareSolutions";
import AIAutomationSolutions from "./pages/AIAutomationSolutions";
import TrendingTechnologiesSolutions from "./pages/TrendingTechnologiesSolutions";
import HealthcareInnovation from "./pages/HealthcareInnovation";
import AIAutomation from "./pages/AIAutomation";
import TrendingTechnologies from "./pages/TrendingTechnologies";
import ProductDevelopment from "./pages/ProductDevelopment";
import HireExperts from "./pages/HireExperts";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import AIHealthcare from "./pages/blog/AIHealthcare";
import ReactDevelopment from "./pages/blog/ReactDevelopment";
import DesignSystems from "./pages/blog/DesignSystems";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
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
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/business-process-solutions" element={<BusinessProcessSolutions />} />
            <Route path="/healthcare-solutions" element={<HealthcareSolutions />} />
            <Route path="/ai-automation-solutions" element={<AIAutomationSolutions />} />
            <Route path="/trending-technologies-solutions" element={<TrendingTechnologiesSolutions />} />
            <Route path="/healthcare-innovation" element={<HealthcareInnovation />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/trending-technologies" element={<TrendingTechnologies />} />
            <Route path="/product-development" element={<ProductDevelopment />} />
            <Route path="/hire-experts" element={<HireExperts />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-healthcare" element={<AIHealthcare />} />
            <Route path="/blog/react-development" element={<ReactDevelopment />} />
            <Route path="/blog/design-systems" element={<DesignSystems />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
