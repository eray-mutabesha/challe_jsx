import { Link } from "react-router-dom"

function Intouch() {


    return (
      <>
        <h1>let keep in touch</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Illum itaque ea, minus iure harum commodi mollitia eligendi
             tenetur velit rerum repellat blanditiis, 
            consequatur id sunt accusamus quae quidem, deserunt perspiciatis.
        </p>
        
 
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <Link to="/">Back to home page</Link>
      </>
    )
  }
  
  export default Intouch