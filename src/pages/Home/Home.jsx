import "./home.css";

export default function Home() {
  const products = [
    { id: 1, name: "Aceite para motor", price: "$12.00" },
    { id: 2, name: "Casco integral", price: "$45.00" },
    { id: 3, name: "Cadena de moto", price: "$30.00" },
    { id: 4, name: "Bujías", price: "$8.00" },
    { id: 5, name: "Frenos", price: "$18.00" },
    { id: 6, name: "Llanta", price: "$60.00" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="home">
        <div className="home-content">
          <h1>Moto Repuestos Avendaño</h1>
          <p>Repuestos, accesorios y mantenimiento para tu motocicleta</p>
          <button>Ver productos</button>
        </div>
      </section>

      {/* CARDS */}
      <section className="products">
        <h2>Productos destacados</h2>

        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button>Agregar</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}