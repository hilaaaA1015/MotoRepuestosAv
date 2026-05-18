import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

import "./login.css";

export default function Login() {
  return (
    <section className="login-page">

      <div className="login-container">

        <img
          src={logo}
          alt="Logo"
          className="login-logo"
        />

        <h1 className="login-title">
          Iniciar sesión
        </h1>

        <p className="login-subtitle">
          Moto Repuestos Avendaño
        </p>

        <form className="login-form">

          <label>Correo</label>

          <input
            type="email"
            placeholder="micorreo@ejemplo.com"
          />

          <label>Contraseña</label>

          <input
            type="password"
            placeholder="Contraseña"
          />

          <div className="recover">

            <Link to="/recuperar-password ">
              Recuperar contraseña
            </Link>

          </div>

          <button
            type="submit"
            className="login-btn-submit"
          >
            Entrar
          </button>

        </form>

        <p className="register">

          ¿No tienes cuenta?{" "}

          <Link to="/Registro ">
            Registrarse
          </Link>

        </p>

      </div>

    </section>
  );
}