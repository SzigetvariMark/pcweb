import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--div">
        <h3>Céginformáció</h3>
        <ul className="footer--ul">
          <li className="footer--li">
            <a
              href="//"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              A webshopról
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Lépjen velünk kapcsdolatba
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Sajtó
            </a>
          </li>
        </ul>
      </div>
      <div className="footer--div">
        <h3>Ügyfélszolgálat</h3>
        <ul className="footer--ul">
          <li className="footer--li">
            <a
              href="//"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Visszaküldési és visszatérítési szabályzat
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Szellemi tulajdonra vonatkozó szabályzat
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Szállítási információk
            </a>
          </li>
        </ul>
      </div>
      <div className="footer--div">
        <h3>Súgó</h3>
        <ul className="footer--ul">
          <li className="footer--li">
            <a
              href="//"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Ügyfélszolgálat és GYIK
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Vásárlásvédelem
            </a>
          </li>
          <li className="footer--li">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Együttműködés velünk
            </a>
          </li>
        </ul>
      </div>
      <div className="footer--div">
        <h3>Elérhetőségeink</h3>
        <ul className="footer--ul">
          <li>A webshopról</li>
          <li>Lépjen velünk kapcsdolatba</li>
          <li>Sajtó</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
