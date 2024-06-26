import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <p className="header__logo">ARCANE ARCHIVE</p>

    
      <Link to="/login" className="header__login">
        Login 
      </Link>
    </section>
  );
}
