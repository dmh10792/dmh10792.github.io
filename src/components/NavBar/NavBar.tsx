import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {Stack} from "@mui/material";
import LinkedInLink from "../Links/LinkedinLink/LinkedinLink.tsx";
import GithubLink from "../Links/GithubLink/GithubLink.tsx";
import ResumeLink from "../Links/ResumeLink/ResumeLink.tsx";
import TwitterLink from "../Links/TwitterLink/TwitterLink.tsx";
import {Colors} from "../../AppHelper.ts";


const NavBar = () => {
    const pages = ['Experience', 'Skills', 'Projects', 'Contact'];

    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: 'black',
                width: '100%',
                borderBottom: ''
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Tooltip title="Back to the top">
                        <Typography
                            fontFamily={'sans-serif'}
                            fontSize={'xx-large'}
                        >
                            Desmond Herring
                        </Typography>
                    </Tooltip>

                    <Stack direction={'row'} ml={2}>
                        <LinkedInLink/>
                        <GithubLink/>
                        <TwitterLink/>
                        <ResumeLink/>
                    </Stack>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: 'end',
                        }}
                    >
                        <Stack direction={'row'}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'sans-serif',
                                        fontSize: 'large',
                                        ':hover': {backgroundColor: Colors.grey.primary },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Stack>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;