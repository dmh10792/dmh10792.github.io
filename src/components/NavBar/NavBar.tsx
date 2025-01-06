//Utilities
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

//Components
import Image from 'react-bootstrap/Image';
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";

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

            <Container className="navBar-icon-container">  
                    <Col>
                        <LinkedInLink className="nav-icon-link"/>
                        <TwitterLink className="nav-icon-link"/>
                    </Col>
                    <Col>
                        <GithubLink className="nav-icon-link"/>
                        <ResumeLink className="nav-icon-link"/>
                    </Col>
            </Container>
            
        </Container>
    )
}

export default NavBar;