import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FromValidstion=()=>{

const[login,setLogin]=useState({
    name:"",
    email:""
})

const[error,setError]=useState({})
const naviget=useNavigate()

const validate=(e)=>
{e.preventDefault()
    const{name,value}=e.target
    setLogin({...login,[name]:value})
}
    const handelSumbit=(e)=>{
        e.preventDefault()
        const validError={}

        if(!login.name.trim()){
            validError.name="username is requried"
        }
        if(!login.email.trim()){
            validError.email="email is requried"
        }
        setError(validError)
        if(Object.keys(validError).length===0){
            
            alert("form sumbitted successfully")
            naviget("/curd")
        }
        
    }
    return(
        <>
                    <div class="center">
                <h1>Login</h1>
                <form onSubmit={handelSumbit} >
                    <div class="inputbox">
                        <input name="name" onChange={ validate}  type="text" required="required" />
                        <span>Name</span>
                    </div>
                   {error.name && <p>{error.name}</p>}
                    <div class="inputbox">
                        <input name="email" onChange={validate}  type="text" required="required" />
                        <span>Email</span>
                    </div>
                    {error.email && <p>{error.email}</p>}
                    <div class="inputbox">
                        <button type="sumbit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FromValidstion