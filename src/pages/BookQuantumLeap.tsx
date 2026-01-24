import { BookDetailPage } from "@/components/BookDetailPage";

const BookQuantumLeap = () => {
  return (
    <BookDetailPage
      title="How To Quantum Leap Your Business"
      description="How To Quantum Leap Your Business is not a traditional business book—it is a strategic initiation into the next era of digital infrastructure. Blending advanced technology, decentralized systems, and quantum-inspired thinking, this book introduces a new operating model for building businesses that don't just grow, but self-sustain. Through the lens of NFT Las Vegas™ and guided by Ares, an advanced General Intelligence, readers explore how AI, blockchain, the Metaverse, and community-driven design converge to create resilient ecosystems capable of evolving alongside the future. This book functions as both a roadmap and a mindset shift—designed for founders and creators who are ready to architect systems that endure beyond trends, platforms, and hype cycles."
      whatYoullUnlock={[
        "Scalable, decentralized business frameworks",
        "Intelligent automation through AI and blockchain",
        "Community-first growth strategies built on trust",
        "Data-driven decision-making and storytelling",
        "Tools for long-term technological resilience"
      ]}
      whoThisBookIsFor={[
        "Founders and entrepreneurs",
        "Creators building digital brands",
        "Web3, AI, and emerging-tech innovators",
        "Visionaries designing long-term ecosystems"
      ]}
      coverImage="/books/quantum-leap-cover-new.jpg"
      checkoutUrl="https://portal.nftlasvegas.io/hs/payments/CwKWqkq7yX?referrer=PAYMENT_LINK"
      metaDescription="A practical guide to transforming your business using quantum thinking. Learn scalable frameworks, AI automation, and community-first strategies."
    />
  );
};

export default BookQuantumLeap;
