import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

import img1 from "../../assets/images/carrusel1.png";
import img2 from "../../assets/images/csrrusel2.png";
import img3 from "../../assets/images/carrusel3.png";

import "./home.css";

export default function Home() {

  const [text, setText] = useState("");
const fullText = "Encuentra repuestos, accesorios y lubricantes para tu moto al mejor precio.";

useEffect(() => {
  let i = 0;

  const typing = setInterval(() => {
    setText(fullText.slice(0, i));
    i++;

    if (i > fullText.length) clearInterval(typing);
  }, 40);

  return () => clearInterval(typing);
}, []);

const categories = [
  {
    title: "Accesorios",
    items: [
      { id: 1, name: "Casco integral", price: "$45.00" },
      { id: 2, name: "Guantes", price: "$15.00" },
    ],
  },
  {
    title: "Repuestos",
    items: [
      { id: 3, name: "Cadena de moto", price: "$30.00" },
      { id: 4, name: "Bujías", price: "$8.00" },
    ],
  },
  {
    title: "Lubricantes",
    items: [
      { id: 5, name: "Aceite para motor", price: "$12.00" },
      { id: 6, name: "Grasa industrial", price: "$10.00" },
    ],
  },
];

const featuredProducts = [
  { id: 1, name: "Casco LS2", price: "$55" },
  { id: 2, name: "Aceite Motul", price: "$12" },
  { id: 3, name: "Bujía NGK", price: "$8" },
  { id: 4, name: "Guantes Fox", price: "$18" },
  { id: 5, name: "Cadena DID", price: "$35" },
  { id: 6, name: "Freno delantero", price: "$25" },
  { id: 7, name: "Llanta Pirelli", price: "$70" },
  { id: 8, name: "Retrovisores", price: "$15" },
  { id: 9, name: "Kit de luces LED", price: "$22" },
  { id: 10, name: "Filtro de aire", price: "$14" },
];

  const imagenes = [img1, img2, img3];
const [index, setIndex] = useState(0);
useEffect(() => {
  const intervalo = setInterval(() => {
    setIndex((prev) =>
      prev === imagenes.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(intervalo);
}, []);

  return (
    <>
      {/* HERO */}
      <Hero />

{/* TITULO CARRUSEL */}

<section className="carousel-header">
  <h2>Todo lo que puedes encontrar</h2>
  <p>Los mejores productos para tu motocicleta</p>
</section>



<section className="carousel-section">

  <div className="carousel-slider">

    <div
      className="carousel-track"
      style={{
        transform: `translateX(-${index * 100}%)`,
      }}
    >
      {imagenes.map((img, i) => (
        <div className="carousel-slide" key={i}>
          <img src={img} alt={`banner-${i}`} />
        </div>
      ))}
    </div>

  </div>

</section>

      {/* CARDS */}
      
      {/* ================= DESTACADOS ================= */}

<section className="featured-section">

  <h2>Productos Destacados</h2>

  <div className="featured-slider">

    <div className="featured-track">

      {[...featuredProducts, ...featuredProducts].map((p, i) => (

        <div className="featured-card" key={i}>

          <div className="product-image"></div>

          <h3>{p.name}</h3>

          <p>{p.price}</p>

          <button>Agregar</button>

        </div>

      ))}

    </div>

  </div>

</section>


{/* ================= CATEGORIAS ================= */}

<section className="products">

  {categories.map((cat) => (

    <div key={cat.title} className="category">

      <h2>{cat.title}</h2>

      <div className="grid">

        {[...cat.items, ...cat.items, ...cat.items, ...cat.items].slice(0,8).map((p, i) => (

          <div key={i} className="card">

            <div className="product-image"></div>

            <h3>{p.name}</h3>

            <p>{p.price}</p>

            <button>Agregar</button>

          </div>

        ))}

      </div>

    </div>

  ))}

  <div className="catalog-container">

    <button className="catalog-btn">
      Descargar Catálogo
    </button>

  </div>

</section>
      <Footer />
    </>
  );
}