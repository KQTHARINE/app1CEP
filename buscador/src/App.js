import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="Container">
      <h1 className="title"> BUSCADOR DE CEP </h1>
      <div className="containerInput"> 
        <input type="text" placehoder="Digite aqui..."/>
        <button className="buttonsearch">
           <FiSearch size={25} color="blue"/>
         </button>
      </div>
    </div>
  );
}

export default App;
