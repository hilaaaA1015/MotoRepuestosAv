import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";

//=====================================================
//Seccion donde se importan las imagenes en el proyecto
//=====================================================

import img1 from "../../assets/images/carrusel1.png";
import img2 from "../../assets/images/csrrusel2.png";
import img3 from "../../assets/images/carrusel3.png";
import { categories, featuredProducts } from "../../data/products";
import "./home.css";
import "../../components/Toast/Toast.css";

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // NUEVO ESTADO PARA LA NOTIFICACIÓN MODERNA
  const [toastMessage, setToastMessage] = useState("");

  const fullText = "Encuentra repuestos, accesorios y lubricantes para tu moto al mejor precio.";
  const imagenes = [img1, img2, img3];

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => prev === imagenes.length - 1 ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  //Esto es para que el "Producto" del header si te envie a la seccion del producto
  useEffect(() => {
    // Verificamos si la URL actual contiene el hash #productos
    if (window.location.hash === "#productos") {
      const seccionProductos = document.getElementById("productos");
      if (seccionProductos) {
        // Hace un scroll suave hacia la sección
        seccionProductos.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // Se ejecuta una sola vez cuando el Home termina de montarse en pantalla

  const addToCart = (product) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const existe = carritoActual.find((item) => item.name === product.name);

    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
      carritoActual.push({ ...product, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    // 1. Alerta Toast
    setToastMessage(`${product.name} agregado al carrito`);
    setTimeout(() => setToastMessage(""), 3000);

    // 2. DISPARAR AVISO AL HEADER (NUEVO)
    window.dispatchEvent(new Event("localCartUpdated"));
  };

  return (
    <>
      {/* NOTIFICACIÓN EN TIEMPO REAL */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast-card">
            <span className="toast-icon">✓</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <Hero text={text} />

      <div className="carousel-section">
        <div className="carousel-slider">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }} >
            {imagenes.map((img, i) => (
              <div className="carousel-slide" key={i}>
                <img src={img} alt={`banner-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN DESTACADOS */}
      <section className="featured-section">
        <h2>Productos Destacados</h2>
        <div className="featured-slider">
          <div className="featured-track">
            {featuredProducts.map((p, i) => (
              <div className="featured-card" key={i}>
                <Link to={`/producto/${p.id}`} state={{ producto: p, categoriaOriginal: "Destacados" }}>
                  <img src={p.image} alt={p.name} className="product-image" />
                  <h3>{p.name}</h3>
                  <p>{p.price}</p>
                </Link>
                <button onClick={() => addToCart(p)}> Agregar </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CATEGORIAS */}
      <section className="products" id="productos">
        {categories.map((cat) => (
          <div key={cat.title} className="category">
            <h2>{cat.title}</h2>
            <div className="grid">
              {cat.items.map((p, i) => (
                <div key={i} className="card">
                  <Link to={`/producto/${p.id}`} state={{ producto: p, categoriaOriginal: cat.title }}>
                    <img src={p.image} alt={p.name} className="product-image" />
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                  </Link>
                  <button onClick={() => addToCart(p)}> Agregar </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="catalog-container">
        <button className="catalog-btn"> Descargar Catálogo </button>
      </div>
    </>
  );
}