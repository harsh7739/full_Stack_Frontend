import { useState } from "react"

function Login(){
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const payload = {email,pass}
        let res = await fetch("https://inquisitive-plum-khakis.cyclic.app/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(payload)
        })
       res = await res.json()
        localStorage.setItem("token",res.token)
       alert(res.msg)
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={pass} placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)} />
            <input type="submit" value={"Login"} />
        </form>
        </>
    )
}
export default Login