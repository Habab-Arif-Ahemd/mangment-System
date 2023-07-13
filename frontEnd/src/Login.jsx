import React, { useState } from "react";
import './login.css'  
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
function Login() {
    const [value,setValue]=useState(
        {
            email:"",
            password:""
        }
    )
    const [error,setError]=useState('')
    const handelSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:8081/login',value)
        .then(res=>{
            console.log(res)
            if(res.data.Status=="Success"){
                
            }
            else {
                console.log("janan",res.data.Error)
                setError(res.data.Error)

            }
        })
        .catch(e=>console.log("ssssss",e))

    }
    return ( 
    <div>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handelSubmit}> 
    <div class="text-danger" >{ error && error}</div>

        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={e => setValue({...value,email:e.target.value})} placeholder="Email or Phone" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={e=> setValue({...value,password:e.target.value})} placeholder="Password" id="password"/>
        <button class="mt-4 btn-n">Log In</button>
    </form>
    </div> 
    
    );
}

export default Login;