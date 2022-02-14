import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import Formulario from './components/FormularioComponent';
import Mapa from './components/MapaComponent';
import MostrarLista from './components/MostrarListaComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    poblacion : [ [0,5,4,2,9,8,0,8,8],
                  [1,7,21,23,44,5,3,4,0],
                  [2,6,32,22,33,8,4,2,8],
                  [1,2,43,4,56,65,34,11,8],
                  [2,22,32,3,42,62,43,21,0],
                  [2,2,23,34,64,24,42,15,7],
                  [0,2,36,43,61,26,64,12,0],
                  [1,2,15,43,34,2,12,2,3],
                  [1,0,12,3,0,0,21,2,2]
                ],
    totalPoblacion: 0,
    supermarkets: []
    }
  }

  componentWillMount(){
    let pob = this.state.poblacion;
    let t = this.state.totalPoblacion;
    t = parseInt(t);

    t = pob.map(e => e.reduce((acc,v)=>{return acc+v;}));
    t = t.reduce((acc,v)=>{return acc+v;});

    this.setState({totalPoblacion: t});
  }

  add(n, f, c){
    let supers = this.state.supermarkets;
    let nsuper = n;
    let fsuper = f;
    let csuper = c;
    let psuper = 0;
    if(supers.length == 0){
      psuper = this.state.totalPoblacion;
    }else{
      supers.map(elemento => elemento.poblacion = 0);
      let menorDistancia = -1, elemCerca = -1;
      let pob = this.state.poblacion;
      for (let i = 0; i < pob.length; i++) {
        for (let j = 0; j < pob[i].length; j++) {
          menorDistancia = -1;
          for (let k = 0; k < supers.length; k++) {
            let nuevaDistancia = Math.abs(supers[k].fila - i) + Math.abs(supers[k].columna - j);
            if(menorDistancia == -1 || menorDistancia > nuevaDistancia){
              menorDistancia = nuevaDistancia;
              elemCerca = k;
            }
          }
          let distanciaNuevoS = Math.abs(fsuper - i) + Math.abs(csuper - j);
          if(menorDistancia > distanciaNuevoS){
            menorDistancia = distanciaNuevoS;
            elemCerca = -1;
          }
          if(elemCerca == -1){
            psuper += pob[i][j];
          }else{
            supers[elemCerca].poblacion += pob[i][j];
          }
        }
      }
    }
    
    supers.push({
      nombre: nsuper,
      fila: fsuper,
      columna: csuper,
      poblacion: psuper
    });

    this.setState({supermarkets: supers});
  }

  render(){
    return (
      <div style={{margin: 2+"rem"}} className="App">
        <h1>SUPERMARKETS</h1>
        <br/>
        <Formulario add={(n, f, c) => this.add(n, f, c)}/>
        <br/>
        <p>Total población: <strong>{this.state.totalPoblacion}</strong></p>
        <h2>Supermarkets:</h2> 
        <p><MostrarLista supers={this.state.supermarkets}/></p>
        <br/>
        <Mapa poblacion={this.state.poblacion} supermarkets={this.state.supermarkets}/>
      </div>
    );
  }
}

export default App;