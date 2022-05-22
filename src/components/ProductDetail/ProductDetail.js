import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Spinnerr from "../Spinner/Spinner";

export default function ProductDetail() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState([]);
  const [loading, setloading] = useState(false);
  const [sold, setSold] = useState([]);

  useEffect(() => {
    fetch(`https://still-gorge-64636.herokuapp.com/inventory/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productID]);
  // if (!product.quantity) {
  //   return <Spinnerr></Spinnerr>;
  // }

  const handleAddQuantity = (e) => {
    e.preventDefault();
    const addQty = e.target.number.value;
    let newQty = 0;

    if (loading) {
      newQty = qty + parseInt(addQty);
    } else {
      newQty = parseInt(addQty) + parseInt(product.quantity);
    }

    fetch(`https://still-gorge-64636.herokuapp.com/inventory/${productID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQty }),
    })
      .then((res) => res.json())
      .then((result) => {
        setQty(newQty);
        setloading(true);
        e.target.number.value = "";
      });
  };

  const handleDelivered = (e) => {
    e.preventDefault();
    let newSold = 0;
    let newQty = 0;
    if (loading && qty == 0) {
      alert("stock out");
      return;
    }
    if (!loading && product.quantity == 0) {
      alert("stock out");
      return;
    }
    if (loading) {
      newQty = qty - 1;
      newSold = sold + 1;
    } else {
      newQty = product.quantity - 1;
      newSold = product.sold + 1;
    }

    fetch(`https://still-gorge-64636.herokuapp.com/inventory/${productID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQty, newSold }),
    })
      .then((res) => res.json())
      .then((result) => {
        setQty(newQty);
        setSold(newSold);
        setloading(true);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="w-50 m-auto img-fluid"
              src={product.img}
              alt="product"
            />
          </div>
          <div className="col-lg-6 ">
            <h3 className="text-uppercase mb-2"> {product.name}</h3>

            <p className="text-muted lead">{product.desc}</p>
            <p className="text-muted small">price : ${product.price}</p>
            <p className="text-muted small">supplier: {product.supplierName}</p>
            <p className="text-muted small">
              Quantity : {loading ? qty : product.quantity}
            </p>
            <p>sold : {loading ? sold : product.sold}</p>
            <form onSubmit={handleAddQuantity} className=" form ">
              <div className="form-group">
                <input
                  className=" form-control w-50 d-inline "
                  type="number"
                  name="number"
                  placeholder="type number of product want to add"
                />
                <input
                  type="submit"
                  value="add"
                  className="btn btn-primary btn ms-2"
                />
              </div>
            </form>
            <form className="mt-3" onSubmit={handleDelivered}>
              <button className="btn btn-success">delivered</button>
            </form>
            <Link className="btn btn-info mt-3" to="/manageinventory">
              Manage Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
