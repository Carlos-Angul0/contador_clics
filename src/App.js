import { useState } from 'react';
import './App.css';
import logo from './assets/images/logo_1.png'
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    console.log("Clic")
  }
  const reiniciarContador = () => {
    setNumClics(0)
    console.log("Reiniciar")
  }

  return (
    <div className="App">
      <div className="logo_contenedor">
        <img 
          className="logo"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className='contenedor_principal'>
        <Contador
          numClics={numClics}
        />

        <Boton 
          texto='Clic'
          btnClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          btnClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
      <div className="container_principal">

      </div>
    </div>
  );
}

export default App;
