import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import "./header.css";

export default function Header() {
  const [isLogged] = useState(false);

  return (
    <header className="header">
      {/* LOGO */}
      <Link to="/" className="logo">
        <img src={logo} alt="Moto Repuestos Avendaño" />
        <span>Moto Repuestos Avendaño</span>
      </Link>

      {/* NAV */}
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <a href="/#productos">Productos</a>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Acerca de nosotros</Link>
      </nav>

      {/* ACTIONS */}
      <div className="actions">
        <Link to="/carrito" className="cart-btn">
          🛒 Carrito
        </Link>

        {!isLogged ? (
          <Link to="/login" className="login-btn">
            Iniciar sesión
          </Link>
        ) : (
          <Link to="/perfil" className="login-btn">
            Mi cuenta
          </Link>
        )}
      </div>
    </header>
  );
}