import logo from "./logo.svg";
import "./App.css";
import "./MyTable.css";
import "./Form.css";
import l from "./squirrel.jpg";
function Form() {
  return (
    <form>
      <label for="email" class="hidden-label">
        Email
      </label>
      <input type="email" name="email" id="email" placeholder="email"></input>
      <label for="password" class="hidden-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      ></input>
      <select name="" id="">
        <option value="">Initial View</option>
        <option value="">My Profile</option>
        <option value="">Inbox</option>
        <option value="">Account Settings</option>
      </select>
      <input type="submit" value="Sign In"></input>
      <label for="remember">
        <input
          type="checkbox"
          name="remember"
          checked="unchecked"
          value="yes"
        ></input>
        <span class="checkbox-text">Stay Signed In</span>
      </label>
    </form>
  );
}

export default Form;
