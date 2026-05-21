import { Link } from "react-router-dom";
import "./carrito.css";

export default function Carrito() {

  const carrito =
  JSON.parse(localStorage.getItem("carrito")) || [];

  return (
    <section className="cart-page">

      <div className="cart-container">

        {carrito.length === 0 ? (

          <div className="empty-cart">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Carrito vacío"
            />

            <h1>Tu carrito está vacío</h1>

            <p>
              Parece que todavía no has agregado productos.
            </p>

            <Link
              to="/#productos"
              className="continue-btn"
            >
              Continuar comprando
            </Link>

          </div>

        ) : (

          <div className="cart-items">

  <h1>Tu carrito</h1>

  <button
  className="clear-cart-btn"
  onClick={() => {

    localStorage.removeItem("carrito");

    window.location.reload();

  }}
>
  Vaciar carrito
</button>

  {carrito.map((p, i) => (

    <div key={i} className="cart-item">

      <img
        src={p.image}
        alt={p.name}
        className="cart-image"
      />

      <div>

<div className="cart-info">

  <h3>{p.name}</h3>

  <p className="cart-price">
    Precio: {p.price}
  </p>

</div>

      </div>

    </div>

  ))}

</div>

        )}

      </div>

    </section>
  );
}