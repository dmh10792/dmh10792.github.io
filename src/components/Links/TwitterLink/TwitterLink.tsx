//Components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter} from "@fortawesome/free-brands-svg-icons";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


const TwitterLink = () => {

    const openTwitter = () => {
        window.open("https://x.com/N3xusMaximus", "_blank", "noreferrer");
    }

    return (
        <Tooltip title={'My X Page'}>
            <IconButton onClick={openTwitter}>
                <FontAwesomeIcon
                    icon={faXTwitter}
                    size="2xs"
                    style={{color: "white"}}
                />
            </IconButton>
        </Tooltip>
    )
}

export default TwitterLink;