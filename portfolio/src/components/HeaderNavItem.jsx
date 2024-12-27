import { Link } from "react-router-dom"

function HeaderNavItem({text, navLink}) {

  return (
    <li className="nav-item">
      <Link className="nav-link" to={navLink}>{text}</Link>
    </li>
  )
}

export default HeaderNavItem