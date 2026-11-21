
import { NavLink } from "react-router-dom";
import { MapPin, PlusCircle } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/pontos" end>
        <MapPin size={22} />
        <span>Pontos</span>
      </NavLink>

      <NavLink to="/pontos/novo">
        <PlusCircle size={22} />
        <span>Cadastrar</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
