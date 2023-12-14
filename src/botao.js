import React from "react";

const Botao = (props) => {
  const buttonStyle = {
    backgroundColor: 'white',
    padding: '8px 16px',  
    border: '1px solid #ccc',  
    borderRadius: '4px', 
    cursor: 'pointer',  
  };

  return (
    <button className="buttonStyle" onClick={props.onClick} style={buttonStyle}>
      {props.children}
    </button>
  );
}

export default Botao;