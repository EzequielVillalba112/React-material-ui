import { Link } from "react-router-dom";
import "./header.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  let menuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="menu-container">
        <div className="title-menu">
          <IoMenu fontSize="50px" onClick={menuClick} />
          <h1>React + Materia-ui</h1>
        </div>
        <nav
          className={menuOpen == false ? "menu-disabled" : "menu-active"}
        >
          <ul className="items-menu">
            <li>
              <Link to="/container-sx" onClick={menuClick}>Container y the sx</Link>
            </li>
            <li>
              <Link to="/typografy" onClick={menuClick}>Typography</Link>
            </li>
            <li>
              <Link to="/box" onClick={menuClick}>Box</Link>
            </li>
            <li>
              <Link to="/grid" onClick={menuClick}>Grid</Link>
            </li>
            <li>
              <Link to="/practica-styled" onClick={menuClick}>Practica Styled</Link>
            </li>
            <li>
              <Link to="/card" onClick={menuClick}>Card</Link>
            </li>
            <li>
              <Link to="/navbar" onClick={menuClick}>Navbar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
