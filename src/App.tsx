import Home from './pages/Home/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Box} from "@mui/material";
import NavBar from "./components/NavBar/NavBar.tsx";
import MobileBanner from './pages/MobileBanner.tsx';
import { useEffect, useState } from 'react';


const App = () => {

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    });

    if(isMobile) {
        return (
            <>
                <NavBar/>
                <MobileBanner/>
            </>
        )
    }

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
