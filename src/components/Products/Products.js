import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";
import React from "react";
function Products(props) {
  const { product } = props;
  return (
    <>
      <h3 className="h3 fw-bold my-4 text-center text-uppercase">Products</h3>
      <div className="service-wrapper">
        {product.slice(0, 6).map(prd => (
          <Product prd={prd} key={prd._id}></Product>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          className="btn btn-primary text-uppercase fw-bold "
          to="/manageinventory"
        >
          Manage Inventory
        </Link>
      </div>
    </>
  );
}

export default Products;
