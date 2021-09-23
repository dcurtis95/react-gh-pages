import { useState } from "react";
import ResponsivePlayer from "../video/ResponsivePlayer";
import "./aboutme.scss"

export default function Aboutme() {
  const [abStyle, setAbStyle] = useState(false);
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
    <div className="aboutme" id="aboutme">
      <div className={"slider " + (abStyle && "active")} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="alignContainer">
                  <h2 onClick={() => setAbStyle(!abStyle)}>About Me</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at fuga inventore doloremque eligendi dolorem itaque tempore, animi illo temporibus quisquam eveniet similique fugiat officia, cumque in voluptatum aspernatur placeat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="alignContainer">
                  <h2 onClick={() => setAbStyle(!abStyle)}>Skills</h2>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae debitis at non tempora mollitia. Quod iure placeat error recusandae nobis excepturi eius accusamus magni illum! Voluptate eligendi aut deleniti ab?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="alignContainer">
                  <h2 onClick={() => setAbStyle(!abStyle)}>Interests</h2>
                </div>
                <p>
                  My biggest hobbies are <a href="http://www.danielcookingblog.me/">Cooking</a>, <code>coding</code> and music:
                </p>
                <div className="s-container">
                <ResponsivePlayer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick("right")} />
    </div>
  )
}
