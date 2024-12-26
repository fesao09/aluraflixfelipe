// src/components/Categorias.js
import React from 'react';
// Importe o componente 'Categoria'
import Categoria from './Categoria';

function Categorias() {
  // Simulando a busca de categorias via API
  const categorias = [ 
    {
      nome: 'Front End',
      cor: '#6BD1FF',
      videos: [
        {
          titulo: 'React',
          url: 'https://www.youtube.com/watch?v=QFaFIcGhPoM',
        },
        {
          titulo: 'Vue',
          url: 'https://www.youtube.com/watch?v=QFaFIcGhPoM',
        },
      ],
    },
    {
      nome: 'Back End',
      cor: '#00C86F',
      videos: [
        {
          titulo: 'Node.js',
          url: 'https://www.youtube.com/watch?v=QFaFIcGhPoM',
        },
        {
          titulo: 'Java',
          url: 'https://www.youtube.com/watch?v=QFaFIcGhPoM',
        },
      ],
    },
  ];

  return (
    <section className="categorias"> {/* Adicionei uma classe para estilização */}
      {categorias.map((categoria) => (
        <Categoria key={categoria.nome} categoria={categoria} />
      ))}
    </section>
  );
}

export default Categorias;