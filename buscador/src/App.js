import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css' ;

function App() {

  function aoClicar() {
  alert("Oque tem dentro do inpu: " + input)
  }

  const [input, setInput] = useState("")

  return (
    <div className="container">
      <h1 className="title"> BUSCADOR DE CEP </h1>
      <div className="containerInput"> 
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
           <FiSearch size={25} color="black"/>
         </button>
      </div>

      <main className="main"> 
        <h2> CEP: 00000000 </h2>
        <span> RUA: 00000000 </span>
        <span> BAIRRO: 00000000 </span>
        <span> CIDADE: 00000000 </span>
        <span> ESTADO: 00000000 </span>
      </main>
    </div>
  );
}

export default App;
