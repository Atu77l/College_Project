// import React, { useRef } from 'react';
// import Webcam from 'react-webcam';
// import html2canvas from 'html2canvas';

// function Camera() {
//   const webcamRef = useRef(null);

//   const capturePhoto = () => {
//     const videoElement = webcamRef.current.video;
    
//     html2canvas(videoElement).then((canvas) => {
//       const capturedImage = canvas.toDataURL('image/png');
      
//       // Handle the captured image (e.g., save to file, send to server)
//       console.log(capturedImage);
//     });
//   };

//   return (
//     <div>
//       <Webcam audio={false} ref={webcamRef} />
//       <button onClick={capturePhoto} className="bg-blue-500 rounded text-white m-5 p-5 text-center justify-center">Capture Photo</button>
//     </div>
//   );
// }

// export default Camera;

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';

function Camera() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capturePhoto = () => {
    const videoElement = webcamRef.current.video;
    
    html2canvas(videoElement).then((canvas) => {
      const imageBlob = canvas.toDataURL('image/png');
      
      // Set the captured image as the state
      setCapturedImage(imageBlob);
    });
  };

  return (
    
    <div>
      {capturedImage ? (
        <div className="">
        <img src={capturedImage} alt="Captured" />
        <Button variant='contained' sx={{margin:"10px"}}>Send</Button>
        <Button variant='contained' sx={{margin:"10px"}} onClick={()=>{setCapturedImage(null)}}>Recapture image </Button>
        </div>
      ) : (
        <Webcam audio={false} ref={webcamRef} />
      )}
      {!capturedImage && (
        <button onClick={capturePhoto} className="text-center justify-center text-white bg-blue-600 m-2 p-2">Capture Photo</button>
      )}
    </div>
  );
}

export default Camera;

