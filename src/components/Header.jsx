import { Link } from "react-router-dom";
import "../css/bootstrap.min.css";
import Buscador from "./Buscador";

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-xxl navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AlkeFlix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/listado">
                Listado
              </Link>
            </li>
          </ul>
        </div>
        <Buscador />
      </div>
    </nav>
  </header>
  );
}

export default Header;
