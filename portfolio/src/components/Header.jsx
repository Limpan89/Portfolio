import HeaderNavItem from "./HeaderNavItem"
import { Download } from "react-bootstrap-icons"

function Header() {

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-dark bottom-border border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Linus Brobäck</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <HeaderNavItem text="Hem" navLink="/" />
              <HeaderNavItem text="About Me" navLink="/aboutme" />
              <HeaderNavItem text="Kunskap" navLink="/kunskap" />
              <HeaderNavItem text="Portfölj" />
              <HeaderNavItem text="Referens" navLink="/referens" />
              <HeaderNavItem text="Kontakt" navLink="/kontakt" />
            </ul>
            <a href="src/assets/CV.pdf" className="btn btn-outline-light" type="button"><Download /> Hämta CV</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header