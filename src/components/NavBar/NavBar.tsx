//Utilities
import {Link, NavLink} from "react-router-dom";
import { useEffect, useState } from "react";

//Components
import Image from 'react-bootstrap/Image';
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faScrewdriverWrench, faBriefcase, faDiagramProject, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Button, Drawer} from '@mui/material';

//CSS
import './NavBar.css'


const NavBar = () => {


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_width, setWidth] = useState(window.innerWidth);
    const [drawerVariant, setVariant] = useState<'permanent' | 'persistent' | 'temporary'>('permanent');
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
            setVariant("persistent");
        } else {
            setOpen(false);
            setVariant("temporary");
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
                variant={drawerVariant}
                BackdropProps={{ invisible: true }}
            >

                <div className="navbar-image-container" onClick={handleNav}>
                    <Link to={'/'} onClick={handleNav}>
                        <Image className="profile-image" src="src/assets/images/ProfileImage.jpg" roundedCircle />
                    </Link>
                </div>

                <Tooltip anchorSelect=".profile-image" place="bottom">
                    Home Page
                </Tooltip>

                <div className="navbar-link-container">

                    <NavLink to={'/experience'} onClick={handleNav}
                        className={({isActive, isPending}) =>
                            isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"}
                    >
                        <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                        Experience
                    </NavLink>
                    <NavLink to={'/skills'} onClick={handleNav} className={({isActive, isPending}) =>
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                        Skills
                    </NavLink>
                    <NavLink to={'/projects'} onClick={handleNav} className={({isActive, isPending}) =>
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faDiagramProject} className="navBar-icon"/>
                        Projects
                    </NavLink>
                    <NavLink to={'/about'} onClick={handleNav} className={({isActive, isPending}) =>
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faUser} className="navBar-icon"/>
                        About
                    </NavLink>
                    <NavLink to={'/contact'} onClick={handleNav} className={({isActive, isPending}) =>
                        isPending ? "pending navBar-link" : isActive ? "active navBar-link" : "navBar-link"} >
                        <FontAwesomeIcon icon={faEnvelope} className="navBar-icon"/>
                        Contact Me
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