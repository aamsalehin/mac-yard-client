import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="service-wrapper">
      {service.map((ser) => (
        <Service ser={ser} key={ser.id}></Service>
      ))}
    </div>
  );
};
export default Services;
