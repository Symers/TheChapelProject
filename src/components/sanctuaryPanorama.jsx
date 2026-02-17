import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
  
const popupRef = React.createRef();

function Panorama() {

    const [largePulpitPopupVisible, setLargePulpitPopupVisible] = useState(false);
    const [elphinstoneGravePopupVisible, setElphinstoneGravePopupVisible] = useState(false);
    const [chapelCeilingPopupVisible, setChapelCeilingPopupVisible] = useState(false);
    const [exitPopupVisible, setExitPopupVisible] = useState(false);
    const [directionPopupVisible, setDirectionPopupVisible] = useState(false);
    const [deskPopupVisible, setDeskPopupVisible] = useState(false);
    const [campbellPopupVisible, setCampbellPopupVisible] = useState(false);
    const [rsmithPopupVisible, setRSmithPopupVisible] = useState(false);
    const [northEastPopupVisible, setNorthEastPopupVisible] = useState(false);
    const [harrowerPopupVisible, setHarrowerPopupVisible] = useState(false);
    const [southEastPopupVisible, setSouthEastPopupVisible] = useState(false);
    const [geddesPopupVisible, setGeddesPopupVisible] = useState(false);

    //Add text to speech
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); // Cancel previous speech, if any
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  //Stop text to speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
      window.scrollTo(0, 0);
  
      //Lock the scroll position
      const lockScroll = () => window.scrollTo(0, 0);
      window.addEventListener("scroll", lockScroll);
  
      // lock touch scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
  
      return () => {
        window.removeEventListener("scroll", lockScroll);
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setLargePulpitPopupVisible(false);
        setElphinstoneGravePopupVisible(false);
        setChapelCeilingPopupVisible(false);
        setExitPopupVisible(false);
        setDirectionPopupVisible(false);
        setDeskPopupVisible(false);
        setCampbellPopupVisible(false);
        setRSmithPopupVisible(false);
        setNorthEastPopupVisible(false);
        setHarrowerPopupVisible(false);
        setSouthEastPopupVisible(false);
        setGeddesPopupVisible(false);
        stopSpeech();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() =>{
    const addHotspot = () => {

    if (ReactPannellum.getCurrentScene() === "firstScene") {
        ReactPannellum.addHotSpot(
        {
          pitch: 0,
          yaw: 180,
          type: "custom",
          cssClass: "directionHotspot",
          createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";
            hotspotDiv.onclick = () => {
              setDirectionPopupVisible(true);
            };
          },
        },
      );
        ReactPannellum.addHotSpot(
        {
            pitch: 35,
            yaw: 300,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setLargePulpitPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 15,
            yaw: 315,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setRSmithPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 13,
            yaw: 336,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setNorthEastPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 20,
            yaw: 357,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setHarrowerPopupVisible(true);
            };
            },
        },
        );

         ReactPannellum.addHotSpot(
        {
            pitch: 15,
            yaw: 20,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setSouthEastPopupVisible(true);
            };
            },
        },
        );

         ReactPannellum.addHotSpot(
        {
            pitch: 15,
            yaw: 47,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setGeddesPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 25,
            yaw: 255,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setCampbellPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 0,
            yaw: 65,
            type: "custom",
            cssClass: "deskHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setDeskPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: -30,
            yaw: 350,
            type: "custom",
            cssClass: "elphinstoneGraveHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setElphinstoneGravePopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 45,
            yaw: 0,
            type: "custom",
            cssClass: "chapelCeilingHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setChapelCeilingPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch:5,
            yaw: 90,
            type: "custom",
            cssClass: "exitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setExitPopupVisible(true);
            };
            },
        },
        );
      }
    };

    // Wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // Small delay to ensure Pannellum loads

    return () => {
      window.speechSynthesis.cancel(); //Stop text to speech when leaving the page
    }

    }, []);

  const style = {
    width: "100%",
    height: "100dvh",           // or "100vh"
    background: "#000000"
  };

  const config = {
      autoLoad: true,
      showControls: false,
      showFullscreenCtrl: false,
    };
  

