import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function NorthEast(){
  const navigate = useNavigate() ;
  return (
    <div className="NorthEast">
      <div className="two-column-section">
        <div className="column">
          <h2>The North-East Window</h2>
          <p>
            Installed in 1938, this is a late work by Douglas Strachan, to commemorate Dr. Duncan Mearns and Sir George Adam Smith. Dr. Mearns was the Professor of Divinity from 1816-1852 and Sir Smith was the Principal and Vice-Chancellor from 1910-1935. The window was a replacement for an earlier one which was solely dedicated to Dr. Mearns.
It is meant to represent the cycle of life as understood in Christianity: Life, Death and Resurrection. It is an abstract visualisation of this theme which uses natural elements and animals to embody the different stages of life. Wind and rain are the prevailing forces of life. The crown is a representation of the Thorns of Victory, or the crown which was placed on Christs head during the crucifixion. It symbolises death. In contrast, the pelican and phoenix symbolise the resurrection. These are topped by the envisionment of the virtues of Faith, Hope, and Love. At the bottom of the window, we see the scene of the birth of Christ, the advent of God in the world of man. The landscape behind shows the passing of time with summer on the left and winter on the right. The laws of the Old Testament are remembered in the burning bush and shadowy images of Lawgivers and Kings. The scene concludes with the image of a good shepherd, carrying the stray lamb to safety from a hunter who seeks to do harm.
          </p>
        </div>

        <div className="column">
        <img src="/images/northEastImage.jpg" alt="War Memorial Window" width="300" height="400" style={{ position: "relative", top: "15%" }} />
        </div>
      </div>  
      <div className="backButton-container">
        <button className="backButton" onClick={() => navigate(-1)}>
          Back to Tour
        </button> 
      </div>
      <Footer />
    </div>
  );
}



export default NorthEast;


