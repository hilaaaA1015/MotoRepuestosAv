import "./nosotros.css";

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

        <h2>Nuestro mundo sobre ruedas</h2>

        <div className="gallery-grid">

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
            alt=""
          />

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

        <div className="history-image">

          <img
            src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=1200"
            alt=""
          />

        </div>

      </section>

    </section>
  );
}