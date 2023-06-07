import React from 'react'
import Navbar from './Navbar'
import Camera from './Camera'

const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <div className="grid grid-cols-2 gap-6 h-96 text-center justify-center m-10 rounded">
            <div className="border-2 rounded p-4">
            <div className="text-center justify-center text-xl font-semibold m-2">Upload Video or Images</div>
              <input type="file" ></input>
              <div className="">OR</div>
              <div className="">
                <Camera/>
              </div>
            </div>
            <div className="border-2 rounded p-2">
              <h1 className="text-2xl font-bold text-blue-600">Result</h1>
              <hr className="m-2"></hr>
              <hr className="m-2"></hr>
              <div className="flex flex-row text-xl m-2 text-center justify-center">
                No.of Person ::  <span className="text-black text-xl font-semibold">1</span>
              </div>
              <div className="flex flex-row text-xl m-2 text-center justify-center">
                Helmet Detection Percentage ::  <span className="text-black text-xl font-semibold">98%</span>
              </div>
              <div className="flex flex-row text-xl m-2 text-center justify-center">
                Number PLate Detection ::  <span className="text-black text-xl font-semibold">Yes</span>
              </div>
              <div className="flex flex-row text-xl m-2 text-center justify-center">
                Number PLate Detection Percentage ::  <span className="text-black text-xl font-semibold">92%</span>
              </div>
             
            </div>
        </div>
    </div>
    </>
  )
}

export default Home