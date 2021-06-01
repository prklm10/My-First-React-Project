import logo from "./logo.svg";
import "./App.css";
import l from "./squirrel.jpg";
function Home() {
  return (
    <>
      <div className="main-area">
        <h2>Main Heading</h2>
        <nav class="ui-menu">
          <ul class="group">
            <li>
              <a class="ui-home" href="#">
                home
              </a>
            </li>
            <li>
              <a class="ui-profile" href="#">
                profile
              </a>
            </li>
            <li>
              <a class="ui-settings" href="#">
                settings
              </a>
            </li>
          </ul>
        </nav>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum maxime
          asperiores dolorem veniam adipisci, iure fugit recusandae. Hic
          distinctio nesciunt unde ratione molestiae, cum sapiente, soluta
          maiores laudantium amet sunt dolores sed mollitia iure quos. Fuga,
          cupiditate accusantium consequuntur incidunt et quisquam ratione. Eos
          cumque ducimus magni culpa provident tenetur assumenda ipsum a ut
          omnis, laborum consequuntur repudiandae illum veniam delectus
          inventore.
        </p>
        <div className="bird">
          <p>Bird Image</p>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          incidunt sint mollitia aliquid sit perspiciatis asperiores, saepe iure
          optio, ratione aliquam nobis nihil expedita nulla excepturi? Nulla
          expedita mollitia quibusdam nam obcaecati aut culpa aliquam
          consequatur omnis error ullam dolor illo reprehenderit ex excepturi
          illum fugiat repellendus, sequi quo magnam!
        </p>
      </div>
      <aside className="sidebar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quo ex
        quia praesentium, porro atque optio nobis voluptates natus nihil
        architecto laborum quaerat repellendus veniam deleniti dicta rerum
        pariatur quisquam expedita magni asperiores enim. Voluptates, optio.
        Soluta iure dignissimos, nobis nesciunt exercitationem consequuntur
      </aside>
      <div className="fix"></div>
    </>
  );
}
export default Home;
