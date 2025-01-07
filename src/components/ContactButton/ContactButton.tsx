//Utility
import { Link } from 'react-router-dom';

//Components
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

//CSS
import './ContactButton.css'

const ContactButton = () => {
    return(
        <Container className='contact-containter'>

            <div className='contactButton-containter'>
                <Link to={'/contact'} >
                    <Button variant="secondary" className='contact-button'>Contact Me</Button>
                    
                </Link>
            </div>

        </Container>
    )
}

export default ContactButton;