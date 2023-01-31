import React from 'react';
import '../styles/Boton.css'

export function Boton({ texto, btnClic, manejarClic }) {
  return(
    <button 
      className={ btnClic ? 'boton_clic' : 'boton_reinicio' }
        onClick={manejarClic}>
        {texto}
    </button>
  )
}

// export default Boton;