import {Button, FormControl, Stack, TextField} from "@mui/material";
import {useState} from "react";
import emailjs from '@emailjs/browser';

type userMessage = {
    name: string,
    email: string,
    message: string
}

/**
 * No longer used, leaving here for reference
 */

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    emailjs.init({
        publicKey: "s-yi_0uW-yWrNAh1J",
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: [],
            // The variable contains the email address
            watchVariable: 'email',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    const handleSubmit = () => {
        //capture message values
        const messageToSend: userMessage = {
            name: name,
            email: email,
            message: message
        }

        //send the message
        emailjs.send( "service_80kelvm", "template_fk4hcgb", messageToSend )
            .then((response) => {
                console.log('Message sent');
                console.log(response);
            })

        //clear the form
        clearForm();
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <FormControl>
            <Stack spacing={3} sx={{mt: 10}}>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={10}
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        width: '30%',
                        alignSelf: 'center',
                        mt: 5,
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </FormControl>
    );
};

export default ContactForm;