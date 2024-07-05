import "./Register.scss";

export default function Register() {
  return (
    <section className="register">
      <div className="register__content">
        <h1 className="register__title">ARCANE ARCHIVE</h1>
        <h2 className="register__subtitle">REGISTER</h2>
        <form className="register__form">
          <div className="register__label-input">
            <label>
              USERNAME
              <input
                placeholder="Username"
                name="username"
                type="text"
                className="register__username"
              />
            </label>
          </div>

          <div className="register__label-input">
            <label>
              PASSWORD
              <input
                name="password"
                type="password"
                className="register__password"
              />
            </label>
          </div>

          <div className="register__label-input">
            <label>
              CONFIRM PASSWORD
              <input
                name="password"
                type="password"
                className="register__password"
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
