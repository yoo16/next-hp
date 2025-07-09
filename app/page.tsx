import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Access />
      <Footer />
    </main>
  );
}
