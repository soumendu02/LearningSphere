import React from "react";
import "./footer.css";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; LearningSphere . All rights reserved. <br /> <a href="">Soumendu Tarafdar</a>
        </p>
        <div className="social-links">
          <a href="">
          <ImFacebook2 />
          </a>
          <a href="">
            <FaTwitterSquare />
          </a>
          <a href="">
            <FaSquareInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;