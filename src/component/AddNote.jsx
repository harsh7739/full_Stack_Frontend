import { useState } from "react"

function AddNote(){
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const payload = {title,body}
        let res = await fetch("https://inquisitive-plum-khakis.cyclic.app/notes/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
            
        })
        res = await res.json()
        alert(res.msg)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" value={body} placeholder="Enter Body" onChange={(e)=>setBody(e.target.value)} />
            <input type="submit" value={"Add Notes"} />
        </form>
        </>
    )
}
export default AddNote