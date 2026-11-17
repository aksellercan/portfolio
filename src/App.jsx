import './App.css'
import Navbar from './navbar'
import Education from './education'
import Editors from './editors'
import Myself from './myself'
import Github from './Github'
import Tooling from './tooling'
import Footer from './footer'

function App() {

  return (
    <>
      <Navbar/>
      <br></br>
      <Myself/>
      <br></br>
      <Education/>
      <br></br>
      <Editors/>
      <br></br>
      <Github/>
      <br></br>
      <Tooling/>
      <br></br>
      <Footer/>
    </>
  )
}

export default App
