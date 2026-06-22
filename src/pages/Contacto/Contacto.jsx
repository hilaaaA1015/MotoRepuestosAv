import "./contacto.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contacto() {
  return (
    /* =====================================================
       SECCIÓN CONTACTO
    ====================================================== */
    <section className="contact">

      {/* ---------- Encabezado ---------- */}
      <div className="contact-header">

        <span className="contact-subtitle">
          CONTACTO
        </span>

        <h2>
          Estamos listos para ayudarte
        </h2>


      </div>

      {/* ---------- Contenedor principal ---------- */}
      <div className="contact-container">

        {/* =====================================================
            INFORMACIÓN DE CONTACTO
        ====================================================== */}
        <div className="contact-info">

          {/* Tarjeta Dirección */}
          <div className="info-card">

            <div className="icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Dirección</h3>
              <p>Managua, Nicaragua</p>
            </div>

          </div>

          {/* Tarjeta Teléfono */}
          <div className="info-card">

            <div className="icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Teléfono</h3>
              <p>+505 8133-2966</p>
            </div>

          </div>

          {/* Tarjeta Correo */}
          <div className="info-card">

            <div className="icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Correo</h3>
              <p>motosavendano@gmail.com</p>
            </div>

          </div>

        </div>

        {/* =====================================================
            FORMULARIO
        ====================================================== */}
        <div className="contact-form-box">

          <form className="contact-form">

            {/* Nombre */}
            <div className="form-group">

              <label>Nombre completo</label>

              <input
                type="text"
                placeholder="Ingresa tu nombre"
              />

            </div>

            {/* Correo */}
            <div className="form-group">

              <label>Correo electrónico</label>

              <input
                type="email"
                placeholder="ejemplo@gmail.com"
              />

            </div>

            {/* Mensaje */}
            <div className="form-group">

              <label>Mensaje</label>

              <textarea
                rows={6}
                placeholder="Escribe aquí tu consulta..."
              ></textarea>

            </div>

            {/* Botón */}
            <button type="submit">
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}