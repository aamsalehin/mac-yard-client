import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinnerr from "../Spinner/Spinner";

function ManageItems() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://still-gorge-64636.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!product) {
    return <Spinnerr></Spinnerr>;
  }
  const handleDeleteItem = (id) => {
    const proceed = window.confirm("do you want to delete?");
    if (proceed) {
      const url = `https://still-gorge-64636.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remaining = product.filter((prod) => prod._id !== id);
          setProduct(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h5 className="h3 my-4">Manage Inventory</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Supplier Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod) => (
            <tr key={prod._id}>
              <td>{product.indexOf(prod) + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.supplierName}</td>
              <td>{prod.price}</td>
              <td>{prod.quantity}</td>
              <td>{prod.sold}</td>
              <td>
                <button
                  onClick={() => handleDeleteItem(prod._id)}
                  className="btn btn-danger"
                >
                  delete
                </button>
                <Link
                  className="btn btn-success ms-2"
                  to={`/inventory/${prod._id}`}
                >
                  update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Link className="btn btn-primary  m-auto" to="/additem">
          Add new item
        </Link>
      </div>
    </div>
  );
}

export default ManageItems;
