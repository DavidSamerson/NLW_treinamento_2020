import React, {useState} from 'react';
import './App.css';
import Header from './header';

//JSX -> sintaxe de xml dentro do javascript

function App() {

const [counter, setCounter] = useState(0); //[valor do estado / função para atualizar o valor do estado]
//Imutabilidade

function handleButton(){
    setCounter(counter + 1);
}

  return (
    <div>
        <Header title="ECOLETA 1"/>
        <Header title="ECOLETA 2"/>
        <Header title="ECOLETA 3"/>
        <Header title={`ECOLETA ${counter}`}/>

        <h1>{counter}</h1>
        <button type="button" onClick={handleButton}>Aumentar</button>
    </div>
  );
}

export default App;
