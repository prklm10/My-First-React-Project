import logo from "./logo.svg";
import "./App.css";
import l from "./squirrel.jpg";
function Nav() {
  return (
    <header>
      <h1>Websit Title</h1>
      <p>Website Slogan</p>
      <nav className="site-nav">
        <ul className="group">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="favorite-bread.html">About</a>
          </li>
          <li>
            <a href="table">My Table</a>
          </li>
          <li>
            <a href="form.html">My Form</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
