import React from "react";
import "../style/style.scss";
import nube from "../img/nube.png";

const contacto = () => (
  <>
     <div className="row card l-section third-color s-py-2 fondo">
      <div class="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
        <div class="s-column second-color s-main-center lg-main-start lg-cross-start s-center lg-left"></div>

        <div className="ed-item ed-containe">
          <form>
            <h1 className="text">Contactatanos</h1>
            <div clasName="form-item ed-item">
              <input
                autocomplete
                type="text"
                required
                placeholder="Ingresa tu nombre o nombre de la empresa"
              />
            </div>
            <br></br>
            <div clasName="form-item ed-item">
              <input
                autoComplete
                clasName="form-item"
                type="email"
                required
                placeholder="Ingresa tu correo electronico"
              />
            </div>
            <br></br>
            <div clasName="form-item ed-item">
              <input
                autocomplete
                clasName="form-item"
                type="tel"
                required
                placeholder="Ingresa tu telefono"
              />
            </div>
            <br></br>
            <div clasName="form-item ed-item">
              <label autocomplete clasName="form-item ed-item"></label>
              <select>
                <option>¿Motivo por el cual esta aqui?</option>
                <option>Para crear mi web</option>
                <option>Hablar directamente con la empresa</option>
                <option>¿Quiero Saber mas de que se trata?</option>
                <option>Todas la anteriores</option>
              </select>
            </div>
            <br></br>
            <div clasName="form-item">
              <input autocomplete class="button second-color" type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div class="img-container">
        <img
          class="s-radius-1"
          src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div> 
    <footer className="main-footer fondo">
      <div className="main-container ed-grid s-center m-center lg-center ed-container main--footer-content">
        <h1 className="text">Multisite</h1>
        <p className="text">
          <h4 className="text">
            Telefono:<span className="text"> 80838098209809428</span>
          </h4>
          <h4 className="text">
            Correo:<span className="text"> 80838098209809428</span>
          </h4>
          <div className="s-cross-center s-main-center">
            <a href="#" clasName="s-mr-3">
              <img
                width="40"
                height="40"
                alt="facebook"
                src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png"
              />
            </a>
            &nbsp;
            &nbsp;
            
            <a href="#" className="">
              <img
                alt="instagram"
                src="https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670__340.png"
                width="40"
                height="40"
              />
            </a>
          </div>
        </p>

        <div
          className="main-container ed-grid s-center m-left lg-center"
          id=""
        ></div>
      </div>
    </footer>
  </>
);
export default contacto;
