import { BookDetailPage } from "@/components/BookDetailPage";

const BookQuinceyObsession = () => {
  return (
    <BookDetailPage
      title="The Quincey Lee Obsession"
      description="The Quincey Lee Obsession is a provocative fictional romance where ambition, desire, power, and technology collide. Set against the backdrop of NFTs and innovation culture, this cinematic narrative explores obsession, chemistry, and emotional intensity in a world driven by disruption and creation. Unapologetic and dramatic, the story blurs the line between passion and ambition—where love becomes its own form of rebellion."
      whatYoullUnlock={[
        "A high-energy romantic fiction experience",
        "Exploration of power, creativity, and desire",
        "Tech-adjacent storytelling with emotional depth",
        "A bold, modern romantic mythos"
      ]}
      whoThisBookIsFor={[
        "Fans of provocative romantic fiction",
        "Readers drawn to modern, tech-inspired narratives",
        "Lovers of dramatic storytelling",
        "Those who enjoy bold creative worlds"
      ]}
      coverImage="/books/quincey-obsession-cover.jpg"
      checkoutUrl="https://portal.nftlasvegas.io/hs/payments/2HF7TFv9DDNdCk?referrer=PAYMENT_LINK"
      metaDescription="A story of love, entanglement and billionaire affairs. A provocative fictional romance where ambition, desire, power, and technology collide."
    />
  );
};

export default BookQuinceyObsession;
