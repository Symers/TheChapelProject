import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../info.css";
import TripAdvisorWriteReview from "./tripAdvisorWriteReview";

function Mary() {
  const navigate = useNavigate();
  const widgetContainer = useRef(null);


  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>Saying Goodbye to Mary</h2>
          <p>
            Originally, this doorway led to the library building which is no
            longer extant. The sculpture above the doorway was not an original
            part of the Chapel’s furniture, but was a later addition brought
            from Germany and gifted to the Chapel by Dr. Douglas Strachan in
            1944. A work of the early 16th century, it became an important
            feature of the chapel as a final stop for visitors to say goodbye
            and pray for safety and health on their journey ahead. She is the
            Virgin of the Apocalypse and is created in reference to Revelations
            Chapter 12, which is meant to give encouragement that this life is
            short with many trials, but evil will not prevail if we seek good.
          </p>
        </div>
        <div className="column">
          <img
            src="/images/maryImage.jpg"
            alt="MaryImage"
            width="300"
            height="400"
            className="image"
          />
        </div>
      </div>

      <div className="tripadvisor-widget">
        <TripAdvisorWriteReview />
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

export default Mary;