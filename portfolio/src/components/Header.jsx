import HeaderNavItem from "./HeaderNavItem"

function Header() {

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-dark bottom-border border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <HeaderNavItem text="Hem" />
              <HeaderNavItem text="About Me" />
              <HeaderNavItem text="Kunskap" />
              <HeaderNavItem text="Portfölj" />
              <HeaderNavItem text="Referens" />
              <HeaderNavItem text="Kontakt" />
            </ul>
            <button className="btn btn-outline-light" type="button">Hämta CV</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header