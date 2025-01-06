//Components
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

interface props {
    className: string
}

const LinkedInLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <Image src="src/assets/icons/linkedin-icon.png" roundedCircle />
        </Container>
    )
}

export default LinkedInLink;