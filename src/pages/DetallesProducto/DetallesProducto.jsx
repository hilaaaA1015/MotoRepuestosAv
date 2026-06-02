import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { categories, featuredProducts } from "../../data/products";
import "./DetallesProducto.css";
import "../../components/Toast/Toast.css";

export default function ProductoDetalle() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const [relacionados, setRelacionados] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const { producto, categoriaOriginal } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    setCantidad(1);

    if (producto && categoriaOriginal) {
      let listaParaFiltrar = [];

      if (categoriaOriginal !== "Destacados") {
        const catEncontrada = categories.find(cat => cat.title === categoriaOriginal);
        if (catEncontrada) listaParaFiltrar = catEncontrada.items;
      } else {
        listaParaFiltrar = featuredProducts;
      }

      const filtrados = listaParaFiltrar.filter(item => item.name !== producto.name);
      setRelacionados(filtrados.slice(0, 4));
    }
  }, [location, producto, categoriaOriginal]);

  if (!producto) {
    return (
      <div className="error-msg" style={{ padding: "100px", textAlign: "center" }}>
        <h2>No se seleccionó ningún producto</h2>
        <button onClick={() => navigate("/")} style={{ background: "#2563eb", color: "white", padding: "10px 20px", border: "none", borderRadius: "8px", marginTop: "20px", cursor: "pointer" }}>Volver al Inicio</button>
      </div>
    );
  }

  const handleAddToCart = (prodAñadir, cantAñadir) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const existe = carritoActual.find((item) => item.name === prodAñadir.name);

    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + cantAñadir;
    } else {
      carritoActual.push({ ...prodAñadir, cantidad: cantAñadir });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));

    // Activa el mensaje que hace aparecer el Toast animado
    setToastMessage(`${cantAñadir}x ${prodAñadir.name} agregado(s)`);

    // Limpia el mensaje después de 3 segundos para ocultarlo
    setTimeout(() => {
      setToastMessage("");
    }, 3000);

    // Notifica al Header para que incremente la burbuja estilo WhatsApp
    window.dispatchEvent(new Event("localCartUpdated"));
  };

  return (
    <div className="detail-container" style={{ padding: "40px 8%", color: "white" }}>
      {/* Este es el mensaje de que se agrego correctamente */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast-card">
            <span className="toast-icon">✓</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
      <div className="product-layout" style={{ display: "flex", gap: "50px", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="product-image-box" style={{ background: "#1e293b", padding: "20px", borderRadius: "20px", maxWidth: "450px", width: "100%" }}>
          <img src={producto.image} alt={producto.name} style={{ width: "100%", borderRadius: "14px", objectFit: "cover" }} />
        </div>

        <div className="product-info-box" style={{ flex: "1", minWidth: "300px", maxWidth: "600px" }}>
          <span className="category-tag" style={{ color: "#2563eb", fontWeight: "bold", textTransform: "uppercase" }}>{categoriaOriginal}</span>
          <h1 style={{ fontSize: "36px", margin: "10px 0" }}>{producto.name}</h1>
          <p className="price-tag" style={{ fontSize: "28px", fontWeight: "bold", color: "white", margin: "15px 0" }}>{producto.price}</p>

          <p className="description" style={{ color: "#cbd5e1", lineHeight: "1.6", margin: "20px 0" }}>
            Garantía de rendimiento excepcional. Diseñado con altos estándares para asegurar la máxima durabilidad en tu motocicleta.
          </p>

          <div className="purchase-card" style={{ background: "#1e293b", padding: "20px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "20px", marginTop: "30px" }}>
            <div className="quantity-field" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label style={{ color: "#cbd5e1", fontSize: "14px" }}>Cantidad</label>
              <select value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} style={{ padding: "10px", borderRadius: "8px", background: "#0f172a", color: "white", border: "1px solid rgba(255,255,255,0.1)", fontSize: "16px" }}>
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>{n + 1}</option>
                ))}
              </select>
            </div>

            <button className="btn-add-cart" onClick={() => handleAddToCart(producto, cantidad)} style={{ flex: "1", padding: "15px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "16px", marginTop: "20px" }}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      {/* SECCIÓN RELACIONADOS */}
      {relacionados.length > 0 && (
        <section className="related-section" style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "30px", textAlign: "center" }}>Productos Relacionados</h2>
          <div className="related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px" }}>
            {relacionados.map((item) => (
              <div className="related-card" key={item.id} style={{ background: "#1e293b", padding: "20px", borderRadius: "18px", textAlign: "center" }}>
                <Link to={`/producto/${item.id}`} state={{ producto: item, categoriaOriginal: categoriaOriginal }} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={item.image} alt={item.name} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px" }} />
                  <h3 style={{ fontSize: "18px", margin: "15px 0 5px" }}>{item.name}</h3>
                  <p style={{ color: "white", fontWeight: "bold" }}>{item.price}</p>
                </Link>
                <button onClick={() => handleAddToCart(item, 1)} style={{ marginTop: "15px", width: "100%", padding: "10px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}