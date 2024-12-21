import LandingPage from "./landing/LandingPage";
import Experience from "@/components/sections/experience/page";
import About from "@/app/(app)/about/page";
import { ContactForm } from "@/app/(app)/contact/ContactForm"
import Portfolio from "@/app/(app)/portfolio/page"
import Footer from "@/app/(app)/footer/page"

export default function Home() {
  return (
    <div className="w-100vw overflow-hidden [&::-webkit-scrollbar]:bg-black [&::-webkit-scrollbar-thumb]:bg-black">
      <LandingPage />
      <About />
      <Experience />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}
