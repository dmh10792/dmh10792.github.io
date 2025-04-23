import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import ContactForm from "../components/ContactForm.tsx";

const Contact = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                bgcolor: '#CFCFCF',
                mt: '3vh',
                boxShadow: '5px 3px 5px black',
                borderRadius: '2%',
                width: '79vw',
                height: '93vh',
                ml: '3vw',
                fontFamily: 'sans-serif',
            }}
        >
            <Stack
                spacing={10}
                sx={{
                    flex: 1,
                    mt: '10%',
                    marginInline: '1%'
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

                <Button
                    variant='contained'
                    href='mailto:desmond.herring@outlook.com'
                    sx={{
                        width: '30%',
                        alignSelf: 'center',
                    }}
                >
                    Email
                </Button>

            </Stack>

            <Divider
                orientation="vertical"
                variant='middle'
                flexItem
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    marginInline: '1%',
                    mt: '2%'
                }}
            >
                <ContactForm/>
            </Box>
        </Box>
    )
}

export default Contact;