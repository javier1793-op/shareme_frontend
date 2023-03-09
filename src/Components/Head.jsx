import React from 'react'
import '../Css/head.scss'
import { TfiSearch } from "react-icons/tfi";
import Perfil from '../assets/perfil-miniatura.jpg'

const Head = () => {
  return (
    <div className="container-head">
        <div className="search">
          <TfiSearch className='icon'/>
          <input type="text" placeholder='Search..' />
        </div>
        <div className="user-session">
          <img src={Perfil} alt="photo-user" />
        </div>
    </div>
  )
}

export default Head