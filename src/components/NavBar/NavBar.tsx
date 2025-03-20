//Utilities
import { NavLink } from "react-router-dom";

//Components
import Image from 'react-bootstrap/Image';
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faScrewdriverWrench, faBriefcase, faDiagramProject, faBars } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Button, Drawer} from '@mui/material';

//CSS
import './NavBar.css'
import { useEffect, useState } from "react";

const NavBar = () => {

    // const initialState = ;
    const [width, setWidth] = useState(window.innerWidth);

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        if(window.innerWidth >= 1024) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }

    const handleNav = () => {
        if(window.innerWidth < 1024) {
            setOpen(false);
        }
    }

    /**
     * On clicking the background the drawer still closes.
     */

    return (
        <div className="navBar-body">
            <Button onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faBars} className="menu-button" size="3x" />
            </Button>

            <Drawer 
                open={open} 
                onClose={toggleDrawer(false)}
                className="navBar-drawer"
                BackdropProps={{ invisible: true }}
            >
                <div className="navbar-image-container">
                    <Image className="profile-image" src="src/assets/images/ProfileImage.jpg" roundedCircle />
                </div>
                
                <div className="navbar-link-container">
                    <NavLink to={'/'} onClick={handleNav} className={({isActive, isPending}) => 
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faHouse} className="navBar-icon"/>
                        Home
                    </NavLink>
                    <NavLink to={'/about'} onClick={handleNav} className={({isActive, isPending}) => 
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faUser} className="navBar-icon"/>
                        About
                    </NavLink>
                    <NavLink to={'/skills'} onClick={handleNav} className={({isActive, isPending}) => 
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                        Skills
                    </NavLink>
                    <NavLink to={'/experience'} onClick={handleNav} 
                        className={({isActive, isPending}) => 
                            isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} 
                    >
                        <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                        Experience
                    </NavLink>
                    <NavLink to={'/projects'} onClick={handleNav} className={({isActive, isPending}) => 
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
        
    )
}

export default NavBar;