import { Hero } from "../components/Hero.jsx";
import { ShopByCategory } from "../components/ShopByCategory.jsx";
import { BestSellers } from "../components/BestSellers.jsx";
import { Testimonials } from "../components/Testimonials.jsx";

export function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <BestSellers />
      <Testimonials />
    </>
  );
}