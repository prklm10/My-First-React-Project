import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Nav";
import Home from "./Home";
import MyTable from "./MyTable";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content-area group">
          <Switch>
            <Route path="/table">
              <MyTable />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <p>&copy; This is the footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
