//Components
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


interface props {
    className: string
}

const LinkedInLink = ({className}: props) => {

    return (
        <Container 
            className={`${className}`}
        >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
        </Container>
    )
}

export default LinkedInLink;