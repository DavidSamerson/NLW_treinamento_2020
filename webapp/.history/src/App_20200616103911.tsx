import React from 'react';
import './App.css';

//JSX -> sintaxe de xml dentro do javascript

function App() {


  return (
    <div>
        Hello Word
    </div>
  );
}

export default App;

//import React, {useState} from 'react';
//import Header from './header';


/*const [counter, setCounter] = useState(0); //[valor do estado / função para atualizar o valor do estado]
//Estado e Imutabilidade

function handleButton(){
    setCounter(counter + 1);
} */

// <Header title={`ECOLETA ${counter}`}/> -----> Passando variaveis via HTML

/*<Header title="ECOLETA 1"/>
        <Header title="ECOLETA 2"/>
        <Header title="ECOLETA 3"/>
        <Header title={`ECOLETA ${counter}`}/>

        <h1>{counter}</h1>
        <button type="button" onClick={handleButton}>Aumentar</button> */
