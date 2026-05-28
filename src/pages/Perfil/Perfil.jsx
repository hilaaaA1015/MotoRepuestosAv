import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./perfil.css";

export default function Perfil() {

  const [section, setSection] = useState("pedidos");

  const navigate = useNavigate();

  const cerrarSesion = () => {

    localStorage.removeItem("usuario");

    navigate("/");
  };

  return (

    <section className="perfil-page">

      {/* HEADER */}
      <div className="perfil-welcome">

        <h1>¡Bienvenido!</h1>

        <p>
          Gestiona tu cuenta de Moto Repuestos Avendaño
        </p>

      </div>

      {/* CARDS */}
      <div className="perfil-grid">

        {/* IZQUIERDA */}
        <div className="perfil-card">

          <h2>Mi cuenta</h2>

          <button
            className={`perfil-option ${
              section === "pedidos"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSection("pedidos")
            }
          >
            🚚 <span>Mis pedidos</span>
          </button>

          <button
            className={`perfil-option ${
              section === "puntos"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSection("puntos")
            }
          >
            ⭐ <span>Mis puntos</span>
          </button>

          <button
            className={`perfil-option ${
              section === "direcciones"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSection("direcciones")
            }
          >
            📍 <span>Direcciones</span>
          </button>

        </div>

        {/* DERECHA */}
        <div className="perfil-card">

          <h2>Gestión de cuenta</h2>

          <button className="perfil-option">
            👤 <span>Actualizar mis datos</span>
          </button>

          <button className="perfil-option">
            🔔 <span>Notificaciones</span>
          </button>

          <button
            className="perfil-option logout"
            onClick={cerrarSesion}
          >
            🚪 <span>Cerrar sesión</span>
          </button>

        </div>

      </div>

      {/* CONTENIDO */}
      <div className="perfil-content">

        {section === "pedidos" && (
          <div className="empty-state">

            🚚

            <h2>No tienes órdenes</h2>

            <p>
              Tus compras aparecerán aquí.
            </p>

          </div>
        )}

        {section === "puntos" && (
          <div className="empty-state">

            ⭐

            <h2>No tienes puntos</h2>

            <p>
              Compra productos y acumula puntos.
            </p>

          </div>
        )}

        {section === "direcciones" && (
          <div className="empty-state">

            📍

            <h2>No tienes direcciones</h2>

            <p>
              Agrega una dirección para tus pedidos.
            </p>

          </div>
        )}

        {section === "pagos" && (
          <div className="empty-state">

            💳

            <h2>No tienes métodos de pago</h2>

            <p>
              Agrega una tarjeta o método de pago.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}