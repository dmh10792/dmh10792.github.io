//Components
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

interface props {
    className: string
}

const GithubLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <Image src="src/assets/icons/github-icon.png" roundedCircle />
        </Container>
    )
}

export default GithubLink;