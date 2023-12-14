import React from 'react';

const Historico = ({ resultados }) => {
  return (
    <div className='historico'>
      <h2>Historico de Resultados</h2>
      <ul className='openedHistory'> 
        {resultados.map((resultado, index) => (
          <li key={index}>{resultado}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
