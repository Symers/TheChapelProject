import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";

const popupRef = React.createRef();
  
function Panorama() {

  const [organPopupVisible, setOrganPopupVisible] = useState(false);
  const [roodScreenPopupVisible, setRoodScreenPopupVisible] = useState(false);
  const [warMemorialPopupVisible, setWarMemorialPopupVisible] = useState(false);
  const [smallPulpitPopupVisible, setSmallPulpitPopupVisible] = useState(false);
  const [anteChapelPopupVisible, setAnteChapelPopupVisible] = useState(false);
  const [warMemWindowPopupVisible, setWarMemWindowPopupVisible] = useState(false);
  const [westWindowPopupVisible, setWestWindowPopupVisible] = useState(false);
  const [mersonPopupVisible, setMersonPopupVisible] = useState(false);
  const [directionPopupVisible, setDirectionPopupVisible] = useState(false);

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
        setOrganPopupVisible(false);
        setRoodScreenPopupVisible(false);
        setWarMemorialPopupVisible(false);
        setSmallPulpitPopupVisible(false);
        setAnteChapelPopupVisible(false);
        setWarMemWindowPopupVisible(false);
        setWestWindowPopupVisible(false);
        setMersonPopupVisible(false);
        setDirectionPopupVisible(false);
        stopSpeech();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const addHotspot = () => {
        if (ReactPannellum.getCurrentScene() === "firstScene") {
          ReactPannellum.addHotSpot(
            {
              pitch: 40,
              yaw: 185,
              type: "custom",
              cssClass: "organHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  setOrganPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 40,
              yaw: 240,
              type: "custom",
              cssClass: "organHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  setMersonPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 35,
              yaw: 320,
              type: "custom",
              cssClass: "smallPulpitHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setSmallPulpitPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 200,
              type: "custom",
              cssClass: "roodScreenHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setRoodScreenPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 25,
              yaw: 70,
              type: "custom",
              cssClass: "warMemWindowHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setWarMemWindowPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: -10,
              yaw: 300,
              type: "custom",
              cssClass: "warMemorialHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setWarMemorialPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 0,
              type: "custom",
              cssClass: "anteChapelHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                   
                  setAnteChapelPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 30,
              yaw: 0,
              type: "custom",
              cssClass: "westWindowHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                   
                  setWestWindowPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 182,
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
        }
    };

    // wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // small delay to ensure Pannellum loads

    return () => {
      window.speechSynthesis.cancel(); // stop text to speech when leaving the page
    }

    }, []);

  const style={
      width: "100%",
      height: "100vh",
      background: "#000000"
    };

  const config = {
      autoLoad: true,
      showControls: false,
      showFullscreenCtrl: false,
    };
  

return (
  <div>

    <div className="panorama-shell">
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        config={config}
        imageSource="images/AnteChapel.jpg"
        style={{ width: "100%", height: "100%" }} 
      />
    </div>


    {anteChapelPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Ante-Chapel</h2>
                <p id = "anteChapelParagraph">The Antechapel serves as a space to honor University members who lost their lives in World War I and II, with a commemorative window and names displayed around the room. While its structure has remained largely unchanged, it has become smaller due to the addition of the Rood Screen. The Antechapel now welcomes visitors into the Chapel, where services and events continue to be held.</p>
                <div className="popup-buttons">
                  <Link to="/anteChapel" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('anteChapelParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className = "popup-close-button">
                    <button className = "close-button" onClick={() => {
                    setAnteChapelPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

    {roodScreenPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The Rood Screen</h2>
            <p id = "roodScreenParagraph">The Rood Screen, originally separating the clergy and choir from worshipers in the antechapel, was relocated to align with the current entrance to meet changing needs. Initially, the antechapel served to divide the small student body—then part of a private collegiate chapel linked to King’s College—from chapel leadership. As student numbers grew, the screen’s move meant students now walked to St. Machar’s for services, supervised by professors to prevent straying during the journey.</p>
            <div className="popup-buttons">
              <Link to="/roodScreen" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('roodScreenParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
                <div className = "popup-close-button">
                  <button className = "close-button" onClick={() => {
                setRoodScreenPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}    

    {warMemorialPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The War Memorial</h2>
            <p id = "warMemParagraph">The Antechapel of King's College Chapel at the University of Aberdeen serves as the university's war memorial, honoring 524 students and staff who lost their lives in the First and Second World Wars. Their names are inscribed on the panelling around the walls. The War Memorial Window, created by Douglas Strachan in 1920-1921, adds to the commemorative atmosphere.</p>
            <div className="popup-buttons">
              <button onClick={() => speakText(document.getElementById('warMemParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
                <div className = "popup-close-button">
                  <button className = "close-button" onClick={() => {
                setWarMemorialPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}  

    {mersonPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>Merson Memorial Window</h2>
            <p id = "mersonParagraph">
            This small window was donated by Dorthy Merson-Bonner in remembrance of her brother William Merson and his friends who were lost during the First World War. It has two small panels: on the left, the University coat of arms topped by the badge of the Gordon Highlanders regiment. On the right is Saint Andrew, the patron saint of Scotland, holding a fish. He is surrounded by the sea with a banner of Scotland over his head and a crucifix behind him.
            </p>
            <div className="popup-buttons">
              <button onClick={() => speakText(document.getElementById('mersonParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
                <div className = "popup-close-button">
                  <button className = "close-button" onClick={() => {
                setMersonPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}  

    {smallPulpitPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The Small Pulpit</h2>
            <p id = "smallPulpitParagraph">This small wooden structure today seems oddly out of place along the western wall. Originally, it served as one of two pulpits installed on the upper part of the rood screen. From these pulpits, students would read from the Bible and impart the words of God from a high place during services. These were removed when the organ was introduced to the chapel to accommodate the instrument.</p>
            <div className="popup-buttons">
              <button onClick={() => speakText(document.getElementById('smallPulpitParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setSmallPulpitPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {westWindowPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The West Window</h2>
            <p id = "westWindowParagraph">
            The West Window, created by the studio of Clayton and Bell of London, dates to 1876. A small fragment in the top portion, however, dates back to its early days and are the oldest in the chapel. It is a round-headed window seen in the central mullion which runs up to the top, cutting the arch into two sections. The themes of this window are taken from the Hebrew Bible. 
            </p>
            <div className="popup-buttons">
              <Link to="/westWindow" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('westWindowParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setWestWindowPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {warMemWindowPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The War Memorial Window</h2>
            <p id = "warMemParagraph">Designed by Douglas Strachan of Aberdeen, the War Memorial Window commemorates fallen Soldiers connected to the University. The window considers two main themes: our struggles which we must face and the goodness we find in knowledge and reason. This aligns with the University’s founding mission, to be “open to all and dedicated to the pursuit of truth in the service of others”. </p>
            <div className="popup-buttons">
              <Link to="/warMemWindow" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('warMemParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setWarMemWindowPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {organPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>The Chapel Organ</h2>
            <p id="organParagraph">
              The chapel’s original organ (installed in 1891 by Norman Brothers and Beard of Norwich) proved unreliable and, after decades of repairs, was replaced in 2004. Today’s organ—designed by French builder Bernard Aubertin—is a largely mechanical, three-manual instrument voiced in a medieval style to suit the chapel’s acoustics and echo the sound Elphinstone may have known.
            </p>
            <div className="popup-buttons">
              <Link to="/organImages" className="info-button">Learn More</Link>
              <button onClick={() => speakText(document.getElementById('organParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setOrganPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {directionPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>Please Enter the Next Section of the Chapel Through the Rood Screen</h2>
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