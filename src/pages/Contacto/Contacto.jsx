import "./contacto.css";

export default function Contacto() {
  return (
    <section className="contact">

      <div className="contact-container">

        {/* INFO */}
        <div className="contact-info">

          <span className="contact-subtitle">
            CONTACTO
          </span>

          <h1>
            Hablemos sobre tu motocicleta
          </h1>

          <p>
            ¿Necesitas repuestos, accesorios o ayuda
            con algún producto? Escríbenos y te
            responderemos lo antes posible.
          </p>

          <div className="contact-data">

            <div className="data-box">
              <h3>📍 Dirección</h3>
              <span>Managua, Nicaragua</span>
            </div>

            <div className="data-box">
              <h3>📞 Teléfono</h3>
              <span>+505 8888-8888</span>
            </div>

            <div className="data-box">
              <h3>✉️ Correo</h3>
              <span>motosavendano@gmail.com</span>
            </div>

          </div>

        </div>

        {/* FORMULARIO */}
        <div className="contact-form-box">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Nombre"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
            />

            <textarea
              rows="6"
              placeholder="Escribe tu mensaje..."
            ></textarea>

            <button type="submit">
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}