import "./nosotros.css";

// =======================
// IMPORTACIÓN DE IMÁGENES
// =======================
import vitrina from "../../assets/images/vitrina.png";
import trabajador from "../../assets/images/trabajador.png";
import productos from "../../assets/images/productos.png";
import tienda from "../../assets/images/tienda.png";

export default function Nosotros() {
  return (
    <section className="about">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-content">
          <span>REPUESTOS AVENDAÑO</span>

          <h1>
            Calidad, confianza y pasión
            por las motocicletas
          </h1>

          <p>
            Somos una empresa nicaragüense dedicada
            a ofrecer repuestos y accesorios para
            motocicletas con excelente calidad y
            precios accesibles.
          </p>
        </div>
      </div>

      {/* MISION Y VISION */}
      <section className="about-section">

        <div className="about-card">
          <h2>Misión</h2>
          <p>
            Brindar a nuestros clientes repuestos para
            motocicletas de excelente calidad, ofreciendo
            los mejores precios del mercado, con un servicio
            atento y asesoría confiable que garantice su
            plena satisfacción.
          </p>
        </div>

        <div className="about-card">
          <h2>Visión</h2>
          <p>
            Convertirnos en una empresa sólida y reconocida
            a nivel nacional, expandiéndonos hacia otros
            departamentos de Nicaragua y posicionarnos como
            distribuidores oficiales de la marca INFZ.
          </p>
        </div>

      </section>

      {/* GALERIA */}
      <section className="gallery">

        <h2>Nosotros</h2>

        <div className="gallery-grid">

          {/* 1. vitrina */}
          <img src={vitrina} alt="Vitrina de productos" />

          {/* 2. trabajador */}
          <img src={trabajador} alt="Trabajador" />

          {/* 3. productos */}
          <img src={productos} alt="Productos" />

        </div>

      </section>

      {/* HISTORIA */}
      <section className="history">

        <div className="history-text">

          <h2>Historia de la empresa</h2>

          <p>
            Repuestos Avendaño, también conocida como
            Moto Repuestos Avendaño, es un pequeño negocio
            nicaragüense dedicado a la comercialización
            de repuestos para motocicletas, con el propósito
            de ofrecer una alternativa confiable en el
            mercado local.
          </p>

          <p>
            Desde sus inicios, el negocio se ha caracterizado
            por comercializar repuestos de muy buena calidad
            a precios accesibles, permitiendo que tanto
            clientes particulares como talleres mecánicos
            puedan mantener sus motocicletas en óptimas
            condiciones sin comprometer su economía.
          </p>

          <p>
            Aunque es una empresa joven, Moto Repuestos
            Avendaño ha logrado ganar rápidamente la confianza
            de sus primeros clientes gracias a la selección
            cuidadosa de sus productos y a una atención
            personalizada y honesta.
          </p>

          <p>
            La empresa inició operaciones con un enfoque
            especial en repuestos para motor y componentes
            esenciales, destacando por su compromiso con la
            calidad y la satisfacción del cliente.
          </p>

        </div>

        {/* TIENDA abajo junto a historia */}
        <div className="history-image">
          <img src={tienda} alt="Tienda Repuestos Avendaño" />
        </div>

      </section>

    </section>
  );
}