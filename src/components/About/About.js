import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container my-5 ">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-photo/young-blackhaired-man-demonstrating-something-bright-laptop_231208-2322.jpg?t=st=1652380506~exp=1652381106~hmac=083802e6cb4d0112b8e6e7b61cd56014030e50352045695b97d90d9d2c44ba98&w=1480"
            className="img-fluid w-75"
            alt="macbook"
          />
        </div>
        <div className="col-lg-6">
          <h5 className="h3 fw-bold mb-4">Mac Inventory</h5>
          <p className="lead">
            Manage multiple warehouses, transfer stock between them and generate
            reports to get better insights about warehouse management, with mac
            yard.
          </p>
          <h6>{process.env.API_KEY}</h6>
          <button className="btn btn-primary text-uppercase mt-4 px-5">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
