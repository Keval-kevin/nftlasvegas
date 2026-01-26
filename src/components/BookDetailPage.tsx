import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface BookDetailPageProps {
  title: string;
  description: string;
  whatYoullUnlock: string[];
  whoThisBookIsFor: string[];
  coverImage: string;
  checkoutUrl: string;
  metaDescription: string;
}

export const BookDetailPage = ({
  title,
  description,
  whatYoullUnlock,
  whoThisBookIsFor,
  coverImage,
  checkoutUrl,
  metaDescription,
}: BookDetailPageProps) => {
  return (
    <>
      <SEOHead
        title={`${title} | NFT Las Vegas™ Bookstore`}
        description={metaDescription}
        keywords={`${title}, NFT Las Vegas, quantum thinking, digital books, Web3`}
      />
      <Header />
      <main className="min-h-dvh bg-background pt-20">
        {/* Back to Bookstore */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
          <Link 
            to="/bookstore" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bookstore
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Book Cover */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={coverImage}
                    alt={`${title} book cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="space-y-8">
                {/* Quantum Certified Badge */}
                <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Quantum Certified Technology
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* CTA Button */}
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full px-8 py-6 text-lg"
                >
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Purchase Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Unlock Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Unlock</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatYoullUnlock.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border"
                >
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who This Book Is For Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who This Book Is For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoThisBookIsFor.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20"
                >
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Certified Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-900/20 to-purple-900/20">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-violet-400" />
            <h2 className="text-2xl font-bold mb-4">Quantum Certified Technology</h2>
            <p className="text-muted-foreground mb-8">
              This book is Quantum Certified, verifying its alignment with NFT Las Vegas™ proprietary frameworks, 
              future-ready systems thinking, and next-generation technology integration.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white"
            >
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Get Your Copy
              </a>
            </Button>
          </div>
        </section>

        {/* Back to Bookstore CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/bookstore" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Explore More Books
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
