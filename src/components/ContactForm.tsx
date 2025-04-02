import {Button, FormControl, Stack, TextField} from "@mui/material";
import {useState} from "react";

type userMessage = {
    name: string,
    email: string,
    message: string
}

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        //capture message values
        const messageToSend: userMessage = {
            name: name,
            email: email,
            message: message
        }

        //send the message
        console.log(messageToSend)//will be expanded later

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