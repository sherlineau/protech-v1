import "./About.css";

const About = () => {
  return (
    <div id="about" className="container">
      {/* mr bob?? / front of lab */}
      <img src="/placeholder.png" alt="" className="" />
      <div className="about-text">
        <p>Since 2000, Pro-Tech Dental Arts has been dedicated to providing dental professionals with outstanding quality and personalized service. We specialize in crown and bridge fabrication, with particular focus on full-mouth restorations and complex cases. Embracing digital dentistry since 2006, we were early adopters of Cerec inLab and the latest technologies from Sirona. At Pro-Tech, we prioritize staying at the forefront of advancements in technology and materials to ensure we offer the best possible solutions to our doctors and their patients</p>
        <p>Our commitment to continuous improvement drives us to develop stronger, longer-lasting restorations that are both durable and aesthetically lifelike.  Every step of our process is carefully executed with precision, ensuring each restoration meets the highest standards and prescription requirements.</p>

        <button className="secondary-btn">Have a question?</button>
      </div>
    </div>
  )
}

export default About