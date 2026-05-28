import "./Hero.css";

export default function Hero() {

  const irProductos = () => {

    const seccion =
      document.getElementById("productos");

    seccion?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (

    <section className="home">

      <div className="overlay"></div>

      <div className="home-content">

        <span className="tag">
          Repuestos • Accesorios • Mantenimiento
        </span>

        <h1>
          Moto Repuestos <span>Avendaño</span>
        </h1>

        <p>
          Todo lo que tu motocicleta necesita en un solo lugar.
          Calidad, confianza y las mejores marcas para tu moto.
        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={irProductos}
          >
            Ver productos
          </button>

        </div>

      </div>

    </section>
  );
}