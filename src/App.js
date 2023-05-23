import React, { useState } from "react";
import "./App.css";

//O hook useState é usado para adicionar estado a um componente funcional no React.
export default function App() {
  console.log("0-Renderizar: App");
  // o useState é usado para criar uma variável de estado chamada "name" e
  //uma função "setName" para atualizar o valor desse estado.
  //podemos inicializar o estado com um valor padrão ("Leo" neste caso).
  // const [name, setName] = useState("Leo");
  // a função de inicialização seja executada apenas uma vez, durante a primeira renderização do componente.
  const [name, setName] = useState(() => {
    console.log("1-Initi: useState");
    return "leo";
  });

  console.log("1-Initi: name:", name);

  // manipulador de eventos chamado "handler", que é acionado quando o botão é clicado.
  function handler() {
    console.log("4 Render: função");
    //a função "setName" é chamada para atualizar o valor do estado "name" para "Miguel".
    setName("Miguel");
    console.log("5 não atualiza: name");
    console.log(name);
    // a atualização do estado é assíncrona. Isso significa que a atualização real do estado e a renderização subsequente ocorrerão em algum momento posterior.
  }

  console.log("2 Render: escopo");

  return (
    <div className="App">
      <div className="App-header">
        {console.log("3 Render: Dom:", name)}
        {name}
        {/* botão que chama a função de manipulação quando é clicado. */}
        <button onClick={handler}>Clicar</button>
      </div>
    </div>
  );
}

function Componente1() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Basic() {
  const [name, setName] = useState("Leo");

  return (
    <div className="App">
      <div className="App-header">{name}</div>
    </div>
  );
}
