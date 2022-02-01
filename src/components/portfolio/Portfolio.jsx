import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { sidePortfolio, mainPortfolio, dessertPortfolio } from "../../data";

export default function Portfolio({ eyeClosed, setEyeClosed }) {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "side",
      title: "Side/Salad",
    },
    {
      id: "main",
      title: "Main",
    },
    {
      id: "dessert",
      title: "Dessert",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "side":
      setData(sidePortfolio);
      break;
      case "main":
      setData(mainPortfolio);
      break;
      case "dessert":
      setData(dessertPortfolio);
      break;
      default:
      setData(sidePortfolio);
    }

  },[selected])

  return (
    <div className={"portfolio " + (eyeClosed && "active")} id="portfolio">
      <h1 onClick={() => setEyeClosed(!eyeClosed)}>Recipes</h1>
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
