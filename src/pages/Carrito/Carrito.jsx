import { Link } from "react-router-dom";
import "./carrito.css";

export default function Carrito() {

  const carrito = [];

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

          <div>
            carrito lleno
          </div>

        )}

      </div>

    </section>
  );
}