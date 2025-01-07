//Components
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface props {
    className: string
}

const ResumeLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <FontAwesomeIcon icon={faFile} size="2x"/>
        </Container>
    )
}

export default ResumeLink;