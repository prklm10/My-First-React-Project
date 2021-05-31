import logo from "./logo.svg";
import "./App.css";
import l from "./squirrel.jpg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header>
      <h1>Websit Title</h1>
      <p>Website Slogan</p>
      <nav className="site-nav">
        <ul className="group">
          <li>
            <Link to="index">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="table">Table</Link>
          </li>
          <li>
            <Link to="form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
