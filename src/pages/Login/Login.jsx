import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logos/logo.png";

import "./login.css";

export default function Login() {

  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // USUARIO QUEMADO
  const usuarioDemo = {
    correo: "admin@gmail.com",
    password: "123456",
    nombre: "Fifi"
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      correo === usuarioDemo.correo &&
      password === usuarioDemo.password
    ) {

      // GUARDAR SESION
      localStorage.setItem(
        "usuario",
        JSON.stringify(usuarioDemo)
      );

      // ///////////
      navigate("/");

    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

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

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <label>Correo</label>

          <input
            type="email"
            placeholder="micorreo@ejemplo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <label>Contraseña</label>

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {
  error && (
    <div className="login-error">
      {error}
    </div>
  )
}

          <div className="recover">

            <Link to="/recuperar-password">
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

          <Link to="/registro">
            Registrarse
          </Link>

        </p>

      </div>

    </section>
  );
}