//Components
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

interface props {
    className: string
}

const TwitterLink = ({className}: props) => {

    return (
        <Container className={`${className}`}>
            <Image src="src/assets/icons/x-icon.png" rounded />
        </Container>
    )
}

export default TwitterLink;