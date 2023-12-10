import {Routes,Route} from "react-router-dom"
import Signup from "../component/Signup"
import Login from "../component/Login"
import Notes from "../component/Notes"
import AddNote from "../component/AddNote"
import UpdateNote from "../component/UpdateNote"

function MainRoute(){
    return (
        <>
        <Routes>
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/notes" element={<Notes />} ></Route>
            <Route path="/addnote" element={<AddNote />} ></Route>
            <Route path="/update/:id" element={<UpdateNote />} ></Route>
        </Routes>
        </>
    )
}
export default MainRoute