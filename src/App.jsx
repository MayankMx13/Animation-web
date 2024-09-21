import Navbar from "./components/navbar"
import Landing from "./components/landing"
import Marquee from "./components/marquee"
import About from "./components/about"
import Eyes from "./components/eyes"
import Features from "./components/features"
import Cards from "./components/cards"
import Footer from "./components/footer"
import Banner from "./components/banner"
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (

    <div className="w-full h-full bg-[#f1f1f1] text-black min-h-screen" >
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Banner />
      <Footer />
    </div>
  )
}

export default App