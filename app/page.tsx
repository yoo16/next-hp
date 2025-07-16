import Hero from "@/components/Hero";
import Products from "@/components/ProductList";
import About from "@/components/About";
import Access from "@/components/Access";
import Footer from "@/components/Footer";
import Topics from "@/components/Topics";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Topics />
      <Products />
      <Access />
      <Footer />
    </main>
  );
}
