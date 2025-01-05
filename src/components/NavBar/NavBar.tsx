//Utilities
import { Link } from "react-router-dom";

//Components
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

//CSS
import './NavBar.css'

const NavBar = () => {

    return (
        <Container className="navBar-body">
            <div className="navbar-image-container">
                <Image src="src/assets/images/ProfileImage.jpg" roundedCircle />
            </div>
            
            <Container className="navbar-link-container">
                <Link to={'/'} className="navBar-link">Home</Link>
                <Link to={'/about'} className="navBar-link">About</Link>
                <Link to={'/skills'} className="navBar-link">Skills</Link>
                <Link to={'/experience'} className="navBar-link">Experience</Link>
                <Link to={'/projects'} className="navBar-link">Projects</Link>
                <Link to={'/contact'} className="navBar-link">Contact</Link>
            </Container>
            
        </Container>
    )
}

export default NavBar;