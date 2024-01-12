import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import Login from "../register_login/Login";
import { FaSearch } from "react-icons/fa";
import user_image from "/img/Login.png";
import basket_image from "/img/basket.png";

export default function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <nav className="header">
      <nav className="nav-container">
        <Link to="/" className="site-title">
          <img src="img/lgo.jpeg" alt="kep" className="title-img"></img>
        </Link>
        <ul>
          <CustomLink to="/about">Rólunk</CustomLink>
          <CustomLink to="/new_products">Újdonságok</CustomLink>
          <CustomLink to="/actions">Akciók</CustomLink>
        </ul>
        <form className="form-container">
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
          <input
            type="text"
            className="search-text"
            placeholder="videókártya"
          ></input>
        </form>
        <div className="top-nav-div">
          <input type="submit" className="hun" value=" " />
          <input type="submit" className="eng" value=" " />
        </div>
        <ul>
          <a>
            <CustomLink to="/basket">
              <img src={basket_image} alt="basket" className="basket--image" />
            </CustomLink>
          </a>
          <a>
            <button
              className="login--image"
              onClick={() => setButtonPopup(true)}
            >
              <img src={user_image} alt="user" className="user--image" />
            </button>
            <Login
              className="log--reg"
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
            ></Login>
          </a>
        </ul>
      </nav>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
