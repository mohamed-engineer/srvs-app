import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Sec1 from "./components/sec1";
import Services from "./components/services";
import OurTeam from "./components/ourteem";
import VisionSection from "./components/textFromCEO";
import ClientsSection from "./components/clients";
import PartnersSlider from "./components/Partners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer";

export default function Home() {
  return (
<>
    <Navbar />
    <Header />
    <Sec1 />
    <Services />
    <OurTeam />
    <VisionSection />
    <ClientsSection />
    <PartnersSlider />

    <Footer />
</>

  );
}
