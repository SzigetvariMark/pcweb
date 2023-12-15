import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="top-nav">
                <h3>top-nav</h3>
                <ul>
                    <a><CustomLink to="/login">Bejelentkezés / Regisztráció</CustomLink></a>
                    <a><CustomLink to="/basket">Cart</CustomLink></a>
                </ul>
            </nav>
            <nav className="nav-container">
                <Link to="/Home" className="site-title">
                    <img src="img/image3.png.png" alt="kep" className="title-img"></img>
                </Link>
                <ul>
                    <CustomLink to="/about">Rólunk</CustomLink>
                </ul>
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