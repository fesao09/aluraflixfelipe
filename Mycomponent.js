// MyComponent.js
import React, { useContext } from 'react';
import { MyContext } from './context'; // Certifique-se de ajustar o caminho conforme necessário

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};

export default MyComponent;
