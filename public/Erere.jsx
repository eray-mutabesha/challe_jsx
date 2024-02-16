import { Link } from "react-router-dom"

function Erere() {


  return (
    <>
    <h1>Error 404</h1>
      <h3>It seem like this page doesn't exist try to go back to home page</h3>
      <p>by using this link below</p>
      <Link to="/">Back to home Page</Link>
    </>
  )
}

export default Erere