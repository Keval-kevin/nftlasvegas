import { BookDetailPage } from "@/components/BookDetailPage";

const BookNobelPeace = () => {
  return (
    <BookDetailPage
      title="A Nobel Peace Prize for Dummies"
      description="A Nobel Peace Prize for Dummies reframes peace, technology, and collective intelligence for a rapidly evolving world. This book simplifies complex concepts—quantum entanglement, decentralized systems, collaborative AI—and demonstrates how they can be applied to build self-reliant, empowered communities. At its core, this work presents a bold idea: that technology, when designed with intention, can amplify cooperation, creativity, and global harmony."
      whatYoullUnlock={[
        "Accessible explanations of quantum and AI concepts",
        "New frameworks for peace and community design",
        "Insight into decentralized collaboration",
        "Imagination as a driver of societal innovation"
      ]}
      whoThisBookIsFor={[
        "Changemakers and community builders",
        "Technologists with a humanitarian lens",
        "Educators and futurists",
        "Readers interested in ethical innovation"
      ]}
      coverImage="/books/nobel-peace-cover.jpg"
      checkoutUrl="https://portal.nftlasvegas.io/hs/payments/HY7WrGZHzR?referrer=PAYMENT_LINK"
      metaDescription="Rearchitecting global impact and recognition in the decentralized age of acceleration. Explore peace, technology, and collective intelligence."
    />
  );
};

export default BookNobelPeace;
