import React from "react";
import "../style/style.scss";
import PropTypes from "prop-types";

const card = ({imagen, titulo, des, mas}) => (
  <>
    <article className="card">
      <div id={titulo} className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img className="img-container cardH" src={imagen} alt={titulo} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">{`${titulo}`}</h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container"></div>
            </div>
            <span className="small ed-grid s-center m-center lg-center">{`${des}`}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a
            className="button--ghost-alert button--tiny"
            target="_blank"
            href={mas}
          >
            Ver mas
          </a>
        </div>
      </div>
    </article>
  </>
);
card.propTypes = {
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  des: PropTypes.string,
  mas: PropTypes.string,
};
card.defaultProps = {
  titulo: "No se encontro un titulo",
  imagen: "No hay imagen",
  des: "No hay una descripcion",
  mas: "404",
};
export default card;
