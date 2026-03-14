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
      <section id="hero">
        <Hero />
      </section>
      <section id="difference">
        <Differentions />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Cta />
      </section>
      <Footer />
    </main>
  );
}
