//Components
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface props {
    className: string
}

const TwitterLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <FontAwesomeIcon icon={faXTwitter} className="navBar-icon" size="2x"/>
        </Container>
    )
}

export default TwitterLink;