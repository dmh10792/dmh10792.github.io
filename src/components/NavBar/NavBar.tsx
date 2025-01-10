//Utilities
import { NavLink } from "react-router-dom";
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
                <Image className="profile-image" src="src/assets/images/ProfileImage.jpg" roundedCircle />
            </div>
            
            <Container className="navbar-link-container">
                <NavLink to={'/'} className={({isActive, isPending}) => 
                    isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                    <FontAwesomeIcon icon={faHouse} className="navBar-icon"/>
                    Home
                </NavLink>
                <NavLink to={'/about'} className={({isActive, isPending}) => 
                    isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                    <FontAwesomeIcon icon={faUser} className="navBar-icon"/>
                    About
                </NavLink>
                <NavLink to={'/skills'} className={({isActive, isPending}) => 
                    isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                    <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                    Skills
                </NavLink>
                <NavLink to={'/experience'} 
                    className={({isActive, isPending}) => 
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} 
                >
                    <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                    Experience
                </NavLink>
                <NavLink to={'/projects'} className={({isActive, isPending}) => 
                    isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                    <FontAwesomeIcon icon={faDiagramProject} className="navBar-icon"/>
                    Projects
                </NavLink>
            </Container>

            <div className="navBar-icon-container">  
                    
                    <div className="nav-icon-row">
                        <LinkedInLink className="nav-icon-link linkedin" />
                        <Tooltip anchorSelect=".linkedin" place="top">
                            My LinkedIn Profile
                        </Tooltip>

                        <TwitterLink className="nav-icon-link twitter"/>
                        <Tooltip anchorSelect=".twitter" place="top">
                            My X Profile
                        </Tooltip> 
                    </div>
            
                    
                    <div className="nav-icon-row">
                        <GithubLink className="nav-icon-link github"/>
                        <Tooltip anchorSelect=".github" place="bottom">
                            My Github Profile
                        </Tooltip>

                        <ResumeLink className="nav-icon-link resume"/>
                        <Tooltip anchorSelect=".resume" place="bottom">
                            View My Resume
                        </Tooltip>
                    </div>
            </div>
            
        </Container>
    )
}

export default NavBar;