import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/BeNatural.png" alt="" />
            <h3>Daniel Curtis Portfolio</h3>
        </div>
        <div className="item">
          <img src="assets/BeNatural.png" alt="" />
          <h3>Daniel Curtis Portfolio</h3>
        </div>
        <div className="item">
          <img src="assets/BeNatural.png" alt="" />
          <h3>Daniel Curtis Portfolio</h3>
        </div>
      </div>
    </div>
  )
}
