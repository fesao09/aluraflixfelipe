// src/Contexto/CorContexto.js
import React, { createContext, useState } from 'react';

export const CorContexto = createContext({ corFundo: '#2A7AE4', setCorFundo: () => {} }); // Define um valor padrão para o contexto

export function CorProvider({ children }) {
  const [corFundo, setCorFundo] = useState('#2A7AE4'); // Define a cor inicial

  return (
    <CorContexto.Provider value={{ corFundo, setCorFundo }}>
      {children}
    </CorContexto.Provider>
  );
}