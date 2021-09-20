import "./topbar.scss"
import "./Daniel Curtis.png"
// import {Code,Mail} from '@material-ui';
// import CodeIcon from '@mui/icons-material/Code';
// import { CodeIcon, MailIcon } from '@mui/icons-material';
// import { CodeIcon } from '@mui/icons-material/Code';
// import { MailIcon } from '@mui/icons-material/Mail';
// import { CodeIcon } from '@mui/icons-material/Code';
// import { MailIcon } from '@mui/icons-material/Mail';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">dcurtis.</a>
          {/* <a href="#intro" className="logo"><img alt="Daniel Curtis" src={require("./Daniel Curtis.png").default} height={55} width={70}></img></a> */}
          <div className="itemContainer">
            {/* <CodeIcon className="icon" /> */}
              <span></span>
          </div>
          <div className="itemContainer">
            {/* <MailIcon className="icon" /> */}
            {/* <span>danielcurtis95@gmail.com</span> */}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
