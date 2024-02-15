
import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
    <div className='home_page'>
    <div className='header'>
        <Link to="/About">About me</Link>
        <Link to="/Skils">Skills</Link>
        <Link to="/Intouch">Let's keel in touch</Link>
     </div>
      <h1>Welcome to my personal page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, facere
         asperiores. Natus pariatur quos eum perferendis aut ratione neque
         quod dolorum, tempore rerum nemo cum tenetur aliquid sint est non.
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nam vitae est suscipit, nihil quam 
         autem assumenda hic quis earum eius animi, culpa ea totam, at minus placeat eveniet! Nisi.</p>
       
        
    </div>
      
    </>
  )
}

export default App
