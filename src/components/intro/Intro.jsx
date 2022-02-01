import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro({ eyeClosed, setEyeClosed }) {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 20,
      typeSpeed: 100,
      backDelay: 10000,
      backSpeed: 100,
      strings: ["Hello.", "Welcome."],
    });
  }, []);

  return (
    <div className={"intro " + (eyeClosed && "active")} id="intro">
      <div className="left">
        <div className="bio-text">
          <h1>
            &#160;
            <span ref={textRef}></span>
          </h1>
          <h3>I'm Daniel, a Home Cook from London.</h3>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/dinnerwithdan.png" alt="Daniel Curtis"></img>
          <div className="overlay" onClick={() => setEyeClosed(!eyeClosed)}>
            <div className="overlay-title">
              <div className="overlay-description">
                Daniel Curtis
              </div>
            </div>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}
