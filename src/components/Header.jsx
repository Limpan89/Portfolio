import HeaderNavItem from "./HeaderNavItem";
import { Download } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

function Header() {
  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg bg-dark bottom-border border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="/">
            Linus Brobäck
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <HeaderNavItem text="Hem" navLink={navLinks.home} />
              <HeaderNavItem text="About Me" navLink={navLinks["about-me"]} />
              <HeaderNavItem text="Kunskap" navLink={navLinks.knowledge} />
              <HeaderNavItem text="Portfölj" navLink={navLinks.portfolio} />
              <HeaderNavItem text="Referens" navLink={navLinks.reference} />
            </ul>
            <a
              href="src/assets/CV.pdf"
              className="btn btn-outline-light"
              type="button"
            >
              Hämta CV <Download />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
