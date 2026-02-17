import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  



function ChapelMouse(){
  const navigate = useNavigate() ;
  return (
    <div className="ChapelMouse">
      <div className="two-column-section">
        <div className="column">
          <h2>The Chapel Mouse</h2>
          <p>
          ‘As poor as a Church mouse’ is a common phrase that may have originated in England as early as the 1600s. In a Church there was never any food kept, so a mouse would not be able to find anything to eat. This would inevitably make the mouse poor.  The local legend here at Aberdeen University says that it has a poor mouse living in the Chapel, although finding it is probably not what you want to do. Some believe there is a mouse that has been carved into the woodwork- maybe as part of the student graffiti. This came from the lore which said a mouse roamed the chapel in search of crumbs fallen from the Eucharist (communion crackers). These crumbs were left by students who had not done as their faith instructed of them. If a student saw the mouse, this meant that they were in need of God’s forgiveness for the naughty things they had done. If this is true or not is up to you to decide. But if you see a mouse in the Chapel, you may wish to reflect on your own relationship with the greater powers that be and confess any wrong doings. 
          </p>
        </div>

        <div className="column">
          <p>
          The lore of the Mouse may also have come from a Robert Burns-like idea. His famous poem ‘To a Mouse’ describes how while ploughing in the field, he found a mouse’s family home. In the poem, he laments the plight of living creatures. He illustrates our susceptibility to the schemes of others. Burns had pity on the mice and praised them for their mindfulness of the present. He was impressed by how they did not waver in fear of the future or mourn the past. In this way, the mouse of the chapel may represent a symbolic calling to focus on the present and find comfort in your current surroundings even amidst turmoil. 
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



export default ChapelMouse;


