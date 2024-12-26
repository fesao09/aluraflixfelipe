import { createContext, useState } from 'react';

export const CorContexto = createContext({ corFundo: '#2A7AE4', setCorFundo: () => {} });

export function CorProvider({ children }) {
  const [corFundo, setCorFundo] = useState('#2A7AE4');

  return (
    <CorContexto.Provider value={{ corFundo, setCorFundo }}>
      {children}
    </CorContexto.Provider>
  );
}