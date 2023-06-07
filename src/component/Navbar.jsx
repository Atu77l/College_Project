import React from 'react'
import logo from './../collegelogo.png'

const Navbar = () => {
  return (
    <div className="h-16 bg-blue-200">
        <img src={logo} alt="logo" className="h-10 w-20 text-black p-2"></img>
        <div className="text-center justify-center text-xl text-white -m-5">Helmet Detection Model</div>
    </div>
  )
}

export default Navbar