import React from 'react'
import logo from './../collegelogo.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
    {/* // First Page */}
    <div className="bg-blue-400">
    <div className="flex text-center justify-center">
    <img src={logo} className="text-center justify-center mt-10" alt="logo"></img>
    </div>
    <div className="text-white text-7xl text-center ">Madan Mohan Malaviya University Of Technology,Gorakhpur</div>
    <div className="text-white text-5xl text-center">Project Presentation Topic:</div>
    <div className="text-white text-4xl text-center">Helmet Detection</div>
    <div className="grid grid-cols-2">
    <div className="m-5 text-left">
    <div className="text-white text-3xl">Project Guide</div>
    <div className="text-white text-3xl">Dr. Rohit Kumar Tiwari Sir</div>
    </div>
    <div className="m-5 text-right">
    <div className="text-white text-3xl">Project Evaluator</div>
    <div className="text-white text-3xl">Dr. Uday Shankar Tiwari</div>
    </div>
    </div>
    <div className="m-5">
    <div className="text-white text-3xl">Project Team Member</div>
    <div className="text-white text-2xl">Anshika Srivastava(Team Leader)</div>
    <div className="text-white text-2xl">Aryama Jeet Singh</div>
    <div className="text-white text-2xl">Atul Kesharwani</div>
    </div>
    <div className="flex text-center justify-center">
    <Link to='/page'><div className="mt-10 mb-10 text-center justify-center bg-white h-8 w-32 rounded">
        <KeyboardArrowUpIcon sx={{height:"25px",width:"25px"}}/>
    </div>
    </Link>
    </div>
    </div>   
    </>
  )
}

export default Main