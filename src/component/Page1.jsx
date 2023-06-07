import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Page1 = () => {
    return (
        <div className="bg-blue-100 pb-5">
            <div className="text-blue-800 text-6xl font-bold text-center pt-10">Aim Of Project</div>
            <p className="text-blue-500 text-3xl m-5">
                The aim of the project topic "Helmet Detection" is to develop a computer vision system that can detect and recognize whether individuals are wearing helmets or not. The project aims to enhance safety measures, particularly in scenarios where helmets are required, such as construction sites, industrial settings, sports activities, or motorcycle riding.
            </p>
            <h1 className="text-4xl m-5 text-blue-800">The key objectives of the project can include:</h1>
            <ul className="text-blue-500 text-xl p-5 list-disc m-2">
                <li>Detection and Localization: Developing algorithms to identify and locate the presence of helmets in images or video frames.
                </li>
                <li>
                    Classification: Building a model that can classify whether an individual is wearing a helmet or not, based on the detected regions.
                </li>
                <li>
                    Real-time Monitoring: Implementing the system to perform helmet detection and classification in real-time, enabling immediate action or alerts.
                </li>
                <li>
                    Accuracy and Robustness: Ensuring the system's accuracy in detecting helmets, even in challenging scenarios like different lighting conditions, various helmet designs, and occlusion.
                </li>
                <li>
                    Integration: Integrating the helmet detection system with existing surveillance systems or safety mechanisms to enhance safety measures and promote adherence to helmet-wearing regulations.
                </li>
                <li>
                    Alert Generation: Generating alerts or notifications when individuals are detected without helmets, enabling immediate intervention or corrective actions.
                </li>
            </ul>
            <div className="text-center text-black text-2xl justify-center m-5 pb-16 font-bold">
                ""The project's ultimate aim is to contribute to the overall safety of individuals by encouraging and enforcing the use of helmets in various contexts, reducing the risk of head injuries, and promoting safety compliance in environments where helmet-wearing is crucial.""
            </div>
        
        <div className="text-center m-5">
           <Link to='/home'><Button variant="contained">Start Using Helmet Detection</Button></Link> 
        </div>
        </div>

    )
}

export default Page1