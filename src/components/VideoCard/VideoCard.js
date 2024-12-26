// src/components/VideoCard.js
import React from 'react';
import { Button, Card } from './VideoCard.styles';  // Certifique-se que os estilos estão sendo importados corretamente

const VideoCard = ({ video, onEdit, onDelete }) => {
  return (
    <Card>
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div>
        <Button onClick={() => onEdit(video)}>Editar</Button>
        <Button onClick={() => onDelete(video.id)}>Excluir</Button>
      </div>
    </Card>
  );
};
const styles = {
  card: {
    width: '200px',
    height: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  details: {
    padding: '10px',
  },
};

export default VideoCard;


