import { Link, useLocation } from "react-router-dom";

function HeaderNavItem({ text, navLink }) {
  const location = useLocation();

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${location.pathname === navLink ? "active" : ""}`}
        to={navLink}
      >
        {text}
      </Link>
    </li>
  );
}

export default HeaderNavItem;
