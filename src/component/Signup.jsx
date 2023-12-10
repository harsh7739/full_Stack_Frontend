import { useState } from "react"

function Signup(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const payload = {username,email,pass}
        let res = await fetch("https://inquisitive-plum-khakis.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
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
            <input type="text" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
            <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={pass} placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)} />
            <input type="submit" value={"Submit"} />
        </form>
        </>
    )
}
export default Signup