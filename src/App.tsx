//UTILITIES
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';

//PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


//CSS
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className='row app-container'>
      <BrowserRouter>
        <div className='col-lg-2 '>
          <NavBar/>
        </div>
        <div className='col-lg-10 page-container'> 
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/' element={<Home/>}/> 
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App
