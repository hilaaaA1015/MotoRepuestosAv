import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Productos from "../pages/Productos/Productos";
import Contacto from "../pages/Contacto/Contacto";
import Nosotros from "../pages/Nosotros/Nosotros";
import Carrito from "../pages/Carrito/Carrito";
import Login from "../pages/Login/Login";
import Registro from "../pages/Registro/Registro";
import RecuperarPassword from "../pages/RecuperarPassword/RecuperarPassword";
import Perfil from "../pages/Perfil/Perfil";

// PAGINAS EXTRA


function NotFound() {
  return <h1>404 - Página no encontrada</h1>;
}

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/productos"
        element={
          <MainLayout>
            <Productos />
          </MainLayout>
        }
      />

      <Route
        path="/contacto"
        element={
          <MainLayout>
            <Contacto />
          </MainLayout>
        }
      />

      <Route
        path="/nosotros"
        element={
          <MainLayout>
            <Nosotros />
          </MainLayout>
        }
      />

      <Route
        path="/carrito"
        element={
          <MainLayout>
            <Carrito />
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

      <Route
        path="/perfil"
        element={
          <MainLayout>
            <Perfil />
          </MainLayout>
        }
      />

      <Route
  path="/registro"
  element={
    <MainLayout>
      <Registro />
    </MainLayout>
  }
/>

<Route
  path="/recuperar-password"
  element={
    <MainLayout>
      <RecuperarPassword />
    </MainLayout>
  }
/>

<Route
  path="/perfil"
  element={
    <MainLayout>
      <Perfil />
    </MainLayout>
  }
/>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}