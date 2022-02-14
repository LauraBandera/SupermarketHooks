import { Button } from 'reactstrap';

function Mapa(props){
    let lista = [];
    for (let i = 0; i < props.poblacion.length; i++) {
      for (let j = 0; j < props.poblacion[i].length; j++) {
        let marcadoSuper = props.supermarkets.find(elemento => elemento.fila == i && elemento.columna == j);
        if(marcadoSuper != null){
          lista.push(<Button color='info' style={{width: 3+"rem"}}>{props.poblacion[i][j]}</Button>)
        }else{
          lista.push(<Button style={{width: 3+"rem"}} outline>{props.poblacion[i][j]}</Button>)
        }
      }
      lista.push(<br/>);
    }
    return lista;
  }

  export default Mapa;