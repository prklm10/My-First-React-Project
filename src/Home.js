import logo from "./logo.svg";
import "./App.css";
import l from "./squirrel.jpg";
function Home() {
  return (
    <>
      <div className="main-area">
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
        <div className="image-banner">
          <img src={l} alt="squirrel on train tracks" />
          <div className="image-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            porro illo eligendi aut voluptatibus praesentium in minima numquam.
            Dolores, ad.
          </div>
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
