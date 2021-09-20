import "./topbar.scss"
import "./Daniel Curtis.png"
// import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            dcurtis.
            </a>
          {/* <a href="#intro" className="logo"><img alt="Daniel Curtis" src={require("./Daniel Curtis.png").default} height={55} width={70}></img></a> */}
          <div className="itemContainer">
            {/* <MailIcon className="icon" />
            <span>danielcurtis95@gmail.com</span> */}
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
