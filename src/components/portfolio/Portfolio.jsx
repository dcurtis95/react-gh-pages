import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio, rubyPortfolio } from "../../data";

export default function Portfolio() {
  const [portStyle, setPortStyle] = useState(false);
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile / React",
    },
    {
      id: "ruby",
      title: "Ruby on Rails",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "web":
      setData(webPortfolio);
      break;
      case "mobile":
      setData(mobilePortfolio);
      break;
      case "ruby":
      setData(rubyPortfolio);
      break;
      default:
      setData(webPortfolio);
    }

  },[selected])

  return (
    <div className={"portfolio " + (portStyle && "active")} id="portfolio">
      <h1 onClick={() => setPortStyle(!portStyle)}>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(


        <div className="item">
              <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
