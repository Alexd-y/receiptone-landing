import Header from "@/components/Header";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";
import TalkToSales from "@/components/TalkToSales";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Sections />
      <Footer />
      <TalkToSales />
    </main>
  );
}
