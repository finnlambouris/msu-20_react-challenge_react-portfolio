import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const currentPage = useLocation().pathname;
  
  return (
    <header className="container d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h1 className="fs-1">Finn Lambouris</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/about"
              className={currentPage === '/' ? 'nav-link active' : currentPage === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
