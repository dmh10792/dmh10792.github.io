//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


interface props {
    className: string
}

const LinkedInLink = ({className}: props) => {

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/desmond-herring-a33258153/", "_blank", "noreferrer");
    }

    return (
        <div
            className={`${className}`}
            onClick={openLinkedin}
        >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
        </div>
    )
}

export default LinkedInLink;