//Utilities
import { NavLink } from "react-router-dom";

//Components
import Image from 'react-bootstrap/Image';
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faScrewdriverWrench, faBriefcase, faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Button, Drawer} from '@mui/material';

//CSS
import './NavBar.css'
import { useState } from "react";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div className="navBar-body">
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className="navbar-image-container">
                <Image className="profile-image" src="src/assets/images/ProfileImage.jpg" roundedCircle />
            </div>
            
            <div className="navbar-link-container">
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
            </div>

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
            </Drawer>
        </div>
        
        // <Container className="navBar-body">
            

            
        // </Container>
    )
}

export default NavBar;