import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

import "./header.css";

export default function Header() {

  // OBTENER USUARIO LOGUEADO
  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  return (

    <header className="header">

      {/* LOGO */}
      <Link to="/" className="logo">

        <img
          src={logo}
          alt="Moto Repuestos Avendaño"
        />

        <span>
          Moto Repuestos Avendaño
        </span>

      </Link>

      {/* NAV */}
      <nav className="nav">

        <Link to="/">
          Inicio
        </Link>

        <a href="/#productos">
          Productos
        </a>

        <Link to="/contacto">
          Contacto
        </Link>

        <Link to="/nosotros">
          Acerca de nosotros
        </Link>

      </nav>

      {/* ACTIONS */}
      <div className="actions">

        <Link
          to="/carrito"
          className="cart-btn"
        >
          🛒 Carrito
        </Link>

        {
          usuario ? (

            <Link
              to="/perfil"
              className="login-btn"
            >
              Mi Perfil
            </Link>

          ) : (

            <Link
              to="/login"
              className="login-btn"
            >
              Iniciar sesión
            </Link>

          )
        }

      </div>

    </header>
  );
}