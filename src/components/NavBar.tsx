import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/skills'}>Skills</Link>
            <Link to={'/experience'}>Experience</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/contact'}>Contact</Link>
        </>
    )
}

export default NavBar;