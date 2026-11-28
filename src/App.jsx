// CSS imports
import './App.css'
import './components/navbar/CustomNavbar.css'
import './components/footer/footer.css'

// Component imports
import Navbar from './components/navbar/CustomNavbar'
import Footer from './components/footer/footer'

//pages
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import NetworkCloudDrive from './pages/projects/NetworkCloudDrive/NetworkCloudDrive'
import InterestsPage from './pages/interests/interestsPage'
import PortfolioWebsite from './pages/projects/Website/PortfolioWebsite'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/NetworkCloudDrive' element={<NetworkCloudDrive />} />
        <Route path='/projects/portfolio_spec' element={<PortfolioWebsite />} />
        <Route path='/interests' element={<InterestsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
