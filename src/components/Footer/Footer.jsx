import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* INFO */}
        <div className="footer-section">
          <h2>Moto Repuestos Avendaño</h2>
          <p>Repuestos y accesorios de calidad para tu moto 🏍️</p>
          <p>📍 Managua, Nicaragua</p>
          <p>📞 +505 1234-5678</p>
        </div>

        {/* LINKS */}
        <div className="footer-section">
          <h3>Enlaces</h3>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </div>

        {/* CATEGORÍAS */}
        <div className="footer-section">
          <h3>Categorías</h3>
          <a href="#">Repuestos</a>
          <a href="#">Accesorios</a>
          <a href="#">Mantenimiento</a>
        </div>

        {/* REDES */}
        <div className="footer-section">
          <h3>Síguenos</h3>

          <div className="socials">

            <a href="#" className="social facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="social instagram">
              <FaInstagram />
            </a>

            <a href="#" className="social whatsapp">
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Moto Repuestos Avendaño | Todos los derechos reservados
      </div>

    </footer>
  );
}