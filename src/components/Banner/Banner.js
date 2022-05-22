import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel className="custom-slider">
        <Carousel.Item className="car-item">
          <span></span>
          <img
            className="d-block img-fluid w-100 car-image"
            src="https://img.freepik.com/free-vector/laptop-computer-front-top-view_107791-1135.jpg?t=st=1651990236~exp=1651990836~hmac=dd884f7e352cdf32fd2ef122f77fd8c788ea42a65722ad0b80be31c731622b6a&w=1800"
            alt="First slide"
          />
          <Carousel.Caption className="slider-caption">
            <h3>Mac-yard</h3>
            <p>We Manage Mac warhouse</p>
            <Button variant="light">see more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <span></span>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/artist-workplace-desk-with-tools-laptop_23-2148881926.jpg?t=st=1651990436~exp=1651991036~hmac=4a0c2e4544ff183ce9b059172f0e3ed19e12e4b9a995d8e9fcc95a433732947f&w=1480"
            alt="Second slide"
          />

          <Carousel.Caption className="slider-caption">
            <h3>Mac-yard</h3>
            <p>We Manage Mac warhouse</p>
            <Button variant="light">see more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="car-item">
          <span></span>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-psd/plants-macbook-mock-up_23-2148373211.jpg?t=st=1651990436~exp=1651991036~hmac=3ddaf7cb877db02a4bfa59441625d7952ffa96c8b356290c01aa3895d4f51a5d&w=1480"
            alt="Third slide"
          />

          <Carousel.Caption className="slider-caption">
            <h3>Mac-yard</h3>
            <p>We Manage Mac warhouse</p>
            <Button variant="light">see more</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Banner;
