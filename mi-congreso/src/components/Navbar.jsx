import { NavLink } from "react-router-dom";

export default function Navbar() {

    return(
        <>
        <nav className='navbar navbar-dark bg-dark'>
            <NavLink to={"/"} className='btn btn-outline-primary'>Home</NavLink>
            <NavLink to={"/about"} className='btn btn-outline-primary'>About</NavLink>
            <NavLink to={"/blog"} className='btn btn-outline-primary'>Blog</NavLink>
        </nav>
        </>
    );


}