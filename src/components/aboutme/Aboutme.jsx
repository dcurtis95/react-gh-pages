import { useState } from "react";
import "./aboutme.scss"

export default function Aboutme() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="alignContainer">
                    <h2>Title</h2>
                  </div>
                  <p>
                    Description
                  </p>
                </div>
              </div>
              <div className="right">

              </div>
            </div>
          </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="alignContainer">
                  <h2>Title</h2>
                </div>
                <p>
                  Description
                </p>
              </div>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="alignContainer">
                  <h2>Title</h2>
                </div>
                <p>
                  Description
                </p>
              </div>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick("right")} />
    </div>
  )
}
