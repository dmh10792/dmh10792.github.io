//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const LinkedInLink = () => {

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/desmond-herring-a33258153/", "_blank", "noreferrer");
    }

    return (
        <Tooltip title={'My LinkedIn Page'}>
            <IconButton onClick={openLinkedin}>
                <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2xs"
                    style={{color: "white"}}
                />
            </IconButton>
        </Tooltip>
    )
}

export default LinkedInLink;