import {Box, Stack, Typography} from "@mui/material";
import ReactTypingEffect from 'react-typing-effect';



const Home = () => {

    const titles = ["Developer", "Professor", "Veteran"];

    return (
        <Box className="mt-10" >

            <Stack
                ml={20}
            >

                <ReactTypingEffect
                    text={titles}
                    // @ts-expect-error es-lint doesn't detect the following prop, but it is necessary to render the cursor
                    cursorRenderer={(cursor: string | number ) => <Typography variant={'h2'} color='white'>{cursor}</Typography>}
                    speed={100}
                    eraseDelay={2500}
                    typingDelay={1000}
                    displayTextRenderer={(text: string) => {
                        return (
                            <Typography
                                variant={'h2'}
                                color={'white'}
                                fontFamily={'sans-serif'}
                                fontStyle={'italic'}
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
                    ml={1}
                >
                    Based in Austin Texas
                </Typography>
            </Stack>

            {/*<Stack direction='row' className="home-body">*/}

            {/*    <Container className='col-lg-6'>*/}
            {/*        <p className='home-text'>*/}
            {/*            I develop applications for client's needs using modern technologies and frameworks.*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            I also have experience as a college professor/senior instructor.*/}
            {/*            <br/>*/}
            {/*            <br/>*/}
            {/*            Feel free to contact me for any questions you may have.*/}
            {/*        </p>*/}
            {/*    </Container>*/}

            {/*</Stack>*/}
            {/* */}
        </Box>
    ) 
}

export default Home;