//Components
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


const ResumeLink = () => {

    const openResume = () => {
        window.open("src/assets/docs/resume.pdf", "_blank", "noreferrer");
    }

    return (
        <Tooltip title={'Open my resume'}>
            <IconButton onClick={openResume}>
                <FontAwesomeIcon
                    icon={faFile}
                    size="2xs"
                    style={{color: "white"}}
                />
            </IconButton>
        </Tooltip>
    )
}

export default ResumeLink;