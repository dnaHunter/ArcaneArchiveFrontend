import { Link } from "react-router-dom";
import "./Header.scss";

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
          ARCANE ARCHIVE
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
