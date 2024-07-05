import "./Register.scss";

export default function Register() {
  return (
    <section className="register">
      <div className="register__content">
        <h1 className="register__title">REGISTER</h1>
        <form className="register__form">
          <div className="register__label-input">
            <label htmlFor="username" className="register__label">
              USERNAME
            </label>
            <input
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
              name="cpassword"
              id="cpassword"
              type="password"
              className="register__password"
            />
          </div>
          <button className="register__button">REGISTER</button>
        </form>
      </div>
    </section>
  );
}
