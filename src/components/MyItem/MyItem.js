import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

function MyItem() {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://still-gorge-64636.herokuapp.com/myitem?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user]);
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
      <h3 className="h3 text-center fw-bold my-5">My items</h3>
      {product.length == 0 ? (
        <h4 className="h4 fw-bold my-5 text-center text-muted">No items!</h4>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Supplier Name</th>
              <th>Price</th>
              <th>Quantity</th>
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
      )}
    </div>
  );
}

export default MyItem;
