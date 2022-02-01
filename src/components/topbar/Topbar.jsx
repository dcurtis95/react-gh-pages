import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>w</span>
            <span>i</span>
            <span>t</span>
            <span>h</span>
            <span>d</span>
            <span>a</span>
            <span>n</span>
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
