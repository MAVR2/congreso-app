import { NavLink } from "react-router-dom";

export default function Navbar() {

    const linkClasses = ({ isActive }) =>
        isActive
            ? 'nav-link active text-primary fw-bold'
            : 'nav-link text-white';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <NavLink to={"/"} className="navbar-brand">
                    Congreso IT
                </NavLink>

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
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <NavLink to={"/"} className={linkClasses} end>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/about"} className={linkClasses}>
                                Sobre el Congreso
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={"/blog"} className={linkClasses}>
                                Agenda / Noticias
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}