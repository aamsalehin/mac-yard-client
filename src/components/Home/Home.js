import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";

import Spinnerr from "../Spinner/Spinner";
import Trainers from "../Trainers/Trainers";

const Home = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://still-gorge-64636.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  if (!product) {
    return <Spinnerr></Spinnerr>;
  }
  return (
    <>
      <Banner></Banner>
      <Products product={product}></Products>
      <Features></Features>
      <Trainers></Trainers>
    </>
  );
};
export default Home;
