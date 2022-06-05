import "./Navbar.css";
import logo from "../../assets/JSONG.png";

export const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar__container">
        <img src={logo} alt="logo" className="navbar__logo" />
      </nav>
    </section>
  );
};
