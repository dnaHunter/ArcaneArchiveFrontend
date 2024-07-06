import { useState } from "react";
import "./Login.scss";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState(null);
  function validateInput(){

  }

  function handleSubmit(){

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
      </div>
    </section>
  );
}
