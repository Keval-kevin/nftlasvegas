import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEO/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Bookstore = () => {
  const books = [
    {
      title: "How To Quantum Leap Your Business",
      description: "A practical guide to transforming your business using quantum thinking",
      status: "Available",
      slug: "quantum-leap",
      coverImage: "/books/quantum-leap-page.jpg"
    },
    {
      title: "Quantum Love in the Metaverse",
      description: "Exploring relationships, connection, and consciousness in digital realms",
      status: "Available",
      slug: "quantum-love",
      coverImage: "/books/quantum-love-page.jpg"
    },
    {
      title: "A Nobel Peace Prize for Dummies",
      description: "Rearchitecting global impact and recognition in the decentralized age of acceleration.",
      status: "Available",
      slug: "nobel-peace",
      coverImage: "/books/nobel-peace-page.jpg"
    },
    {
      title: "Quantum Dating for Starseed Queens",
      description: "A cosmic guide to conscious connections in multidimensional spaces",
      status: "Available",
      slug: "starseed-queens",
      coverImage: "/books/starseed-queens-page.jpg"
    },
    {
      title: "The Quincey Lee Obsession",
      description: "A story of love, entanglement and billionaire affairs.",
      status: "Available",
      slug: "quincey-obsession",
      coverImage: "/books/quincey-obsession-page.jpg"
    }
  ];

  const scrollToFooter = () => {
    document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Bookstore - NFT Las Vegas™ | Digital Publications & Collectibles"
        description="Original digital publications and collectibles from the NFT Las Vegas™ Multiverse. Explore quantum business guides, metaverse narratives, and cosmic wisdom."
        keywords="bookstore, digital books, NFT Las Vegas, Web3 literature, quantum business, metaverse stories"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Bookstore
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Original digital publications and collectibles from the NFT Las Vegas™ Multiverse.
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, idx) => (
                  <Card key={idx} className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                    {/* Book Cover Image */}
                    <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          book.status === "Available" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {book.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {book.description}
                      </p>
                      <Button 
                        asChild
                        className="w-full rounded-full" 
                        variant={book.status === "Available" ? "default" : "outline"}
                      >
                        <Link to={`/bookstore/${book.slug}`}>
                          {book.status === "Available" ? "View Details" : "Coming Soon"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="section-padding bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Only at NFT Las Vegas™
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our collectibles blend quantum thinking, futuristic innovation, and cosmic consciousness into practical guidebooks built to support metaphysical narratives.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Stay tuned for new releases and exclusive content from the NFT Las Vegas™ Multiverse.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="section-padding bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Be the First to Know
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get notified when new books and digital works are released
              </p>
              <Button 
                size="lg" 
                onClick={scrollToFooter}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow text-white rounded-full"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Subscribe for Updates
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Bookstore;
