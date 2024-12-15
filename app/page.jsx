'use client'
import EventCatalog from "./components/sections/EventCatalog";
import EventsSection from "./components/sections/EventsSection";
import FAQ from "./components/sections/FAQ";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
  <div className="m-0 p-0 h-fit w-fit bg-custom-red-radial">
    <HeroSection/>
    <EventsSection/>
    <EventCatalog/>
    <FAQ/>
    <footer className="w-full lg:text-xl text-sm text-white flex items-center justify-center p-5 uppercase font-bold text-center">
      Designed by Kreative Eye | Developed by Konnexions
    </footer>
  </div>  
  );
}
