import { Link } from "react-router-dom"

function About() {


    return (
      <>
      <div className="about_div">
      
        <img src="src\assets\images\accueilEssais.webp" alt="" />
      
      <div>
        <h2>i'm a front end developer</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed rem earum aut vel accusantium molestiae iste? Delectus amet vero, 
          asperiores ipsa excepturi, porro libero eveniet doloribus optio a et!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est fugiat dolor provident debitis explicabo minus magnam labore. Tempora in labore repellendus commodi ipsa ex iste dicta, eos esse quam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic, sapiente rerum fugiat quasi porro ullam eos dicta debitis qui praesentium nesciunt, excepturi facilis reprehenderit corporis. Eius autem, incidunt qui enim soluta nam expedita consequatur doloribus ab similique, voluptas in quod vero, recusandae sequi nihil. Ducimus nemo harum quae libero?</p>
           <Link to="/">Back to home page</Link>
      </div>
      </div>
      
        
        
      </>
    )
  }
  
  export default About