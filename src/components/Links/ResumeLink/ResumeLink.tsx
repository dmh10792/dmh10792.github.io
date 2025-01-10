//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface props {
    className: string
}

const ResumeLink = ({className}: props) => {

    const openResume = () => {
        window.open("src/assets/docs/resume.pdf", "_blank", "noreferrer");
    }

    return (
        <div className={`${className}`} onClick={openResume}>
            <FontAwesomeIcon icon={faFile} size="2x"/>
        </div>
    )
}

export default ResumeLink;