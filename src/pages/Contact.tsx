import { Box, Container, Typography } from "@mui/material";

const Contact = () => {

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',

                }}
            >
                <Typography
                    variant={"h3"}
                >
                    I'd love to hear from you! 
                </Typography>

                <Typography
                    variant={"h4"}
                >
                    Either complete the form on the right or click the email button below to use your default mail app.
                </Typography>
            </Container>
            
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