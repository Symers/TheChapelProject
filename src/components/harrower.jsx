import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function Harrower(){
  const navigate = useNavigate() ;
  return (
    <div className="Harrower">
      <div className="two-column-section">
        <div className="column">
          <h2>Harrower Memorial Window</h2>
          <p>
          This is the Easternmost window of the Chapel. It was designed by Douglas Strachan in 1934 with the inscription reading ‘To the Memory of John Harrower for forty-five years Professor of Greek Language and Literature, defender of humane studies. His wife Rachel Blanche gifted this window by her will.’
Its central theme focuses on the crucifixion of Christ. The cross is flanked by Jesus’ mother, Mary, and by his favourite disciple, John. The sun and moon remind us that Christ will rise again. Seven doves represent the gifts of the spirit: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord. This main theme is accompanied by figures of St. Andrew, St. Nicholas, and St. Machar, as well as the University’s founder, Bishop Elphinstone.  Themes of community also play a key feature in this window. This can be found in the two disciples on the road to Emmaus on the left, an Inn with an open door on the right, and in the centre, the supper set and welcoming all. 

          </p>
        </div>

        <div className="column">
        <img src="/images/harrowerImage.jpg" alt="War Memorial Window" width="300" height="500" style={{ position: "relative", top: "5%" }} />
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



export default Harrower;


