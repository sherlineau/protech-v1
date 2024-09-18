import "./Hero.css";
import {use100vh} from "react-div-100vh";

const Hero = () => {
  const height = use100vh()

  return (
    <div className="vh100" style={{"--height":`${height}px`}}>
      <section className="hero">
        <h1 className="hero-header text-accent bg-primary">
          Pro-Tech Dental Arts
        </h1>

        <div className="hero-content" >
          <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          </div>
          <img src="placeholder.png" alt="" className="hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
