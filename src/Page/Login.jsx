import React from 'react'
import './../Css/login.scss'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc"
import chillhop from './../assets/chillhop.mp4'
import logo from './../assets/logowhite.png'
import { createOrGetUser } from '../Utils/getUser';

const Login = () => {

const user=false

  return (
   <div className="container_login">
    <div className="video_login">
        <video src={chillhop}
        type='video/mp4'
        loop
        controls={false}
        muted
        autoPlay
        />
        <div className="content_login">
            <img src={logo} alt="logotipo_login" />
            {user ? (
             <div> logged ID</div>
            ):
            <GoogleLogin
              onSuccess={(response)=>{
                createOrGetUser(response)
              }} 
              onError={()=>{
                console.log('Error')
              }}
            />
            }
        </div>
    </div>
   </div>
  )
}

export default Login