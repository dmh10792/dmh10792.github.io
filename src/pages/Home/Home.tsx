import {ReactElement, useEffect} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import ReactTypingEffect from 'react-typing-effect';
import {Colors} from "../../AppHelper.ts";



const Home = () => {

    const images: ReactElement[] = [];
    const titles = ["Developer", "Professor", "Veteran"];

    useEffect(() => {
        const urls: string[] = [];
        for (let i = 1; i <= 5; i++) {
            urls.push(`src/assets/images/slideshow/slide${i}.jpg`)
        }

        urls.forEach((url) => {
            images.push(
                <img
                    className="slideshow-image"
                    src={url}
                    alt='slideshow'
                    style={{
                        width: '100%',
                    }}
                />
            )
        })
    });

    return (
        <Box mt={3}>

            <Stack
                ml={30}
            >

                <ReactTypingEffect
                    text={titles}
                    cursorRenderer={(cursor: string | number ) => <Typography variant={'h2'} color='white'>{cursor}</Typography>}
                    displayTextRenderer={(text: string) => {
                        return (
                            <Typography
                                variant={'h2'}
                                color={'white'}
                                fontFamily={'sans-serif'}
                            >
                                {text}
                            </Typography>
                        );
                    }}
                />

                <Typography
                    variant={'h1'}
                    color={'white'}
                    fontFamily={'sans-serif'}
                >
                    Concept to code
                </Typography>

                <Typography
                    variant={'h6'}
                    color={'white'}
                    fontFamily={'sans-serif'}
                    fontWeight={'lighter'}
                    fontSize={'small'}
                >
                    Based in Austin Texas
                </Typography>
            </Stack>

            <Stack direction='row' className="home-body">

                <Container className='col-lg-6'>
                    <p className='home-text'>
                        I develop applications for client's needs using modern technologies and frameworks.
                        <br/>
                        <br/>
                        I also have experience as a college professor/senior instructor.
                        <br/>
                        <br/>
                        Feel free to contact me for any questions you may have. 
                    </p>
                </Container>

            </Stack>
             
        </Box>
    ) 
}

export default Home;