import "./Hero.css";
import {use100vh} from "react-div-100vh";
import Navbar from "./Navbar";

const Hero = () => {
  const height = use100vh()

  return (
    <div className="vh100" style={{"--height":`${height}px`}}>
      <section className="hero" id="hero">
      <Navbar />
        <div className="hero-content" >
          <div>
            <h1>Your Partner in Dental Innovation and Quality Craftsmanship.</h1>
          </div>
          {/* front of lab ?? */}
          <img src="placeholder.png" alt="" className="hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
