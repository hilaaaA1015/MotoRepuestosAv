import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";

//=====================================================
//Seccion donde se importan las imagenes en el proyecto
//=====================================================

import img1  from "../../assets/images/carrusel1.png";
import img2  from "../../assets/images/csrrusel2.png";
import img3  from "../../assets/images/carrusel3.png";

import img4  from "../../assets/productos/aceites/aceitemotul.jpg";
import img5  from "../../assets/productos/bujias/bujiangk.jpg";
import img6  from "../../assets/productos/cadenas/cadenadid.jpg";
import img7  from "../../assets/productos/cascos/cascols2.jpg";
import img8  from "../../assets/productos/filtros/filtrodeaire.jpg";
import img9  from "../../assets/productos/frenos/frenodelantero.jpg";
import img10 from "../../assets/productos/guantes/guantesfox.jpg";
import img11 from "../../assets/productos/kitluces/kitlucesled.jpg";
import img12 from "../../assets/productos/llantas/llantapireli.jpg";
import img13 from "../../assets/productos/retrovisores/retrovisores.jpg";

import img14  from "../../assets/productos/aceites/Roshfrans.jpg";
import img15  from "../../assets/productos/aceites/Yamalube.jpg";



import "./home.css";

export default function Home() {

  const [text, setText] = useState("");
const fullText = "Encuentra repuestos, accesorios y lubricantes para tu moto al mejor precio.";
//=========================================
//UseEffect Primero
//=========================================
useEffect(() => {
  let i = 0;

  const typing = setInterval(() => {
    setText(fullText.slice(0, i));
    i++;

    if (i > fullText.length) clearInterval(typing);
  }, 40);

  return () => clearInterval(typing);
}, []);

//================================================
//Asignacion de imagenes de la parte de accesorios
//================================================
//================================================
//Asignacion de imagenes de la parte de accesorios
//================================================
const categories = [
  {
    title: "Accesorios",
    items: [
      {
        id: 1,
        name: "Casco integral",
        price: "C$ 45.00",
        image: img7,
      },

      {
        id: 2,
        name: "Guantes Fox",
        price: "C$ 15.00",
        image: img10,
      },

      {
        id: 3,
        name: "Retrovisores",
        price: "C$ 18.00",
        image: img13,
      },

      {
        id: 4,
        name: "Kit Luces LED",
        price: "C$ 22.00",
        image: img11,
      },
    ],
  },

  {
    title: "Repuestos",
    items: [
      {
        id: 5,
        name: "Cadena DID",
        price: "C$ 30.00",
        image: img6,
      },

      {
        id: 6,
        name: "Bujía NGK",
        price: "C$ 8.00",
        image: img5,
      },

      {
        id: 7,
        name: "Filtro de aire",
        price: "C$ 14.00",
        image: img8,
      },

      {
        id: 8,
        name: "Freno delantero",
        price: "C$ 25.00",
        image: img9,
      },
    ],
  },

  {
    title: "Lubricantes",
    items: [
      {
        id: 9,
        name: "Aceite Motul",
        price: "C$ 12.00",
        image: img4,
      },

      {
        id: 10,
        name: "Aceite Roshfrans",
        price: "C$ 11.00",
        image: img14,
      },

      {
        id: 11,
        name: "Aceite Yamalube",
        price: "C$ 13.00",
        image: img15,
      },

      {
        id: 12,
        name: "Lubricante Premium",
        price: "C$ 10.00",
        image: img4,
      },
    ],
  },
];

//==============================================================================
//Seccion donde se Asignan las Imagenes para el carrusel de productos destacados
//==============================================================================
const featuredProducts = [
  { id: 1, name: "Casco LS2", price: "C$ 1,450", image: img7 },
  { id: 2, name: "Aceite Motul", price: "C$ 320", image: img4 },
  { id: 3, name: "Bujía NGK", price: "C$ 180", image: img5 },
  { id: 4, name: "Guantes Fox", price: "C$ 650", image: img10 },
  { id: 5, name: "Cadena DID", price: "C$ 1,150", image: img6 },
  { id: 6, name: "Freno delantero", price: "C$ 980", image: img9 },
  { id: 7, name: "Llanta Pirelli", price: "C$ 2,800", image: img12 },
  { id: 8, name: "Retrovisores", price: "C$ 420", image: img13 },
  { id: 9, name: "Kit de luces LED", price: "C$ 850", image: img11 },
  { id: 10, name: "Filtro de aire", price: "C$ 550", image: img8 },
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


// ======================================
// FUNCION PARA AGREGAR AL CARRITO
// ======================================

const addToCart = (product) => {

  const carritoActual =
    JSON.parse(localStorage.getItem("carrito")) || [];

  carritoActual.push(product);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carritoActual)
  );

 alert(`${product.name} agregado al carrito`);

};


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

{featuredProducts.map((p, i) => (

  <div className="featured-card" key={i}>

    <img
      src={p.image}
      alt={p.name}
      className="product-image"
    />

    <h3>{p.name}</h3>

    <p>{p.price}</p>

    <button onClick={() => addToCart(p)}>
  Agregar
</button>

  </div>

))}

    </div>

  </div>

</section>


{/* ================= CATEGORIAS ================= */}

<section className="products" id="productos">

  {categories.map((cat) => (

    <div key={cat.title} className="category">

      <h2>{cat.title}</h2>

      <div className="grid">

        {cat.items.map((p, i) => (

       <div key={i} className="card">

  <img
    src={p.image}
    alt={p.name}
    className="product-image"
  />

  <h3>{p.name}</h3>

  <p>{p.price}</p>

  <button onClick={() => addToCart(p)}>
  Agregar
</button>

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

    </>
  );
}