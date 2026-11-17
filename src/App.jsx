// CSS imports
import './App.css'
import './components/navbar/navbar.css'
import './components/footer/footer.css'

// Component imports
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

//pages
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Interests from './pages/interests/interests'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <br></br>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/interests' element={<Interests />} />
      </Routes>
      {/* <br></br>
      <Programs />
      <br></br>
      <Github />
      <br></br>
      <Computers /> */}
      <br></br>
      <Footer />
    </>
  )
}

export default App
