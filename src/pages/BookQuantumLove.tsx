import { BookDetailPage } from "@/components/BookDetailPage";

const BookQuantumLove = () => {
  return (
    <BookDetailPage
      title="Quantum Love in the Metaverse"
      description="Quantum Love in the Metaverse explores love, identity, and desire through digital worlds, overlapping timelines, and infinite realities. Blending speculative romance with futuristic imagination, this book examines how connection evolves when avatars replace bodies, algorithms influence attraction, and identity becomes fluid across dimensions. Playful yet philosophical, this story invites readers into a Metaverse where emotion, technology, and imagination intertwine—and where love transcends form."
      whatYoullUnlock={[
        "A new lens on love through quantum metaphors",
        "Exploration of avatars, identity, and attraction",
        "Romantic world-building rooted in digital culture",
        "Creative inspiration across sci-fi and fantasy themes"
      ]}
      whoThisBookIsFor={[
        "Dreamers and romantics",
        "Creators and storytellers",
        "Metaverse and sci-fi enthusiasts",
        "Readers curious about love beyond physical boundaries"
      ]}
      coverImage="/books/quantum-love-cover.jpg"
      checkoutUrl="https://portal.nftlasvegas.io/hs/payments/hJJR2gDrTNRJhf?referrer=PAYMENT_LINK"
      metaDescription="Explore love, identity, and desire through digital worlds and infinite realities in this speculative romance from the NFT Las Vegas™ Multiverse."
    />
  );
};

export default BookQuantumLove;
