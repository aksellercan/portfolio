import './App.css'
import Navbar from './navbar'
import Education from './education'
import Myself from './myself'
import Github from './Github'
import Tooling from './tooling'
import Footer from './footer'

function App() {

  return (
    <>
      <Navbar/>
      <Myself />
      <br></br>
      <Education />
      <br></br>
      <Github />
      <br></br>
      <Tooling/>
      <br></br>
      <Footer/>
    </>
  )
}

export default App
