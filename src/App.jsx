import "./App.css";

function App() {
  return (
    <>
      <div className="hero">
        <h1>Pro-Tech Dental Arts</h1>
      </div>
      
      <div className="technologies"></div>
      <div className="services"></div>

      <footer className="footer">
        {/* Use Swiper.js for carosels */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.2264990404077!2d-91.06729152684998!3d30.41040885049928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a38353854649%3A0x40dc56203128343!2sPro-Tech%20Dental%20Arts!5e0!3m2!1sen!2sus!4v1726441651557!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </>
  );
}

export default App;
