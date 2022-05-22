import React from "react";
import { BsLock, BsCloud, BsSpeedometer } from "react-icons/bs";

export default function Features() {
  return (
    <div className="my-5 bg-dark py-5 ">
      <h3 className="h3 text-center my-4 fw-bold text-white">Features</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="feature-container shadow border rounded">
              <div className="icon text-center display-1 text-primary pb-4">
                <BsCloud></BsCloud>
              </div>
              <div className="f-heading h4 text-muted text-uppercase text-center pb-5">
                Latest Technology
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-container shadow-sm border rounded">
              <div className="icon text-center display-1 text-primary pb-4">
                <BsLock></BsLock>
              </div>
              <div className="f-heading h4 text-muted text-uppercase text-center pb-5">
                Safe and Secured
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feature-container shadow-sm border rounded">
              <div className="icon text-center display-1 text-primary pb-4">
                <BsSpeedometer></BsSpeedometer>
              </div>
              <div className="f-heading h4 text-muted text-uppercase text-center pb-5">
                First Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
