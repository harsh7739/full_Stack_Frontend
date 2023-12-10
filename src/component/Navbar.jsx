import { Link } from "react-router-dom"


function Navbar(){
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around"}}>

        <Link to={"/signup"} >Registration</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/notes"} >Notes</Link>
        <Link to={"/addnote"} >Add Notes</Link>
        </div>
        </>
    )
}
export default Navbar