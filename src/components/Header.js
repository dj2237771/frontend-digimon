import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import React from "react";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>digimon</Navbar.Brand>
      <Link to="/">Favorites</Link>
      <Link to="/getAPIData">API digimon</Link>
    </Navbar>
  );
}
export default Header;
