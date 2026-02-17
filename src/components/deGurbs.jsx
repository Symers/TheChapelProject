import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function DeGurbs(){
  const navigate = useNavigate() ;
  return (
    <div className="DeGurbs">
      <div className="two-column-section">
        <div className="column">
          <h2>The De Gurbs Memorial Window</h2>
          <p>
          An early work of Douglas Strachan, dated 1904, this memorial window commemorates Baron de Gurbs (1800-1904), a distinguished graduate of the University. The window’s main scene depicts the dedication of Christ at the temple. Strachan shows an almost anecdotal interest in some of the more marginal characters discussed in the Gospel of Luke, and includes for examples Simeon – a wise man holding Jesus – and Anna, an elderly woman who recognises Jesus as the Messiah.
The angels above are in chorus for this grand occasion. They are grouped into sets of three which consist of the Counsellors: Seraphim, Cherubin, and Thrones; The Governors: Dominations, Virtues, and Powers; and the Ministers: Principalities, Archangels, and Angels.	

          </p>
          <p>
          The angels above are in chorus for this grand occasion. They are grouped into sets of three which consist of the Counsellors: Seraphim, Cherubin, and Thrones; The Governors: Dominations, Virtues, and Powers; and the Ministers: Principalities, Archangels, and Angels.	
          </p>
        </div>

        <div className="column">
        <img src="/images/deGurbsImage.jpg" alt="War Memorial Window" width="300" height="400" style={{ position: "relative", top: "25%" }} />
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



export default DeGurbs;


