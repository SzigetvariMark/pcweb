import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="header">
            <nav className="top-nav">
                <div className="top-nav-div">
                    <input type="submit" className="hun" value=" "/>
                    <input type="submit" className="eng" value=" "/>  
                </div>
        
                <ul>
                    <a><CustomLink to="/basket">Basket</CustomLink></a>
                    <a><CustomLink to="/login">Login / Register</CustomLink></a>
                </ul>
            </nav>
            <nav className="nav-container">
                <Link to="/Home" className="site-title">
                    <img src="img/image3.png.png" alt="kep" className="title-img"></img>
                </Link>
                <ul>
                    <CustomLink to="/about">Rólunk</CustomLink>
                    <CustomLink to="/new_products">Újdonságok</CustomLink>
                    <CustomLink to="/actions">Akciók</CustomLink>
                </ul>
                <form className="form-container">
                    <input type="text" className="search-text"/> 
                    <button type="submit" className="search-button"> <FaSearch /> </button>
                </form>
                
            </nav>
        </header>
        
    )
    
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}