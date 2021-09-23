import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span>d</span>
            <span>c</span>
            <span>u</span>
            <span>r</span>
            <span>t</span>
            <span>i</span>
            <span>s</span>
            <span>.</span>
            </a>
          <div className="itemContainer">
          </div>
          <div className="itemContainer">
            <span></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
