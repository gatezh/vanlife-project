import { Link, NavLink } from "react-router-dom";
import loginIcon from "../assets/images/avatar-icon.png";

export default function Header() {

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >Host</NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >Vans</NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => isActive ? "active-nav" : null}
        >About</NavLink>
        <Link to="login" className="login-link">
          <img
            src={loginIcon}
            className="login-icon"
          />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
