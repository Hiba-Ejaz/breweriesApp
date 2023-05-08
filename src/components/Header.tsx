import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <ul>
      <li className="left">
          <h1>Free and open-source brewery data</h1>
        </li>
      </ul>
      <ul className="right">
       
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breweries">BREWERIES BY NAME</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
