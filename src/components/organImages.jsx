import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function OrganImages() {
  const navigate = useNavigate() ;
  return (
    <div className="SmallPulpit">
      <div className="two-column-section">
        <div className="column">
          <h2>The Chapel's Organ</h2>
          <p>
            The original organ was built by the Norman Brothers and Beard of Norwich during the 1891- although this may have replaced an earlier organ that was placed along the Western wall. The 1891 organ was short lived as it was not completed until 1928, and by 1952, it was deemed unfit for use and would spend the next fifty years in almost constant need of repairs and revoicing until it was replaced in 2004. The current organ was designed by the French organ builder Bernard Aubertin as a mechanical, three-manual instrument. It only uses electricity for the blowing mechanism and light console. Its tonal design is a medieval Blockwerk made to complement the Chapels acoustics and is similar in sound to what the Founder Elphinstone would have been accustomed to hearing. 
          </p>
          <img src="/images/organImage2.jpg" alt="War Memorial Window" width="300" height="300" className="image" />
      
        </div>

        <div className="column">
          <img src="/images/organImage1.jpg" alt="War Memorial Window" width="300" height="200" className="image" />
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



export default OrganImages;