return (
  <div>

    <ReactPannellum
      id="1"
      sceneId="firstScene"
      config={config}
      imageSource="images/sanctuary.jpg"
      style={style}
    />


{largePulpitPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Main Chapel Pulpit</h2>
                <p id = "pulpitParagraph">The pulpit was originally a part of the St. Machar’s Cathedral but was moved here during the 1800s renovation. On it you can see the arms of Bishop William Stewart (d. 1545).</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('pulpitParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setLargePulpitPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {elphinstoneGravePopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Elphinstone's Tomb</h2>
                <p id = "graveParagraph">After his death, Bishop Elphinstone was buried in King’s College Chapel. What remains today is the original base and cover slab of the tomb chest. It is made of black marble which was brought from Tournai in Belgium. This same marble from Tournai can be seen in adjoining grave markers.  The statue of Bishop Elphinstone and supporting figures were destroyed after the Reformation. A new monument for Elphinstone, created in 1926, can be found on the lawn outside of the Chapel.​</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('graveParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setElphinstoneGravePopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {harrowerPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Harrower Memorial Window</h2>
                <p id = "harrowerParagraph"> 
                  This is the Easternmost window of the Chapel. It was designed by Douglas Strachan in 1934 with the inscription reading ‘To the Memory of John Harrower for forty-five years Professor of Greek Language and Literature, defender of humane studies. His wife Rachel Blanche gifted this window by her will.’
                </p>
                <div className="popup-buttons">
                  <Link to="/harrower" className="info-button">Learn More</Link>
                  <button onClick={() => speakText(document.getElementById('harrowerParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setHarrowerPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {campbellPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Campbell Memorial Window</h2>
                <p id = "campbellParagraph"> 
                  This window, a work by Clayton and Bell of London, was installed in 1880. It remembers Peter Colin Campbell, a Professor of Greek at the University from 1854 to 1855 as well as Vice-Chancellor from 1855 to 1876. The window shows two scenes of gift-giving, one from the old testament - King Solomon receiving gifts from the Queen Sheba – and one from the New Testament - the adoration of the magi presenting gifts to the Christ child. At the bottom are the coats of arms for the University as well as Principal Campbell.  
                </p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('campbellParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setCampbellPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        
        {northEastPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The North-East Window</h2>
                <p id = "northEastParagraph">
                  Installed in 1938, this is a late work by Douglas Strachan, to commemorate Dr. Duncan Mearns and Sir George Adam Smith. Dr. Mearns was the Professor of Divinity from 1816-1852 and Sir Smith was the Principal and Vice-Chancellor from 1910-1935. The window was a replacement for an earlier one which was solely dedicated to Dr. Mearns.
                ​</p>
                <div className="popup-buttons">
                  <Link to="/northEast" className="info-button">Learn More</Link>
                  <button onClick={() => speakText(document.getElementById('northEastParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setNorthEastPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {southEastPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The South-East Window</h2>
                <p id = "southEastParagraph">
                 This is another memorial window, dedicated to numerous individuals connected to the university: Professor Hugh Macpherson, the professor of Hebrew from 1793 to 1797, Professor of Greek and Sub-Principle of the University from 1797 to 1854; Hector Munro Macdonald, Professor of Mathematics from 1904-1935; and James Edward Crombie, Assessor on the University Court from 1900 to 1908 and again 1913 to 1932.
In this design, Strachan used the ‘Angel of the Flaming Sword’ to symbolize human learning in Philosophy, Science, and Art. The window complements the theme of the North-East window: life and death are symbolised by the tree wrapped by the serpent, the contrast of day and night, and the man steering through the ocean of Time. The figures above represent the cardinal virtues: fortitude, justice, prudence, and temperance. And in the lower portion, War is contrasted with Peace. 

                ​</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('southEastParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setSouthEastPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {geddesPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>William Geddes Memorial Window</h2>
                <p id = "geddesParagraph">
                 This window was created in 1903 by Strachan as a dedication ‘in loving duty to the memory of William Duguid Geddes, Knight, L.L.D of Aberdeen and Edinburgh, Litt. D of Dublin, Professor of Greek from 1855-1885 as well as Principal and Vice-Chancellor from 1885 to 1900 by his wife, sisters, brother, and daughter.’
It is a scene portraying the three wise men giving gifts to the Christ child. This was meant to symbolize the gifts which Sir William Geddes left to those around him: gifts of learning and wisdom of both earthly and heavenly matters. Four angels at the top further this theme; they represent divine wisdom, kingship, passion, and fortune. Perhaps in an attempt to link Geddes’ Classical interests with the Christian setting of the Chapel, Strachan also included depictions of four Sibyls – ancient prophetesses that were said to have predicted the birth of Christ.   

                ​</p>
                <div className="popup-buttons" ref = {popupRef}>
                  <button onClick={() => speakText(document.getElementById('geddesParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setGeddesPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {rsmithPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Robertson Smith Memorial Window</h2>
                <p id = "rsmithParagraph">
                  This window was cooperatively designed by the Aberdonian architect Alexander Marshall Mackenzie of Aberdeen (who also designed Elphinstone Hall, next to the Chapel), together with the Pre-Raphaelite artist Sir Edward Burne Jones, who designed the figures. It is dedicated to William Roberston Smith L.L.D of Aberdeen, Litt.D of Dublin, Doctor of Theology of Strasburg, Professor of Cambridge, and an alumnus of the University (1846-1894). 	
The window shows four prophets of the Hebrew Bible: Isaiah, Jeremiah, Ezekial, and Daniel; and the Angels above hold scrolls of knowledge. 
                ​</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('rsmithParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setRSmithPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}
      
      {chapelCeilingPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Chapel Ceiling</h2>
                <p id = "ceilingParagraph">The ceiling is a unique blend of Scottish and European aesthetics which is commonly referred to as wagon ceilings these design patterns have been popular since 1200s but saw a revival in appreciation during the late 1400s and early 1500s right around the time which Kings College chapel was constructed. The ceiling today still likely maintains a very similar style to when it was originally constructed based on evidence of other ceilings around Scotland.</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('ceilingParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setChapelCeilingPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {deskPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Desk of Bishop Patrick Forbes</h2>
                <p id = "deskParagraph">Restored in 1889 by McPherson, this is was the desk of Bishop Patrick Forbes and originally supported the Lenten veil (a cloth usually depicting the Passion of Christ and displayed during Holy Week, leading up to Easter Sunday). Forbes’ coat of arms and the date 1627 still remain; however, the original inscription was destroyed. This defacing likely happened during the Scottish Reformation by the Covenanters who were opposed to any image or Catholic doctrinal themes within newly designated Protestant churches and chapels. </p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('deskParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setDeskPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {exitPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Please Exit The Chapel Here</h2>
                <div className="popup-buttons">
                  <Link to="/mary" className="info-button">Please Click Here</Link>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setExitPopupVisible(false);
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {directionPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>Back to the Choir Stalls Section</h2>
            <div className="popup-buttons">
              <Link to="/choirStallsPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
        )}


  </div>
);
}

export default Panorama;
