import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function StainedGlass(){
  const navigate = useNavigate() ;
  return (
    <div className="WestWindow">
      <div className="two-column-section">
        <div className="column">
          <h2>The Pirie Memorial Window</h2>
          <img src="/images/pirieMemorial.jpg" alt="War Memorial Window" width="300" height="400" className="image" />
        </div>

        <div className="column">
           <p>
          Panel one: 
This Panel depicts Bishop Elphinstone’s journey to Rome to meet with Pope Alexander VI and receive permission to establish a University in Aberdeen, which was granted in 1495. 
          </p>
          <p>
            Panel two: 
The mid-section panel shows Elphinstone’s return and the beginning of construction of the College, and particularly the building of the Crown tower. Building works did not begin until 1500, due to a need to sink large cut trees to secure the foundation and ensure structural stability. The chapel was completed sometime before 1506, taking approximately six years to build. 
          </p>
          <p>
          Panel three: 
          The last panel is the dedication of the College to James IV of Scotland, and to the Trinity and the Virgin Mary. In the depiction, you can see Bishop Elphinstone greeting King James IV and honouring him with the naming of the College. It also depicts the burial of Elphinstone in the King’s College Chapel.
          </p>
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



export default StainedGlass;


