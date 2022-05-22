import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
function AddItem() {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = `https://still-gorge-64636.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("inserted successfullly");
      });
  };

  return (
    <div>
      <h3 className="h3 fw-bold my-4 text-center">Add new Item</h3>
      <div className="container">
        <form
          className="d-flex flex-column form w-75 m-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="email"
            className="mb-3 form-control"
            type="email"
            value={user.email}
            readOnly
            {...register("email", { required: true })}
          />
          <input
            placeholder="name"
            className="mb-3 form-control"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="image url"
            className="mb-3 form-control"
            type="text"
            {...register("img", { required: true })}
          />
          {errors.img && (
            <span className="text-danger">This field is required</span>
          )}
          <textarea
            placeholder="description"
            className="mb-3 form-control"
            type="text"
            {...register("desc", { required: true })}
          />
          {errors.desc && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="price"
            className="mb-3 form-control"
            type="text"
            {...register("price")}
          />
          {errors.price && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="quantity"
            className="mb-3 form-control"
            type="number"
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="text-danger">This field is required</span>
          )}
          <input
            placeholder="supplier name"
            type="text"
            className="mb-3 form-control"
            {...register("supplierName", { required: true })}
          />

          {errors.supplierName && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            value="add item"
            className="mb-3 btn btn-primary"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default AddItem;
