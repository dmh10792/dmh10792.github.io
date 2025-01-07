//Utilities
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

//Components
import Image from 'react-bootstrap/Image';
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faScrewdriverWrench, faBriefcase, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

//CSS
import './NavBar.css'

const NavBar = () => {

    return (
        <Container className="navBar-body">
            
            <div className="navbar-image-container">
                <Image src="src/assets/images/ProfileImage.jpg" roundedCircle />
            </div>
            
            <Container className="navbar-link-container">
                <Link to={'/'} className="navBar-link">
                    <FontAwesomeIcon icon={faHouse} className="navBar-icon"/>
                    Home
                </Link>
                <Link to={'/about'} className="navBar-link">
                    <FontAwesomeIcon icon={faUser} className="navBar-icon"/>
                    About
                </Link>
                <Link to={'/skills'} className="navBar-link">
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                    Skills
                </Link>
                <Link to={'/experience'} className="navBar-link">
                    <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                    Experience
                </Link>
                <Link to={'/projects'} className="navBar-link">
                    <FontAwesomeIcon icon={faDiagramProject} className="navBar-icon"/>
                    Projects
                </Link>
            </Container>

            <Container className="navBar-icon-container">  
                    <Col>
                        <LinkedInLink className="nav-icon-link linkedin"/>
                        <Tooltip anchorSelect=".linkedin" place="top">
                            My LinkedIn Profile
                        </Tooltip>

                        <TwitterLink className="nav-icon-link twitter"/>
                        <Tooltip anchorSelect=".twitter" place="top">
                            My X Profile
                        </Tooltip>                        
                    </Col>
                    <Col>
                        <GithubLink className="nav-icon-link github"/>
                        <Tooltip anchorSelect=".github" place="bottom">
                            My Github Profile
                        </Tooltip>

                        <ResumeLink className="nav-icon-link resume"/>
                        <Tooltip anchorSelect=".resume" place="bottom">
                            View My Resume
                        </Tooltip>
                    </Col>
            </Container>
            
        </Container>
    )
}

export default NavBar;