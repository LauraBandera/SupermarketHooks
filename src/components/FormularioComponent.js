import React, {useState } from 'react';

function Formulario(props){
    const[nombre, setNombre] = useState("");
    const[fila, setFila] = useState(0);
    const[columna, setColumna] = useState(0);
  
    const handleChange = (e) => {
      switch (e.target.name) {
        case "nombre":
          setNombre(e.target.value);
          break;
        case "fila":
          setFila(e.target.value);
          break;
        case "columna":
          setColumna(e.target.value);
      }
    }
  
    const addSuper = (e) => {
      e.preventDefault();
      props.add(nombre, fila, columna);
    }
  
    let form = <form onSubmit={addSuper}>
        <label htmlFor='fila'>Coordenada Fila (Entre 0 y 8): </label>
        <input type='number' min="0" max="8" id='fila' name='fila' onChange={handleChange}/>
        <br/>
        <label htmlFor='columna'>Coordenada Columna (Entre 0 y 8): </label>
        <input type='number' min="0" max="8" id='columna' name='columna' onChange={handleChange}/>
        <br/>
        <label htmlFor='nombre'>Nombre supermercado: </label>
        <input type='text' id='nombre' name='nombre' onChange={handleChange}/>
        <br/>
        <input type='submit' value='Añadir'/>
    </form>;
    return form;
  }

  export default Formulario;