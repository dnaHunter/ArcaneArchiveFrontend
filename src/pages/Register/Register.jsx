import { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [errorMsg, setErrorMsg] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const nav = useNavigate();

  function validateInput(event) {
    const value = event.target.value;

    if (!value) {
      event.target.classList.add("register__input-error");
    } else {
      event.target.classList.remove("register__input-error");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;

    if (!username) {
      event.target.username.classList.add("register__input-error");
    } else {
      event.target.username.classList.remove("register__input-error");
    }
    if (!password) {
      event.target.password.classList.add("register__input-error");
    } else {
      event.target.password.classList.remove("register__input-error");
    }
    if (!cpassword) {
      event.target.cpassword.classList.add("register__input-error");
    } else {
      event.target.cpassword.classList.remove("register__input-error");
    }

    if (password !== cpassword) {
      setErrorMsg("Passwords must be the same.");
      return;
    }

    const newUser = { username, password };

    try {
      const { data } = await axios.post(`${BACKEND_URL}/users/`, newUser);

      nav("/login");
    } catch (error) {
      if (error.response.data.message === "Existing user with that username") {
        setErrorMsg("Existing user with that name. Change it and try again.");
      }
    }
  }
  return (
    <section className="register">
      <div className="register__content">
        <h1 className="register__title">REGISTER</h1>
        <form onSubmit={handleSubmit} className="register__form">
          <div className="register__label-input">
            <label htmlFor="username" className="register__label">
              USERNAME
            </label>
            <input
              onBlur={validateInput}
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              className="register__username"
            />
          </div>

          <div className="register__label-input">
            <label htmlFor="password" className="register__label">
              PASSWORD
            </label>
            <input
              onBlur={validateInput}
              name="password"
              type="password"
              id="password"
              className="register__password"
            />
          </div>

          <div className="register__label-input">
            <label htmlFor="cpassword" className="register__label">
              CONFIRM PASSWORD{" "}
            </label>
            <input
              onBlur={validateInput}
              name="cpassword"
              id="cpassword"
              type="password"
              className="register__password"
            />
          </div>
          {errorMsg && <p className="register__equal">{errorMsg}</p>}
          <button className="register__button">REGISTER</button>
        </form>
      </div>
    </section>
  );
}
