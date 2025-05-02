//Utilities
import {NavLink} from "react-router-dom";
import { useEffect, useState } from "react";

//Components
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink";
import GithubLink from "../Links/GithubLink/GithubLink";
import TwitterLink from "../Links/TwitterLink/TwitterLink";
import ResumeLink from "../Links/ResumeLink/ResumeLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faBriefcase, faDiagramProject, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import {AppBar, Avatar, Button, Stack, Toolbar, Container} from '@mui/material';

//CSS
import './NavBar.css'


const NavBar = () => {

    return (
        <AppBar position="static">
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

                <Stack>
                    <Button>
                        <FontAwesomeIcon icon={faBriefcase} className="navBar-icon"/>
                        Experience
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="navBar-icon"/>
                        Skills
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faDiagramProject} className="navBar-icon"/>
                        Projects
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faEnvelope} className="navBar-icon"/>
                        Contact Me
                    </Button>
                </Stack>

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