import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-primary">
      <p>copyright Mac yard 2022</p>
      <div className="link-footer">
        <a href="/">
          <BsFacebook />
        </a>
        <a href="/">
          <BsInstagram />
        </a>
        <a href="/">
          <BsLinkedin />
        </a>
        <a href="/">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
