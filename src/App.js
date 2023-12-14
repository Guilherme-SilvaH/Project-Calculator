import React, { useState } from 'react';
import Botao from './botao';
import Historico from './Historico';
import './App.css'

function App() {
  const [firstNB, setftnumber] = useState(0);
  const [secondNB, setsdnumber] = useState(0);
  const [result, setresult] = useState(0);
  const [historico, setHistorico] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [clear, setClear] = useState(false)

  const handleOperation = (operation) => {
    let newResult;

    if (operation === 'Somar') {
      newResult = firstNB + secondNB;
    } else if (operation === 'Subtracao') {
      newResult = firstNB - secondNB;
    } else if (operation === 'Divisao') {
      newResult = firstNB / secondNB;
    } else if (operation === 'Multiplicacao') {
      newResult = firstNB * secondNB;
    }

    setHistorico([...historico, newResult]);
    setftnumber(0);
    setsdnumber(0);
    setresult(0);
    handleResultClick()
  };

  const Handlecleanresult = () =>{
    setClear(!clear);
   setShowHistory(false)
   setHistorico([])
  }

  const handleResultClick = () => {
    setShowHistory(!showHistory);
    setftnumber(0);
    setsdnumber(0);
    setresult(0);
  };

  return (
    
    <div className='containerAll'>
      <div className='containerInf'>
        <h1>CALCULATOR</h1>
          
            <div className='numberscamp'>
              <label className='Firstnumber'>
                <h3>First Number</h3>
                <input
                  type="number"
                  value={firstNB}
                  onChange={(e) => setftnumber(Number(e.target.value))}
                />
              </label>
              <label className='SecondName'>
              <h3>Second Number</h3>
                <input
                  type="number"
                  value={secondNB}
                  onChange={(e) => setsdnumber(Number(e.target.value))}
                />
              </label>

              <div className='result'>
                <Botao onClick={() => handleOperation('Somar')}>+</Botao>
                <Botao onClick={() => handleOperation('Subtracao')}>-</Botao>
                <Botao onClick={() => handleOperation('Divisao')}>/</Botao>
                <Botao onClick={() => handleOperation('Multiplicacao')}>*</Botao>

                <div>
                  <Botao onClick={handleResultClick}>RESULT</Botao>
                </div>

                <div className=''>
                  {showHistory && <Historico resultados={historico} />}
                </div>
                
                <div className='ContainerHistorico'>
                  <Botao onClick={Handlecleanresult}>CLEAR HISTORY</Botao>
                </div>
            
                
              </div>
            </div>
        
        </div>
      </div>
  
  );
}

export default App;