import { useState } from "react";
import logo from "../../assets/logos/logo.png";

import "./recuperarPassword.css";

export default function RecuperarPassword() {

  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [codigoGenerado, setCodigoGenerado] = useState("");
  const [paso, setPaso] = useState(1);
  const [mensaje, setMensaje] = useState("");

  // GENERAR CODIGO

  const enviarCodigo = () => {

    if (!email) {
      setMensaje("Ingresa un correo.");
      return;
    }

    const nuevoCodigo =
      Math.floor(100000 + Math.random() * 900000).toString();

    setCodigoGenerado(nuevoCodigo);

    console.log(
      "Código enviado al correo:",
      nuevoCodigo
    );

    setPaso(2);

    setMensaje(
      "Código enviado correctamente. Revisa la consola."
    );
  };

  // VERIFICAR

  const verificarCodigo = () => {

    if (codigo === codigoGenerado) {

      setMensaje(
        "Código verificado correctamente."
      );

    } else {

      setMensaje(
        "Código incorrecto."
      );

    }

  };

  return (
    <section className="recover-page">

      <div className="recover-container">

        <img
          src={logo}
          alt="Logo"
          className="recover-logo"
        />

        <h1 className="recover-title">
          Recuperar contraseña
        </h1>

        <p className="recover-subtitle">
          Moto Repuestos Avendaño
        </p>

        {/* PASO 1 */}

        {paso === 1 && (

          <div className="recover-form">

            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button
              onClick={enviarCodigo}
              className="recover-btn"
            >
              Enviar código
            </button>

          </div>

        )}

        {/* PASO 2 */}

        {paso === 2 && (

          <div className="recover-form">

            <label>Ingresa el código</label>

            <input
              type="text"
              placeholder="123456"
              value={codigo}
              onChange={(e) =>
                setCodigo(e.target.value)
              }
            />

            <button
              onClick={verificarCodigo}
              className="recover-btn"
            >
              Verificar código
            </button>

          </div>

        )}

        {/* MENSAJE */}

        {mensaje && (
          <p className="message">
            {mensaje}
          </p>
        )}

      </div>

    </section>
  );
}