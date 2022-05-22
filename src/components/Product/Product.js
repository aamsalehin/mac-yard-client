import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = props => {
  const { prd } = props;
  return (
    <div className="service">
      <div className="ser-icon">
        <img
          className="img-fluid w-75 m-auto d-block"
          alt="images"
          src={prd.img}
        ></img>
      </div>
      <h3 className="ser-heading">{prd.name}</h3>
      <p className="ser-desc">{prd.desc}</p>
      <p className="ser-price">
        price : $ <span>{prd.price}</span>
      </p>
      <p className="text-muted small text-center">
        supplier : {prd.supplierName}
      </p>
      <p className="text-muted lead text-center">Quantity : {prd.quantity}</p>

      <Link
        className="btn btn-primary m-auto d-block text-white fw-bold text-uppercase"
        to={`/inventory/${prd._id}`}
      >
        Update product
      </Link>
    </div>
  );
};
export default Product;
