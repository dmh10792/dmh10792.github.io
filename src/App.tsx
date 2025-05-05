//UTILITIES
//COMPONENTS
import NavBar from './components/NavBar/NavBar';

//PAGES
import Home from './pages/Home/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {Box} from "@mui/material";
import NavBar2 from "./components/NavBar/NavBar2.tsx";


function App() {
  

  return (
      <Box>
        {/*<NavBar/>*/}
          <NavBar2/>
        <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </Box>
  )
}

export default App
