import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <br />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home.</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio.</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works.</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutme">About Me.</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact.</a>
        </li>
        <li>

        </li>
        <li>
          <h6>------------------</h6>
        </li>
        <li>

        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://linkedin.com/in/dcurtis95">LinkedIn.</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/dcurtis95">Github.</a>
        </li>
      </ul>
    </div>
  )
}
