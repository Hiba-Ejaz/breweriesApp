import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Typography } from "@mui/material"

function Header() {
  return (
    <nav>
      <ul className="left">
      <li >
          <Typography variant="h4">Free and open-source brewery data</Typography>
        </li>
      </ul>
      <ul className="right">
       
        <li>
          <Link to="/"><Typography variant="h6">Home</Typography></Link>
        </li>
        <li>
          <Link to="/breweries"><Typography variant="h6"> Search Breweries By Name</Typography></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
