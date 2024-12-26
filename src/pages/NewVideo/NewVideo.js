import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios para fazer requisição POST
import { FormWrapper, FormGroup, FormLabel, FormInput, FormSelect, FormButton } from '../../components/Form/Form.styles';
import { Container, Modal, ModalContent, CloseButton } from './NewVideo.styles'; // Ajuste importações

const NewVideo = ({ initialGenres, setGenres }) => {
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    genreId: initialGenres[0].id // Default to the first genre
  });
  const [showModal, setShowModal] = useState(false);
  const [modalVideo, setModalVideo] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/videos', {
        ...videoData,
        image: `https://img.youtube.com/vi/${videoData.videoUrl.split('v=')[1]}/0.jpg`
      });
      console.log(response.data);
      // Update the genres state with the new video
      const updatedGenres = initialGenres.map((genre) => {
        if (genre.id === videoData.genreId) {
          return { ...genre, videos: [...(genre.videos || []), response.data] };
        }
        return genre;
      });
      setGenres(updatedGenres);
      navigate('/'); // Redireciona para a home
    } catch (error) {
      console.error('Erro ao adicionar o vídeo:', error);
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
            name="title"
            value={videoData.title}
            onChange={handleChange}
            placeholder="Digite o título do vídeo"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <FormInput
            type="text"
            id="description"
            name="description"
            value={videoData.description}
            onChange={handleChange}
            placeholder="Digite a descrição do vídeo"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="videoUrl">Link do vídeo</FormLabel>
          <FormInput
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleChange}
            placeholder="Insira o link do vídeo"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="genreId">Categoria</FormLabel>
          <FormSelect
            id="genreId"
            name="genreId"
            value={videoData.genreId}
            onChange={handleChange}
          >
            {initialGenres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>

        <FormButton type="submit">Salvar</FormButton>
      </FormWrapper>

      <div>
        {videoData.videoUrl && (
          <img
            src={`https://img.youtube.com/vi/${videoData.videoUrl.split('v=')[1]}/0.jpg`}
            alt="Capa do vídeo"
            onClick={() => handleImageClick(videoData.videoUrl)}
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
