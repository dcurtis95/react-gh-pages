import "./intro.scss"

export default function Intro({ eyeClosed, setEyeClosed }) {
  return (
    <div className={"intro " + (eyeClosed && "active")} id="intro">
      <div className="left">
        <div className="bio-text">
          <h1>Hello!</h1>
          <br></br>
          <h3>- I'm Daniel, a Front End Developer From London.</h3>
          <br></br>
        </div>
        <div className="imgContainer">
          <img src="assets/Daniel.png" alt="Daniel Curtis" onClick={() => setEyeClosed(!eyeClosed)}></img>
          <div className="overlay">
            Daniel Curtis
          </div>
        </div>
      </div>
      <div className="right">

      </div>
    </div>
  )
}
