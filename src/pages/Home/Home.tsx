//Utilities
import { ReactElement, useEffect } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

//Components
import { Container, Row } from "react-bootstrap";

//CSS
import './Home.css';



const Home = () => { 

    const images :React.ReactElement[] = [];

    useEffect(() => {
        let urls  :string[]= [];
        for(let i = 1; i <= 5; i++) {
            urls.push(`src/assets/images/slideshow/slide${i}.jpg`)
        }

        urls.forEach((url) => {
            images.push(
                <CCarouselItem className="slideshow-item">
                    <CImage className="slideshow-image" src={url} alt='slideshow image'/>
                </CCarouselItem>
            )
        })
    }, []);
    
    return (
        <Container className="home-page"> 

            <Container className="home-header">
                <h1>Desmond Herring</h1>
                <h3>Full Stack Developer/Professional Instructor</h3>
                <h6>Based in Austin Texas</h6>
            </Container>

            <Row className="home-body">
                
                <Container className='slideshow col-lg-6'>
                    <CCarousel interval={3000}>
                        {images}
                    </CCarousel>
                </Container>
                

                <Container className='col-lg-6'>
                    <p className='home-text'>
                        I develop applications for client's needs using modern technologies and frameworks.
                        <br/>
                        <br/>
                        I also have experience as a senior instructor.
                        <br/>
                        <br/>
                        Feel free to contact me for any questions you may have. 
                    </p>
                </Container>

            </Row>
             
        </Container>
    ) 
}

export default Home;