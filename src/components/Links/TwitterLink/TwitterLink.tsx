//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface props {
    className: string
}

const TwitterLink = ({className}: props) => {

    return (
        <div className={`${className}`} >
            <FontAwesomeIcon icon={faXTwitter} className="navBar-icon" size="2x"/>
        </div>
    )
}

export default TwitterLink;