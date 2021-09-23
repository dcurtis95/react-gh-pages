import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [worksStyle, setWorksStyle] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      title: "BeNatural",
      img: "assets/BeNatural.png",
      url: "http://be-natural-project.herokuapp.com/",
      icon: "assets/globe.png",
      desc: "A web app designed and built as part of a small team during Le Wagon, allowing users to order organic farm produce from local farms."
    },
    {
      id: 2,
      title: "LaCasserole",
      img: "assets/LaCasserole.png",
      url: "https://la-casserole-new.herokuapp.com/chefs",
      icon: "assets/globe.png",
      desc: "A web app designed and built as part of a small team during Le Wagon, allowing users to hire personal chefs to cook for them."
    },
    {
      id: 3,
      title: "Portfolio",
      img: "assets/Portfolio.png",
      url: "https://www.daniel-curtis.co.uk/",
      icon: "assets/mobile.png",
      desc: "A responsive react project created around the idea of making every single element interactive! Designed and built by me, my first react project."
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0);
  }
  return (
    <div className="works" id="works">
      <div className={"slider "  + (worksStyle && "active")} style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="alignContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Web App" />
                  </div>
                    <h2 onClick={() => setWorksStyle(!worksStyle)}>{d.title}</h2>
                </div>
                <p>
                  {d.desc}
                </p>
              </div>
            </div>
            <div className="right">
                <img src={d.img} alt="Be Natural" />
            </div>
          </div>
        </div>))};
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick("right")}/>
    </div>
  )
}
