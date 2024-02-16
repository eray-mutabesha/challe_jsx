import { Link } from "react-router-dom"

function About() {


    return (
      <>
      <div className="about_div">
        <div>
        <img src="public\images\erayphoto.jpg" alt="" />
        </div>
      <div>
        <h2>I'm Eray MUTABESHA</h2>
        <p>My journey into web development began with a fascination for creating interactive and dynamic websites that seamlessly blend aesthetics with functionality. Over the years, I've honed my skills in HTML, CSS, and JavaScript, constantly staying updated with the latest trends and technologies in the ever-evolving landscape of front-end development.

What sets me apart is my dedication to understanding user behavior and incorporating intuitive design principles into every project I undertake. Whether it's optimizing performance, ensuring cross-browser compatibility, or enhancing accessibility, I approach each task with meticulous attention to detail and a commitment to delivering top-notch results.</p>
        <Link to="/">Back to home page</Link>
      </div>
      </div>
      
        
        
      </>
    )
  }
  
  export default About