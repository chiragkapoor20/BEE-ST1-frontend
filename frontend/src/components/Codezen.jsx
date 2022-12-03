import React from 'react';
import {styled} from '@mui/material';


/*
const Head = styled('p')`
font-size : 80px;
margin : 18% 0 0 23%;
font-weight: bold;
`;
*/



/* 
      height:100vh;
      color:black;
      font-size:50px,
      background-size: cover;
      background-repeat:no-repeat
     */

  

      const mystyle = {
        height:"100vh",
        width:"100%",
      color:"black",
      fontSize:"50px",
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      };


const Codezen = () => {
  return (
    //<Head>Student Records</Head>
    <div ><img style={mystyle}src="https://www.canr.msu.edu/contentAsset/image/797e9447-1db6-449d-9707-767cd372d7db/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80" /></div>
  )
}

export default Codezen