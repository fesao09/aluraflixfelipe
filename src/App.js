// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/Globalstyles';
import Navbar from './components/Navbar/Navbar'; // Importando o Navbar
import Home from './pages/Home/Home';
import NewVideo from './pages/NewVideo/NewVideo';
import axios from 'axios';

const initialGenres = [
  {
    id: 1,
    name: 'Ação',
    videos: [
      {
        id: 1,
        title: 'Golaços',
        description: 'Top 50 golaços',
        videoUrl: 'https://www.youtube.com/embed/20Sb6jgdHnc', // URL de incorporação do YouTube
        image: 'https://img.youtube.com/vi/20Sb6jgdHnc/0.jpg', // Gerar a miniatura a partir do videoUrl
      },
      { id: 2, title: 'Video 2', description: 'Descrição do Vídeo 2', videoUrl: '', image: 'https://via.placeholder.com/200' },
      { id: 3, title: 'Video 3', description: 'Descrição do Vídeo 3', videoUrl: '', image: 'https://via.placeholder.com/200' },
    ],
  },
  {
    id: 2,
    name: 'Comédia',
    videos: [
      { id: 1, title: 'Video 1', description: 'Descrição do Vídeo 1', videoUrl: '', image: 'https://via.placeholder.com/200' },
      { id: 2, title: 'Video 2', description: 'Descrição do Vídeo 2', videoUrl: '', image: 'https://via.placeholder.com/200' },
      { id: 3, title: 'Video 3', description: 'Descrição do Vídeo 3', videoUrl: '', image: 'https://via.placeholder.com/200' },
    ],
  },
  {
    id: 3,
    name: 'Suspense',
    videos: [
      { id: 1, title: 'Video 1', description: 'Descrição do Vídeo 1', videoUrl: '', image: 'https://via.placeholder.com/200' },
      { id: 2, title: 'Video 2', description: 'Descrição do Vídeo 2', videoUrl: '', image: 'https://via.placeholder.com/200' },
      { id: 3, title: 'Video 3', description: 'Descrição do Vídeo 3', videoUrl: '', image: 'https://via.placeholder.com/200' },
    ],
  },
];

function App() {
  const [genres, setGenres] = useState(initialGenres);

  // useEffect para buscar os gêneros
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:5001/genres');
        console.log(response.data); // Verifique se os dados estão chegando corretamente
        setGenres(response.data); // Atualiza o estado com os dados
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchGenres();
  }, []); // Executa o efeito apenas uma vez quando o componente é montado

  const updateGenres = (newGenres) => {
    setGenres(newGenres);
  };

  return (
    <Router>
      <GlobalStyles />
      <Navbar /> {/* Renderizando o Navbar */}
      <Routes>
        <Route path="/" element={<Home initialGenres={genres} />} />
        <Route path="/novo-video" element={<NewVideo initialGenres={genres} setGenres={updateGenres} />} />
      </Routes>
    </Router>
  );
}

export default App;

