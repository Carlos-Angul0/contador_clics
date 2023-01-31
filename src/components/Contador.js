import React from "react";
import '../styles/Contador.css';

export const Contador = ({ numClics }) => {
  return (
    <div className="contador">
      { numClics }
    </div>
  );
}