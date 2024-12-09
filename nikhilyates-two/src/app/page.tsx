import LandingPage from "./landing/LandingPage";
import Experience from "@/components/sections/experience/page";
import About from "@/app/about/page";
import { ContactForm } from "@/app/contact/page"
import Portfolio from "@/app/portfolio/page"

export default function Home() {
  return (
    <div className="w-100vw overflow-hidden">
      <LandingPage />
      <About />
      <Experience />
      <Portfolio />
      <ContactForm />
    </div>
  );
}
