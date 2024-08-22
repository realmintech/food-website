import React from 'react'
import './Footer.css'
import { FaBowlFood, FaLinkedin } from 'react-icons/fa6'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span>
            <FaBowlFood />
            RealM
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          </p>
          <div className="footer-social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-center-content">
          <h2 className="peak">COMPANY</h2>
          <ul>
            <li className="list">Home</li>
            <li className="list">About</li>
            <li className="list">Delivery</li>
            <li className="list">Privacy policy</li>
          </ul>
        </div>
        <div className="footer-center-content">
          <h2 className="peak">SPONSOR</h2>
          <ul>
            <li className="list">UNICEF</li>
            <li className="list">FAO</li>
            <li className="list">IITA</li>
            <li className="list">SON</li>
          </ul>
        </div>
        <div className="footer-right-content">
          <h2 className="peak">GET IN TOUCH</h2>
          <ul>
            <li className="list">08133433956</li>
            <li className="list">Adesinamariam7@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ RealM.com . All right reserved.
      </p>
    </div>
  );
}

export default Footer