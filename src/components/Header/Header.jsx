import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Vectorlogo.svg";

export default function Header({ user, check }) {
  function logOut() {
    sessionStorage.removeItem("token");
    check();
  }

  const loggedIn = (
    <button onClick={logOut} className="header__log-out">
      Log out
    </button>
  );
  return (
    <section className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo" className="header__logoimg" />
          <p className="header__name">ARCANE ARCHIVE</p>
        </Link>
        <nav className="header__nav">
          <Link to="/books/upload" className="header__link">
            Upload
          </Link>

          {user && (
            <Link to={`/users/${user.id}`} className="header__link">
              {user.username}
            </Link>
          )}

          {user ? (
            loggedIn
          ) : (
            <Link to="/login" className="header__link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </section>
  );
}
