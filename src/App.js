import React from "react";
import ReactDom from "react-dom";

import "./style/style.scss";

import Phone from "./img/Phone.png";
import Pc from "./img/Pc.png";
import logo from "./img/idea.png";
import tablet from "./img/tablet.png";
import Card from "./Componentes/card";
import Contacto from "./Componentes/contacto";
import Nav from "./Componentes/tab";
import nube from "./img/nube.png";

//import servicio from "./Componentes/servicios.jsx";
const card = [
  {
    imagen:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    titulo: "Seguridad en tus proyectos",
    mas: "",
    des: "Te brindamos un hosting",
  },
  {
    imagen:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    titulo: "Seguridad en tus proyectos",
    mas: "",
    des: "Te brindamos un hosting",
  },
  {
    imagen: "",
    titulo: "Control de contenido",
    mas: "",
    des: "",
  },
  {
    imagen:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    titulo: "Seguridad en tus proyectos",
    mas: "",
    des: "Te brindamos un hosting",
  },
  {
    imagen:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    titulo: "Seguridad en tus proyectos",
    mas: "",
    des: "Te brindamos un hosting",
  },
  {
    imagen: "",
    titulo: "Control de contenido",
    mas: "",
    des: "",
  },
];
const App = () => (
  <>
    <Nav
      buscarinfo="#info"
      buscarPro="#"
      buscarservicio="#Servicios"
      buscarcontacto="#Contactos"
    />
    <card />
    <section class="l-section third-color s-py-4 fondo">
      <div class="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
        <div class="s-column second-color s-main-center lg-main-start lg-cross-start s-center lg-left">
          <h1 className="text">Bienvenido a nuestra web Multisite</h1>
          <h4>
            <span className="text">
              ¡Haz que tu negocio crezca rapido con nosotros!
            </span>
          </h4>

          <br></br>
          <br></br>

          <br></br>
          <h4>
            <span className="text">
              ¿Si gusta? Mira un poco de nuestra pagina
            </span>
          </h4>
          <br></br>

          <div
            id="BotonesJ"
            className="ed-grid s-grid-3 m-grid-3 lg-grid-3 row"
          >
            <a class="button accent-color">Mira Nuestro Blog</a>
            <a class="button first-color">Mira Nuestra Tienda</a>
            <a class="button dark-color">Mira Nuestras App</a>
          </div>
        </div>

        <div>
          <div class="img-container s-ratio-16-9">
            <img
              class="s-radius-1"
              src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </div>
    </section>
    <br id="info" />

    <br />
    <br />
    <br />
    <div className="s-center m-center lg-cente"></div>

    <div className="s-center m-center lg-center">
      <h1>
        Crea Diseño Responsive y Elegantes
        <br></br>
        <h4>
          Haz que tu web se adapte a cualquier dispositivo, con el diseño unico
          que te ofrece multisite
        </h4>{" "}
      </h1>
    </div>
    <br></br>
    <br></br>
    <div id="Responsive" className="ed-grid s-grid-1 m-grid-3 lg-grid-3 row">
      <div>
        <img className="img-container"  width="200"
                height="150" src={Phone} alt="Phone" />
      </div>

      <div>
        <img className="img-container" src={Pc} alt="Computing" />
      </div>

      <div>
        <img className="img-container" src={tablet} alt="Tablet" />
      </div>
    </div>
    <br id="Servicios" />

    <br />
    <br />
    <br />

    <div className=""></div>

    <div className="s-center m-center lg-center">
      <h1 className="s-center m-center lg-center">Servicios</h1>
    </div>
    <div className="ed-grid s-grid-1 m-grid-3 lg-grid-3 ">
      {card.map((card) => (
        <Card
          titulo={card.titulo}
          imagen={card.imagen}
          des={card.des}
          mas={card.mas}
        />
      ))}
    </div>
    <br id="Contactos" />

    <br />
    <br />
    <br />

   
    <div className="e-grid s-grid-1 m-grid -lg-grid-1">
      <Contacto />
    </div>
  </>
);

export default App;
