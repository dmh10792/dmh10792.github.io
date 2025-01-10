//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface props {
    className: string
}

const TwitterLink = ({className}: props) => {

    const openTwitter = () => {
        window.open("https://x.com/N3xusMaximus", "_blank", "noreferrer");
    }

    return (
        <div className={`${className}`} onClick={openTwitter}>
            <FontAwesomeIcon icon={faXTwitter} className="navBar-icon" size="2x"/>
        </div>
    )
}

export default TwitterLink;