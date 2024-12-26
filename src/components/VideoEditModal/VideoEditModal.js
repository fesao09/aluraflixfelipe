import React, { useState } from 'react';
import modalStyles from './VideoEditModal.styles';

const VideoEditModal = ({ video, isOpen, onClose, onSave }) => {
  const [editedVideo, setEditedVideo] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedVideo); // Passa o vídeo editado
  };

  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>Editar Vídeo</h2>
        <input
          type="text"
          name="title"
          value={editedVideo.title}
          onChange={handleChange}
          placeholder="Título"
          style={modalStyles.input}
        />
        <textarea
          name="description"
          value={editedVideo.description}
          onChange={handleChange}
          placeholder="Descrição"
          style={modalStyles.textarea}
        />
        <div style={modalStyles.modalActions}>
          <button onClick={onClose}>Fechar</button>
          <button onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default VideoEditModal;