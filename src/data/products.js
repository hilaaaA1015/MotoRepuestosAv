//Aqui estan la informacion que se muestra de los productos
import img4 from "../assets/productos/aceites/aceitemotul.jpg";
import img5 from "../assets/productos/bujias/bujiangk.jpg";
import img6 from "../assets/productos/cadenas/cadenadid.jpg";
import img7 from "../assets/productos/cascos/cascols2.jpg";
import img8 from "../assets/productos/filtros/filtrodeaire.jpg";
import img9 from "../assets/productos/frenos/frenodelantero.jpg";
import img10 from "../assets/productos/guantes/guantesfox.jpg";
import img11 from "../assets/productos/kitluces/kitlucesled.jpg";
import img12 from "../assets/productos/llantas/llantapireli.jpg";
import img13 from "../assets/productos/retrovisores/retrovisores.jpg";
import img14 from "../assets/productos/aceites/Roshfrans.jpg";
import img15 from "../assets/productos/aceites/Yamalube.jpg";

export const categories = [
  {
    title: "Accesorios",
    items: [
      { id: 1, name: "Casco integral", price: "C$ 45.00", image: img7 },
      { id: 2, name: "Guantes Fox", price: "C$ 15.00", image: img10 },
      { id: 3, name: "Retrovisores", price: "C$ 18.00", image: img13 },
      { id: 4, name: "Kit Luces LED", price: "C$ 22.00", image: img11 },
    ],
  },
  {
    title: "Repuestos",
    items: [
      { id: 5, name: "Cadena DID", price: "C$ 30.00", image: img6 },
      { id: 6, name: "Bujía NGK", price: "C$ 8.00", image: img5 },
      { id: 7, name: "Filtro de aire", price: "C$ 14.00", image: img8 },
      { id: 8, name: "Freno delantero", price: "C$ 25.00", image: img9 },
    ],
  },
  {
    title: "Lubricantes",
    items: [
      { id: 9, name: "Aceite Motul", price: "C$ 12.00", image: img4 },
      { id: 10, name: "Aceite Roshfrans", price: "C$ 11.00", image: img14 },
      { id: 11, name: "Aceite Yamalube", price: "C$ 13.00", image: img15 },
      { id: 12, name: "Lubricante Premium", price: "C$ 10.00", image: img4 },
    ],
  },
];

export const featuredProducts = [
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