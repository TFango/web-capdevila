import Cta from "@/components/cta";
import Differentions from "@/components/differentiators";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Differentions />
      <Services />
      <Gallery />
      <Cta />
      <Footer />
    </main>
  );
}
