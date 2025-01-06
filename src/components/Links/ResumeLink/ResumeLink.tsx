//Components
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

interface props {
    className: string
}

const ResumeLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <Image src="src/assets/icons/resume-icon.png" roundedCircle />
        </Container>
    )
}

export default ResumeLink;