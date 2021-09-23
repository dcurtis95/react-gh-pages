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
                  Nice to meet you. <br></br>
                  I’m Daniel, a Front End Developer specialising in React. <br></br>
                  I’ve been interested in coding from an early age; working on small projects here and there.<br></br>
                  I’m a psychiatric nurse by background and from working in the NHS,
                  I have noted many inefficiencies with clinical documentation software.
                  This is what inspired me to complete a product-driven intensive bootcamp,
                  I am specifically pursuing frontend development to help improve user interaction within a given interface and what is best practice when creating intuitive design. <br></br><br></br>
                  Feel free to browse some of my <a href="#works">work</a>, view my <p onClick={() => handleClick("right")}><strong>skills</strong>.</p>

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
                  Languages: Ruby, JavaScript (ES6), CSS3 (SCSS), HTML5.<br></br><br></br>
                  Methods & Tools: Webpack, NPM, Yarn, Git, Heroku, OOP.<br></br><br></br>
                  Frameworks & Libs: React, jQuery, Node, Rails, Bootstrap.
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
                <p className="mediaText">
                  My biggest hobbies are
                  <a href="http://www.danielcookingblog.me/"> Cooking</a>,
                  <a href="https://github.com/dcurtis95"><code> Coding</code></a>,
                  <a href="https://www.swingpatrol.co.uk/"> Dancing</a>,
                  <a href="https://boardgamegeek.com/collection/user/Kerze"> Board Games </a>and
                  <a href="https://soundcloud.com/a-fluffy-sheep/tracks"> Music</a>:
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
