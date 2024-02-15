
import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
    <div className='home_page'>
    
     <div className='home_page_div'>
     <h1>Welcome to my portfolio</h1>
      <p>Hello, and welcome to my portfolio! I'm <strong>ERAY MUTABESHA</strong>, a passionate front-end developer with a keen eye for crafting visually appealing and user-friendly web experiences. With 3 years of experience in the field, I thrive on bringing designs to life through clean, efficient code and innovative solutions.</p>
     </div>
     <div className='header'>
        <Link to="/About">About me</Link>
        <Link to="/Skils">Skills</Link>
        <Link to="/Intouch">Let's keep in touch</Link>
     </div>
    </div>
      
    </>
  )
}

export default App
