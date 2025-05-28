import {Button, Stack, Typography} from "@mui/material";

const Contact = () => {

    return (
            <Stack
                id="Contact"
                className="text-center"
                gap={2}
                sx={{
                    marginTop: '5%',
                    flex: 1,
                }}
            >
                <Typography
                    variant={"h3"}
                    color="white"
                >
                    I'd love to hear from you!
                </Typography>

                <Typography
                    variant={"h4"}
                    color="white"
                >
                    Either complete the form on the right or click the email button below to use your default mail app.
                </Typography>

                <Button
                    variant='contained'
                    href='mailto:desmond.herring@outlook.com'
                    sx={{
                        width: '30%',
                        alignSelf: 'center',
                        marginBottom: '10%'
                    }}
                >
                    Email
                </Button>

            </Stack>
    )
}

export default Contact;