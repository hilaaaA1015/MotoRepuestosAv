import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carrito.css";


export default function Carrito() {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

  const subtotal = carrito.reduce((acc, item) => {
  const precio = parseFloat(
    item.price.replace(/[^\d.]/g, "")
  );

  return acc + precio * (item.cantidad || 1);
}, 0);

const [tipoEntrega, setTipoEntrega] =
  useState("retiro");

  const [tipoPago, setTipoPago] =
  useState("efectivo");

const [tarjeta, setTarjeta] =
  useState({
    numero:"",
    nombre:"",
    vencimiento:"",
    cvv:""
  });
  useEffect(() => {
  localStorage.setItem(
    "tarjeta",
    JSON.stringify(tarjeta)
  );
}, [tarjeta]);


  const delivery =
  tipoEntrega === "delivery"
    ? 80
    : 0;

  const total = subtotal + delivery;
  const totalProductos = carrito.reduce(
  (acc, item) => acc + (item.cantidad || 1),
  0
);

 // =============================
// ELIMINAR PRODUCTO
// =============================
const eliminarProducto = (index) => {

  const nuevoCarrito = carrito.filter(
    (_, i) => i !== index
  );

  localStorage.setItem(
    "carrito",
    JSON.stringify(nuevoCarrito)
  );

  setCarrito(nuevoCarrito);

  // Actualizar contador del Header
  window.dispatchEvent(
    new Event("localCartUpdated")
  );

};

  // =============================
// AUMENTAR CANTIDAD
// =============================
const aumentarCantidad = (index) => {

  const nuevoCarrito = [...carrito];

  nuevoCarrito[index].cantidad =
    (nuevoCarrito[index].cantidad || 1) + 1;

  localStorage.setItem(
    "carrito",
    JSON.stringify(nuevoCarrito)
  );

  setCarrito(nuevoCarrito);

  // Actualizar contador del Header
  window.dispatchEvent(
    new Event("localCartUpdated")
  );

};

// =============================
// DISMINUIR CANTIDAD
// =============================
const disminuirCantidad = (index) => {

  const nuevoCarrito = [...carrito];

  if ((nuevoCarrito[index].cantidad || 1) > 1) {
    nuevoCarrito[index].cantidad--;
  }

  localStorage.setItem(
    "carrito",
    JSON.stringify(nuevoCarrito)
  );

  setCarrito(nuevoCarrito);

  // Actualizar contador del Header
  window.dispatchEvent(
    new Event("localCartUpdated")
  );

};

  return (
    <section className="cart-page">
      <div className="cart-container">

        {carrito.length === 0 ? (
          <div className="empty-cart">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Carrito vacío"
            />

            <h2>Tu carrito está vacío</h2>

            <p>
              Parece que todavía no has agregado productos.
            </p>

            <Link
              to="/"
              className="continue-btn"
            >
              Continuar comprando
            </Link>

          </div>
        ) : (
          <div className="cart-content">

            <div className="cart-products">

 

  <div className="cart-list">

    <div className="cart-header">
      <span>Producto</span>
      <span>Cantidad</span>
      <span>Total</span>
      <span>Acción</span>
    </div>

    {carrito.map((p, i) => {

      const precio = parseFloat(
        p.price.replace(/[^\d.]/g, "")
      );

      const cantidad = Number(p.cantidad) || 1;

      return (

        <div
          className="cart-row"
          key={i}
        >

          <div className="product-info">

            <img
              src={p.image}
              alt={p.name}
            />

            <div>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>

          </div>

          <div className="quantity-control">

            <button
              onClick={() =>
                disminuirCantidad(i)
              }
            >
              -
            </button>

            <span>{cantidad}</span>

            <button
              onClick={() =>
                aumentarCantidad(i)
              }
            >
              +
            </button>

          </div>

          <div className="product-total">
            C$ {(precio * cantidad).toFixed(2)}
          </div>

          <button
            className="delete-icon"
            onClick={() =>
              eliminarProducto(i)
            }
          >
            🗑
          </button>

        </div>

      );

    })}

  </div>

</div>

<div className="summary-column">

  {/* ENTREGA */}

  <div
    className="option-card"
    onClick={() =>
      setTipoEntrega(
        tipoEntrega === "retiro"
          ? "delivery"
          : "retiro"
      )
    }
  >
    <div>

      <strong>
        {tipoEntrega === "retiro"
          ? "📍 Retiro en el local"
          : "🛵 Delivery"}
      </strong>

      {tipoEntrega === "delivery" && (
        <p>+ C$80</p>
      )}

    </div>

    <span>›</span>

  </div>

  {/* RESUMEN */}

  <aside className="cart-summary">

    <h2>Resumen de compra</h2>

    <div className="summary-row">
      <span>Productos</span>
      <span>{totalProductos}</span>
    </div>

    <div className="summary-row">
      <span>Subtotal</span>
      <span>C$ {subtotal.toFixed(2)}</span>
    </div>

    <div className="summary-row">
      <span>Envío</span>
      <span>C$ {delivery.toFixed(2)}</span>
    </div>

    <div className="summary-divider"></div>

    <div className="summary-total">
      <span>Total</span>
      <span>C$ {total.toFixed(2)}</span>
    </div>

    <button className="checkout-btn">
      Finalizar compra
    </button>

  </aside>

  {/* PAGO */}

  <div
    className="option-card"
    onClick={() =>
      setTipoPago(
        tipoPago === "efectivo"
          ? "tarjeta"
          : "efectivo"
      )
    }
  >

    <div>

      <strong>
        {tipoPago === "efectivo"
          ? "💵 Pago en efectivo"
          : "💳 Pago con tarjeta"}
      </strong>

    </div>

    <span>›</span>

  </div>

  {/* FORMULARIO */}

  {tipoPago === "tarjeta" && (

    <div className="card-form">

      <input
        type="text"
        placeholder="Número de tarjeta"
      />

      <input
        type="text"
        placeholder="Nombre del titular"
      />

      <div className="card-row">

        <input
          type="text"
          placeholder="MM/AA"
        />

        <input
          type="password"
          placeholder="CVV"
        />

      </div>

    </div>

  )}

</div>
          </div>
        )}
      </div>
    </section>
  );
}