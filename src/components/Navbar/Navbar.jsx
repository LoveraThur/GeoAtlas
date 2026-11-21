import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">


      <div className="navbar-links">
        <NavLink to="/pontos">Pontos</NavLink>
        <NavLink to="/pontos/novo">Cadastrar ponto</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;