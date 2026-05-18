import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

import "./registro.css";

export default function Registro() {
  return (
    <section className="register-page">

      <div className="register-container">

        <img
          src={logo}
          alt="Logo"
          className="register-logo"
        />

        <h1 className="register-title">
          Crear cuenta
        </h1>

        <p className="register-subtitle">
          Moto Repuestos Avendaño
        </p>

        <form className="register-form">

          <div className="form-grid">

            <div>
              <label>Nombre</label>

              <input
                type="text"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label>Apellido</label>

              <input
                type="text"
                placeholder="Tu apellido"
              />
            </div>

          </div>

          <label>Teléfono</label>

          <input
            type="tel"
            placeholder="8888-8888"
          />

          <label>Correo</label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
          />

          <label>Contraseña</label>

          <input
            type="password"
            placeholder="Contraseña"
          />

          <button
            type="submit"
            className="register-btn"
          >
            Registrarse
          </button>

        </form>

        <p className="login-link">

          ¿Ya tienes cuenta?{" "}

          <Link to="/login">
            Iniciar sesión
          </Link>

        </p>

      </div>

    </section>
  );
}