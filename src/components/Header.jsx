import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >Host</NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >Vans</NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >About</NavLink>
      </nav>
    </header>
  );
}
