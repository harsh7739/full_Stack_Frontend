import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Notes(){
    const [data,setData] = useState([])
    async function fetchFun(){
    let res = await fetch("https://inquisitive-plum-khakis.cyclic.app/notes",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    res = await res.json()
    setData(res)
    // console.log(res)
    }
    useEffect(()=>{
        fetchFun()
    },[])

    const handleDelete=async(id)=>{
        
        let res = await fetch(`https://inquisitive-plum-khakis.cyclic.app/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${localStorage.getItem("token")}`
            } 
        })
        res = await res.json()
        console.log(res)
        alert(res.msg)
        fetchFun()
    }

    return (
        <>
        {
            data?.map((item)=>(
                <div key={item._id}>
                    <h1>{item.title}</h1>
                    <h3>{item.body}</h3>
                    <Link to={`/update/${item._id}`} >
                    <button>Edit</button>
                    </Link>
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
            ))
        }
        </>
    )
}

export default Notes