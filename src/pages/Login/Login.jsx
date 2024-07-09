import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ checkIsLoggedIn }) {
  const [errorMsg, setErrorMsg] = useState(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const nav = useNavigate();

  function validateInput(event) {
    const value = event.target.value;

    if (!value) {
      event.target.classList.add("login__input-error");
    } else {
      event.target.classList.remove("login__input-error");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username) {
      event.target.username.classList.add("login__input-error");
    } else {
      event.target.username.classList.remove("login__input-error");
    }
    if (!password) {
      event.target.password.classList.add("login__input-error");
    } else {
      event.target.password.classList.remove("login__input-error");
    }

    const user = { username, password };

    try {
      const { data } = await axios.post(`${BACKEND_URL}/users/login`, user);

      sessionStorage.setItem("token", data.token);

      checkIsLoggedIn();
      nav("/");
    } catch (error) {
      if (error.response.data.message === "Incorrect username or password") {
        return setErrorMsg("Incorrect username or password");
      }
    }
  }
  return (
    <section className="login">
      <div className="login__content">
        <h1 className="login__title">SIGN IN</h1>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__label-input">
            <label htmlFor="username" className="login__label">
              USERNAME
            </label>
            <input
              onBlur={validateInput}
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              className="login__username"
            />
          </div>

          <div className="login__label-input">
            <label htmlFor="password" className="login__label">
              PASSWORD
            </label>
            <input
              onBlur={validateInput}
              name="password"
              type="password"
              id="password"
              className="login__password"
            />
          </div>
          {errorMsg && <p className="login__equal">{errorMsg}</p>}
          <button className="login__button">SIGN IN</button>
        </form>
        <Link to="/register" className="login__register">
          Create a new account
        </Link>
      </div>
    </section>
  );
}
