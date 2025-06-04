import { Button, Typography } from "@mui/material";

const Contact = () => {

    return (
        <div id="Contact" className="inline-block my-60 text-center content-center" >

            <Typography
                variant={"h3"}
                color="white"
            >
                I'd love to hear from you!
            </Typography>

            <Typography
                variant={"h4"}
                color="white"
                sx={{
                    marginY: '5%',
                    alignSelf: 'center',
                    border: '1px solid green'
                }}
            >
                Either complete the form on the right or click the email button below to use your default mail app.
            </Typography>

            <Button
                variant='contained'
                href='mailto:desmond.herring@outlook.com'
                sx={{
                    width: '30%',
                }}
            >
                Email
            </Button>
        </div>
    )
}

export default Contact;