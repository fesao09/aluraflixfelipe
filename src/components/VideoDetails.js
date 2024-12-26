// src/components/VideoDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const VideoDetailsContainer = styled.div`
  // Estilos para o container da página
`;

const VideoDetailsContent = styled.div`
  // Estilos para o conteúdo da página
`;

function VideoDetails() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5c66fecac3410a4da2709f1d944be38c`);
        const data = await response.json();
        setVideoDetails(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do vídeo:', error);
      }
    };

    fetchVideoDetails();
  }, [id]);

  if (!videoDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <VideoDetailsContainer>
      <VideoDetailsContent>
        <h2>{videoDetails.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${videoDetails.poster_path}`} alt={videoDetails.title} />
        <p>{videoDetails.overview}</p>
        {/* Adicione mais detalhes do vídeo aqui */}
      </VideoDetailsContent>
    </VideoDetailsContainer>
  );
}

export default VideoDetails;