import logo from "./logo.svg";
import "./App.css";
import "./MyTable.css";
import l from "./squirrel.jpg";
function MyTable() {
  return (
    <div className="main-area">
      <table className="grocery-list">
        <thead>
          <tr>
            <th className="col-item">Item Name</th>
            <th className="col-quantity">Quantity</th>
            <th className="col-price">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oranges</td>
            <td className="dummy">5 Kg</td>
            <td>$3.5</td>
          </tr>
          <tr>
            <td>Peach</td>
            <td className="dummy">7 kg</td>
            <td>$ 8.9</td>
          </tr>
          <tr>
            <td>Pear</td>
            <td className="dummy">7 kg</td>
            <td className="dummy">$ 8.9</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td className="dummy">7 kg</td>
            <td className="dummy">$ 8.9</td>
          </tr>
          <tr>
            <td>Watermelon</td>
            <td className="dummy">7 kg</td>
            <td className="dummy">$ 8.9</td>
          </tr>
          <tr>
            <td>Very long list of Groceries to check styling of table </td>
            <td className="dummy">7 kg</td>
            <td className="dummy">$ 8.9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
