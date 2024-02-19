import { Link } from "react-router-dom"


function Skils() {

    return (
    
      <div className="skill_all_div">
      <h1>skills</h1>
        <p> pariatur dolor facere veritatis unde alias.quis ipsa fugiat facilis laboriosam!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni modi alias, aspernatur aliquam animi nam perferendis. Libero aliquid deleniti quia quas velit dolorum, quisquam fugiat sed, unde alias ipsam fuga!</p>
        <nav>
        <h2>HTML5</h2>
        <h2>CSS</h2>
        <h2>SCSS /SASS</h2>
        <h2>javascript vanilla</h2>
        <h2>React js</h2>
        </nav>
        <Link to="/">Back to home page</Link>
      </div>
        
    
    )
  }
  
  export default Skils