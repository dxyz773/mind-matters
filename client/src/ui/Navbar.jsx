import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("psg_auth_token") || null;

  async function logout() {
    localStorage.removeItem("psg_auth_token");

    navigate("/");
  }

  return (
    <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
      <li>
        <Link to="/wellness-resources">Wellness Resources</Link>
      </li>
      {authToken ? (
        <li onClick={logout}>Logout</li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          |
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
