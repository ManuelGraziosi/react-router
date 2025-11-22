import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "Chi siamo",
      path: "/chi-siamo",
    },
    {
      title: "Prodotti",
      path: "/prodotti",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            React Router Store
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
            <ul className="navbar-nav">
              {navLinks.map((curLink, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={curLink.path}
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">
                  Coming soon...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
