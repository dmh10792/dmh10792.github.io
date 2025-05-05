//Utilities
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

//Components
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faScrewdriverWrench, faBriefcase, faDiagramProject, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import {AppBar, Avatar, Button, Stack, Toolbar, Container, Box, Menu, MenuItem} from '@mui/material';
import * as React from "react";


const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static"
                sx={{
                    height: '20%'
                }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Tooltip title="Back to the top">
                        <Avatar
                            alt="An image of the site suthor"
                            src="src/assets/images/ProfileImage.jpg"
                            sx={{
                                border: "#8c59aa 3px solid",
                                boxShadow: "5px 3px 5px black",
                                width: 56,
                                height: 56,
                            }}
                        />
                    </Tooltip>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuItem>
                            <Button sx={{textAlign: 'center'}}>
                                <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                                Experience
                            </Button>
                        </MenuItem>

                        <MenuItem>
                            <Button sx={{textAlign: 'center'}}>
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                                Skills
                            </Button>
                        </MenuItem>

                        <MenuItem>
                            <Button sx={{textAlign: 'center'}}>
                                {/*<FontAwesomeIcon icon={faDiagramProject} className="navBar-icon"/>*/}
                                Projects
                            </Button>
                        </MenuItem>

                        <MenuItem>
                            <Button sx={{textAlign: 'center'}}>
                                <FontAwesomeIcon icon={faEnvelope} className="navBar-icon"/>
                                Contact Me
                            </Button>
                        </MenuItem>
                    </Menu>

                    {/*<div className="navBar-icon-container">  */}
                    {/*        */}
                    {/*        <div className="nav-icon-row">*/}
                    {/*            <LinkedInLink className="nav-icon-link linkedin" />*/}
                    {/*            <Tooltip anchorSelect=".linkedin" place="top">*/}
                    {/*                My LinkedIn Profile*/}
                    {/*            </Tooltip>*/}

                    {/*            <TwitterLink className="nav-icon-link twitter"/>*/}
                    {/*            <Tooltip anchorSelect=".twitter" place="top">*/}
                    {/*                My X Profile*/}
                    {/*            </Tooltip> */}
                    {/*        </div>*/}

                    {/*        */}
                    {/*        <div className="nav-icon-row">*/}
                    {/*            <GithubLink className="nav-icon-link github"/>*/}
                    {/*            <Tooltip anchorSelect=".github" place="bottom">*/}
                    {/*                My Github Profile*/}
                    {/*            </Tooltip>*/}

                    {/*            <ResumeLink className="nav-icon-link resume"/>*/}
                    {/*            <Tooltip anchorSelect=".resume" place="bottom">*/}
                    {/*                View My Resume*/}
                    {/*            </Tooltip>*/}
                    {/*        </div>*/}
                    {/*</div>*/}

                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default NavBar;