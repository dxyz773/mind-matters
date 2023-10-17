import { Link } from "react-router-dom";
function Navbar() {
  return (
    <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
      <li>
        <Link to="/mission">Our Mission</Link>
      </li>
      <li>
        <Link to="/wellness-resources">Wellness Resources</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      |
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  );
}

export default Navbar;
