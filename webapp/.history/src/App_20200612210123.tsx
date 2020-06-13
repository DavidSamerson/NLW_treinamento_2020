import React, {useState} from 'react';
import './App.css';
import Header from './header';

//JSX -> sintaxe de xml dentro do javascript

function App() {

const [counter, setCounter] = useState(0); //[valor do estado / função para atualizar o valor do estado]

  return (
    <div>
        <Header title="ECOLETA 1"/>
        <Header title="ECOLETA 2"/>
        <Header title="ECOLETA 3"/>
        <Header title="ECOLETA 4"/>
    </div>
  );
}

export default App;
