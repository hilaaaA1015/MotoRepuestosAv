import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import "./header.css";

export default function Header() {

  // OBTENER USUARIO LOGUEADO
  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  // Estado para guardar el numero de productos
  const [cartCount, setCartCount] = useState(0);

  // Función interna para calcular los productos totales del LocalStorage
  const updateCartCount = () => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    // Sumamos la propiedad .cantidad de todos los artículos
    const totalItems = carritoActual.reduce((acc, item) => acc + (item.cantidad || 1), 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    // 1. Calculamos la cantidad por primera vez al cargar la web
    updateCartCount();

    // 2. Escuchamos un evento personalizado que dispararemos al agregar productos
    window.addEventListener("localCartUpdated", updateCartCount);

    // Limpieza del listener al desmontar el componente
    return () => {
      window.removeEventListener("localCartUpdated", updateCartCount);
    };
  }, []);
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
        <Link to="/">Inicio</Link>
        <Link
          to="/#productos"
          onClick={() => {
            const seccion = document.getElementById("productos");
            if (seccion) {
              seccion.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Productos
        </Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Acerca de nosotros</Link>
      </nav>

      {/* ACTIONS */}
      <div className="actions">

        {/* Este contenedor es para que el tamaño del boton no se desajuste por la funcion de señalar cuantos productos hay en el carrito */}
        <div className="cart-wrapper">
          <Link to="/carrito" className="icon-btn">
  <FiShoppingCart />
</Link>
          

          {/* La burbuja con el numero de productos del carrito floja en el contenedor y no en el boton como tal */}
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>

        {
          usuario ? (

            <Link
  to="/perfil"
  className="icon-btn profile-btn"
>
  <FiUser />
</Link>

          ) : (

            <Link
  to="/login"
  className="icon-btn"
>
  <FiUser />
</Link>

          )
        }

      </div>

    </header>
  );
}