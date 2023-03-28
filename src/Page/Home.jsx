import React ,{useEffect, useState, useRef} from 'react'
import './../Css/home.scss'
import Sidebar from '../Components/Sidebar'
import UserProfile from '../Components/UserProfile'
import Pins from '../Components/Pins'
import Head from '../Components/Head'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
        <Sidebar/>
        </div>
        <div className="head">
          <Head/>
        </div>
        <div className="content">
          <Pins/>
        </div>
      </div>
    </>
  )
}

export default Home