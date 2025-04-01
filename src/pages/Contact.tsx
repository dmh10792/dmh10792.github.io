import {Button, Container, Divider, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Contact = () => {

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                bgcolor: 'rgba(207,207,207,0.56)',
                mt: '5vh',
                borderRadius: '2%',
                width: '80vw',
                height: '93vh',
                ml: '3vw'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '10%'
                }}
            >
                <Typography
                    variant={"h3"}
                >
                    I'd love to hear from you!
                </Typography>

                <Typography
                    variant={"h4"}
                    sx={{
                        mt: '10%'
                    }}
                >
                    Either complete the form on the right or click the email button below to use your default mail app.
                </Typography>

                <Button
                    variant='contained'
                    href='mailto:desmond.herring@outlook.com'
                    sx={{
                        width: '30%',
                        alignSelf: 'center',
                        mt: 10,
                        bgcolor: 'grey'
                    }}
                >
                    Email
                </Button>

            </Container>

            <Divider
                orientation="vertical"
                variant='middle'
                flexItem
            />

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

            </Container>
        </Container>
    )
}

export default Contact;