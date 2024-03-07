import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <div className="container">
          <div className="navLogo">
            <Link to="/">
              <img className="logo" src="/assets/Sunny.svg" alt="Sunny Logo" />
            </Link>
          </div>
          <div className="logoVers">beta R1.0</div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
