import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { ser } = props;
  return (
    <div className="service">
      <div className="ser-icon">
        <img
          className="img-fluid w-75 m-auto d-block"
          alt="images"
          src={ser.img}
        ></img>
      </div>
      <h3 className="ser-heading">{ser.serviceName}</h3>
      <p className="ser-desc">{ser.desc}</p>
      <p className="ser-price">
        $ <span>{ser.price}</span>/Mo
      </p>
      <Link
        className="btn btn-warning m-auto d-block text-white fw-bold text-uppercase"
        to="/checkout"
      >
        Checkout
      </Link>
    </div>
  );
};

export default Service;
