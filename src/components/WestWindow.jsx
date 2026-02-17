import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function WestWindow(){
  const navigate = useNavigate() ;
  return (
    <div className="WestWindow">
      <div className="two-column-section">
        <div className="column">
          <h2>The West Window</h2>
          <p>
          The West Window, created by the studio of Clayton and Bell of London, dates to 1876. A small fragment in the top portion, however, dates back to its early days and are the oldest in the chapel. It is a round-headed window seen in the central mullion which runs up to the top, cutting the arch into two sections. The themes of this window are taken from the Hebrew Bible. On the left, you can see Samuel, Elisha, and further groups of prophets. On the right, themes from the New Testament are illustrated, such as Christ among the Doctors and Paul at the feet of Gamaliel. The four heads, in medallions above, represent the University’s founders and influential figures: King James IV, Bishop Elphinstone, Reformation leader John Knox, and the Earl Marischal. Other important figures include Bishop Patrick Forbes and Bishop Gilbert Burnet as well as Principal G. Campbell and Dr. James Beattie as the Minstrel. 
          </p>
        </div>

        <div className="column">
        <img src="/images/westWindow.jpg" alt="War Memorial Window" width="300" height="400" className="image" />
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



export default WestWindow;


