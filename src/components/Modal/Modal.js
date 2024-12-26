import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from './Modal.styles';
import VideoPlayer from '../VideoPlayer/VideoPlayer'; // Importando o VideoPlayer

const Modal = ({ showModal, setShowModal, videoData }) => {
  if (!showModal) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
        <h2>{videoData.title}</h2>
        <p>{videoData.description}</p>
        {videoData.videoUrl ? (
          <VideoPlayer videoUrl={videoData.videoUrl} />
        ) : (
          <p>Vídeo não disponível</p>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;



