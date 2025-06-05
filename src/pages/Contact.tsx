import { Box, Button, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

    return (
        <Box id="Contact" component={'section'} className="inline-block my-80 text-center w-full" >

            <Typography
                variant={"h1"}
                color="white"
                fontFamily={'serif'}
            >
                I'd love to hear from you!
            </Typography>

            <Button
                variant='contained'
                href='mailto:desmond.herring@outlook.com'
                size="large"
                startIcon={<SendIcon />}
                sx={{ mt: '3%'}}
            >
                Email
            </Button>
        </Box>
    )
}

export default Contact;