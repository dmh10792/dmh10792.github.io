//Components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


const GithubLink = () => {

    const openGitHub = () => {
        window.open("https://github.com/dmh10792", "_blank", "noreferrer");
    }

    return (
        <Tooltip title={'My Github Page'}>
            <IconButton onClick={openGitHub}>
                <FontAwesomeIcon
                    icon={faGithub}
                    size="2xs"
                    style={{color: "white"}}
                />
            </IconButton>
        </Tooltip>

    )
}

export default GithubLink;