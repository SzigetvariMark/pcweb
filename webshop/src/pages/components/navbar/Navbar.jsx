import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import user_image from "/public/img/person-outline.png";

export default function Navbar() {
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
          <input type="text" className="search-text" />
          <button type="submit" className="search-button">
            {" "}
            <FaSearch />{" "}
          </button>
        </form>
        <div className="top-nav-div">
          <input type="submit" className="hun" value=" " />
          <input type="submit" className="eng" value=" " />
        </div>
        <ul>
          <a>
            <CustomLink to="/basket">Kosár</CustomLink>
          </a>
          <a>
            <CustomLink to="/login" className="log--reg">
              <img src={user_image} alt="user" className="user--image" />
              Kosár
            </CustomLink>
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
