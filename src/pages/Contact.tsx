import { Box, Button, Typography } from "@mui/material";

const Contact = () => {

    return (
        <Box id="Contact" component={'section'} className="inline-block my-60 text-center w-full" >

            <Typography
                variant={"h1"}
                color="white"
            >
                I'd love to hear from you!
            </Typography>

            <Button
                variant='contained'
                href='mailto:desmond.herring@outlook.com'
                sx={{
                    width: '30%',
                    mt: 5
                }}
            >
                Email
            </Button>
        </Box>
    )
}

export default Contact;