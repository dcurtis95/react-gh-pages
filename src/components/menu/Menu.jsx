import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <br />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Recipes</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works.</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutme">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li>

        </li>
        <li>
          <h6>------------------</h6>
        </li>
        <li>

        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.tiktok.com/@dinnerwithdan">TikTok</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.instagram.com/dinnerwithdan01">Instagram</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://www.youtube.com/channel/UCao5FVvGtQo1GWuHLYbi-Zg">Youtube</a>
        </li>
      </ul>
    </div>
  )
}
