import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <Link to="/">LOGO</Link>
      <Navbar />
    </header>
  );
}

export default Header;
