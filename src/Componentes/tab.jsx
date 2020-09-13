import React from "react";
import "../style/style.scss";

const nav = (props) => (
  <>
    <header
      class="main-header"
      itemscope=""
      itemtype="http://schema.org/WPHeader"
    >
      <div class="ed-grid s-grid-5 cols-lg-10">
        <div
          class="s-cols-2 s-cross-center"
          itemscope=""
          itemtype="http://schema.org/Organization"
        >
          <a className="text-dark" href="/" itemprop="url">
           
         Multisite </a>
        </div>
        <div class="s-cols-3 lg-cols-8 main-menu-container s-cross-center s-main-end">
          <nav
            class="main-menu"
            itemscope=""
            itemtype="http://schema.org/SiteNavigationElement"
            role="navigation"
            id="main-menu"
          >
            <ul>
              <li itemprop="url">
                
              </li>
              <li itemprop="url">
              <a
                  href={props.buscarPro}
                  target="_blank"
            
                  itemprop="name"
                  title="Proyectos de multsite"
                >
                  Proyectos
                </a>
              </li>
              <li itemprop="url">
                <a
                  href={props.buscarinfo}
                  target=""
                  itemprop="name"
                  title="Informacion"
                >
                  Informacion
                </a>
              </li>
              <li itemprop="url">
                <a
                  href={props.buscarservicio}
                  target=""
                  itemprop="name"
                  title="Servicios"
                >
                  Servicios
                </a>
              </li>
              <li itemprop="url">
                <a
                id="contacto"
                  href={props.buscarcontacto}
         
                  itemprop="name"
                  title="Contactos"
                >
                  Contactos
                </a>{/* {
                  document.getElementById("contacto").addEventListener("click", ()=>{
                   `<h2>Hola mund o</h2>`
                  })
                } */}
              </li>
            </ul>
          </nav>
          <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
  </>
);
export default nav;
