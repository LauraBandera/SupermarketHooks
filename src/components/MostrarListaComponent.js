function MostrarLista(props){
    let lista = [];
    let sup = props.supers;
    for (let i = 0; i < sup.length; i++) {
      lista.push(<strong>Supermercado {sup[i].nombre} con cordenadas {sup[i].fila}x{sup[i].columna} y una población de {sup[i].poblacion} habitantes</strong>);
      lista.push(<br/>);
    }
  
    return lista;
  }

  export default MostrarLista;