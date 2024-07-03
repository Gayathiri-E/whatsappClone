import React from 'react'
import {Button} from "@mui/material/Button"
import {auth,provider} from "../firebase";
import {signInWithPopup} from "firebase/auth"
import "./login.css"

const login =()  =>{

    const signIn = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            alert(err.message)
        })
    }

  return (
    <div className='login'>
        <div className='login_container'>
            <img src="https://tse3.mm.bing.net/th?id=OIP.yNlvU1fv5eA1Hmx8Toi_YQHaHn&pid=Api&P=0&h=180" alt="logo"/>
            <div className='login_text'>
                <h1>Sign in to Whatsapp</h1>
            </div>
            <button onClick={signIn}>
                Sign In with Google
            </button>
        </div>
    </div>
  )
}

export default login