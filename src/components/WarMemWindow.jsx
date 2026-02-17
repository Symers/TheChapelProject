import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function WarMemWindow(){
  const navigate = useNavigate() ;
  return (
    <div className="WarMemWindow">
      <div className="two-column-section">
        <div className="column">
          <h2>The War Memorial Window</h2>
          <p>
          Designed by Douglas Strachan of Aberdeen, the War Memorial Window commemorates fallen Soldiers connected to the University. The window considers two main themes: our struggles which we must face and the goodness we find in knowledge and reason. This aligns with the University’s founding mission, to be “open to all and dedicated to the pursuit of truth in the service of others”. 
In order to accomplish this, Strachan uses a range of symbols: firstly, the four elements – air water, fire, and earth – are symbolized in the four circles. These elements hold us in the world. A dragon represents the enemies or struggles which we must overcome, and the horsemen are a mediaeval symbol for the virtues which we value as good. Two white figures  on the left and the right represent Justice and Peace, which guides the soldiers on their mission. The horn or bugle symbolizes an end to the war and the return of peace.

          </p>
        </div>

        <div className="column">
        <img src="/images/warMemorialImage.jpg" alt="War Memorial Window" width="300" height="400" className="image" />
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



export default WarMemWindow;


