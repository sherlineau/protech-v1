import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="text-accent">
        Pro-Tech Dental Arts
      </h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
