import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import KeyEvents from "./sections/KeyEvents";
import Ceremony from "./sections/Ceremony";
import Schedule from "./sections/Schedule";
import DressCode from "./sections/DressCode";
import MapSection from "./sections/MapSection";
import Transport from "./sections/Transport";
import Recommendations from "./sections/Recommendations";
import Weather from "./sections/Weather";
import Facts from "./sections/Facts";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <KeyEvents />
      <Ceremony />
      <Schedule />
      <DressCode />
      <MapSection />
      <Transport />
      <Recommendations />
      <Weather />
      <Facts />
      <Footer />
    </main>
  );
}
