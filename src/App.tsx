import Home from './pages/Home/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Box} from "@mui/material";
import NavBar from "./components/NavBar/NavBar.tsx";


const App = () => {


    return (
        <Box>
            <NavBar/>
            <Home/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Contact/>
        </Box>
    )
}

export default App
