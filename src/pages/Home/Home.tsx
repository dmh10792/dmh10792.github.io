//Components
import { Container } from "react-bootstrap";

//CSS
import './Home.css';

const Home = () => {

    return (
        <Container className="home-page">

            <Container className="home-header">
                <h1>Desmond Herring</h1>
                <h3>Full Stack Developer/Professional Instructor</h3>
                <h6>Based in Austin Texas</h6>
            </Container>
            
        </Container>
    )
}

export default Home;