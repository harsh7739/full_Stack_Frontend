import { useState } from "react"
import { useParams } from "react-router-dom"

function UpdateNote(){
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const {id} = useParams()
console.log(id)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const payload = {title,body}
        let res = await fetch(`https://inquisitive-plum-khakis.cyclic.app/notes/update/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
            
        })
        res = await res.json()
        console.log(res)
        alert(res.msg)
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" value={body} placeholder="Enter Body" onChange={(e)=>setBody(e.target.value)} />
            <input type="submit" value={"Update Notes"} />
        </form> 
        </>
    )
}
export default UpdateNote