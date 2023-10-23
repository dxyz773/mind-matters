import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-stone-100 px-4 py-3 text-sm uppercase sm:px-6">
      <Link to="/"><img id="mmLogo" src="mmLogo.png" alt="Mind Matters Logo" /></Link>
      <Navbar />
    </header>
  );
}

export default Header;
