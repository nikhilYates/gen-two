import LandingPage from "./landing/LandingPage";
import Experience from "@/components/sections/experience/page";

export default function Home() {
  return (
    <div className="w-100vw overflow-hidden">
      <LandingPage />
      <Experience />
    </div>
  );
}
