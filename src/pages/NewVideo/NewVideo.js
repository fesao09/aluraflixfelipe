import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios para fazer requisição POST
import Form from '../../components/Form/Form';
import { FormWrapper, FormGroup, FormLabel, FormInput, FormSelect, FormButton } from '../../components/Form/Form.styles';
import { Container, Modal, ModalContent, CloseButton } from './NewVideo.styles'; // Ajuste importações

const NewVideo = ({ initialGenres, setGenres }) => {
  const [video, setVideo] = useState({
    title: '',
    category: '',
    video: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalVideo, setModalVideo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifica se a URL do vídeo é válida
    const videoId = video.video.split('v=')[1];
    if (!videoId) {
      console.error('URL do vídeo inválida');
      return;
    }
  
    // Lógica de envio de dados para o servidor (POST)
    const newVideo = {
      title: video.title,
      description: "Descrição do vídeo", // Você pode atualizar para receber uma descrição do formulário
      videoUrl: `https://www.youtube.com/embed/${videoId}`,
      image: `https://img.youtube.com/vi/${videoId}/0.jpg`,
    };
  
    try {
      // Envia o novo vídeo para o backend
      const response = await axios.post('http://localhost:5001/genres/1/videos', newVideo); // A URL aqui pode ser modificada para enviar de acordo com a categoria selecionada
  
      // Atualiza o estado de genres para incluir o novo vídeo no gênero correto
      setGenres((prevGenres) => {
        const updatedGenres = prevGenres.map((genre) => {
          if (genre.name === video.category) { // Verifica qual categoria foi escolhida
            return {
              ...genre,
              videos: [...genre.videos, response.data], // Adiciona o novo vídeo no gênero correto
            };
          }
          return genre;
        });
        return updatedGenres;
      });
  
      navigate('/'); // Redireciona para a home
    } catch (error) {
      console.error('Erro ao adicionar o vídeo', error);
    }
  };  

  const handleImageClick = (videoUrl) => {
    setModalVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="title">Título</FormLabel>
          <FormInput
            type="text"
            id="title"
            value={video.title}
            onChange={(e) => setVideo({ ...video, title: e.target.value })}
            placeholder="Digite o título do vídeo"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="category">Categoria</FormLabel>
          <FormSelect
            id="category"
            value={video.category}
            onChange={(e) => setVideo({ ...video, category: e.target.value })}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Ação">Ação</option>
            <option value="Comédia">Comédia</option>
            <option value="Suspense">Suspense</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="video">Link do vídeo</FormLabel>
          <FormInput
            type="text"
            id="video"
            value={video.video}
            onChange={(e) => setVideo({ ...video, video: e.target.value })}
            placeholder="Insira o link do vídeo"
          />
        </FormGroup>

        <FormButton type="submit">Salvar</FormButton>
      </FormWrapper>

      <div>
        {video.video && (
          <img
            src={`https://img.youtube.com/vi/${video.video.split('v=')[1]}/0.jpg`}
            alt="Capa do vídeo"
            onClick={() => handleImageClick(video.video)}
          />
        )}
      </div>

      {showModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${modalVideo.split('v=')[1]}`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default NewVideo;
