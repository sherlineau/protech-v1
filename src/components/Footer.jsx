import "./Footer.css";
//! TODO - hookup form to send email to protechdental arts on submission 
const Footer = () => {
  return (
    <section className="footer">
      <footer className="container">
        <div className="left">
          <h4>Leave us a message</h4>
          <form action="">
            <input type="text" name="name" id="name" placeholder="name"/>
            <input type="text" name="email" id="email" placeholder="email"/>
            <textarea type="text" name="message" id="message" placeholder="message"/>
            <button className="callout-btn">
              Tell us about it
            </button>
          </form>
        </div>
        <div className="right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.2264990404077!2d-91.06729152684998!3d30.41040885049928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626a38353854649%3A0x40dc56203128343!2sPro-Tech%20Dental%20Arts!5e0!3m2!1sen!2sus!4v1726441651557!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <article className="info">
            <p className="faded">address</p>
            <p>4444 Arnold Lane</p>
            <p>Baton Rouge, LA 70809</p>
          </article>
          <article className="info">
            <p className="faded">opening hours</p>
            <p>Monday - Thursday</p>
            <p>7:30am - 4:30pm</p>
          </article>
          <article className="info">
            <p className="faded">contact info</p>
            <a href="tel:225-296-5556">225.296.5556</a>
            <a href="mailto:protechdentalarts@yahoo.com">protechdentalarts@yahoo.com</a>
          </article>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
