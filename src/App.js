import './App.css';
import Botao from './botao'; 
import { useState } from 'react';

function App() {
  const [firstNB, setftnumber] = useState(0);
  const [secondNB, setsdnumber] = useState(0);
  const [result, setresult] = useState(0);

  const handleOperation = (operation) => {
    if (operation === 'Somar') {
      setresult(firstNB + secondNB);
    } else if (operation === 'Subtracao') {
      setresult(firstNB - secondNB);
    } else if (operation === 'Divisao') {
      setresult(firstNB / secondNB);
    } else if (operation === 'Multiplicacao') {
      setresult(firstNB * secondNB);
    }
  };

  return (
    <>
      <div className='container'>
        Calculator
        
      <div className='numberscamp'>
        <label className='FirstName'>
          First Number
          <input
            type="number"
            value={firstNB}
            onChange={(e) => setftnumber(Number(e.target.value))}
          />
        </label>
        <label className='SecondName'>
          Second Number
          <input
            type="number"
            value={secondNB}
            onChange={(e) => setsdnumber(Number(e.target.value))}
          />
        </label>

        <label className='Result'>
          Result
          <input
            type="number"
            value={result}
            readOnly 
          />
        </label>
      <div className='buttoncontainer'>
        <Botao onClick={() => handleOperation('Somar')}>Somar</Botao>
        <Botao onClick={() => handleOperation('Subtracao')}>Subtracao</Botao>
        <Botao onClick={() => handleOperation('Divisao')}>Divisao</Botao>
        <Botao onClick={() => handleOperation('Multiplicacao')}>Multiplicacao</Botao>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
