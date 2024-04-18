import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlighs from "./components/Highlights";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

function App() {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlighs />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
