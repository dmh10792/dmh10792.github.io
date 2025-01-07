//Components
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface props {
    className: string
}

const GithubLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </Container>
    )
}

export default GithubLink;