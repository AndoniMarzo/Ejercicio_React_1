import React from 'react';
import Entrada from './Entrada/Entrada';
import Resultado from './Resultado/Resultado';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorentrada: 0,
      resultado: 0,
      boton: 37,
      boton_1: 37,
      boton_2: 43
    }
  }

  calculaResultado = (event) => {
    let total = event.target.value * this.state.boton;
    this.setState({
      valorentrada: event.target.value,
      resultado: total
    })
  }

  cambiarMultiplicacion = (numero) => {
    let multiplicacion = this.state.valorentrada * numero;
    this.setState({
      resultado: multiplicacion,
      boton: numero
    })
  }

  render() {
    return (
      <div className="App">
        <p>Introduce un valor y multiplícalo por cualquiera de los botones:</p>

        <Entrada cambiando={this.calculaResultado} />

        <button className="Boton" onClick={() => this.cambiarMultiplicacion(this.state.boton_1)}>x{this.state.boton_1}</button>
        <button className="Boton" onClick={() => this.cambiarMultiplicacion(this.state.boton_2)}>x{this.state.boton_2}</button>

        <Resultado valor={this.state.resultado} />

        <p>El botón que está pulsado es: x{this.state.boton}</p>
      </div>
    );
  }
}

export default App;
