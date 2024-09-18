import "./Hero.css";
import Div100vh from "react-div-100vh";

const Hero = () => {

  return (
    <Div100vh>
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
    </Div100vh>
  );
};

export default Hero;
