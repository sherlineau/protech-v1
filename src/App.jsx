import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Services />
      <Footer />
    </>
  );
}

export default App;
