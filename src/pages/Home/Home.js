import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importando o axios para fazer as requisições
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import GenreCarousel from '../../components/GenreCarousel/GenreCarousel';
import Modal from '../../components/Modal/Modal';

const Home = ({ initialGenres }) => {
  const [genres, setGenres] = useState(initialGenres || []);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Função para buscar os dados do JSON Server (GET)
  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://localhost:5001/genres');
      const genresWithVideos = response.data.map((genre) => ({
        ...genre,
        videos: initialGenres.find((g) => g.id === genre.id)?.videos || []
      }));
      console.log(genresWithVideos); // Verifique os dados
      setGenres(genresWithVideos); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error('Erro ao buscar os dados', error);
    }
  };

  // Usando useEffect para carregar os dados ao iniciar o componente
  useEffect(() => {
    fetchGenres();
  }, [initialGenres]);

  const handleEdit = async (updatedVideo) => {
    try {
      // Envia a atualização via PUT para o JSON Server
      await axios.put(`http://localhost:5001/videos/${updatedVideo.id}`, updatedVideo);
      const updatedGenres = genres.map((genre) => ({
        ...genre,
        videos: genre.videos.map((video) =>
          video.id === updatedVideo.id ? updatedVideo : video
        ),
      }));
      setGenres(updatedGenres);
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao editar o vídeo', error);
    }
  };

  const handleDelete = async (videoId) => {
    try {
      // Exclui o vídeo via DELETE no JSON Server
      await axios.delete(`http://localhost:5001/videos/${videoId}`);
      const updatedGenres = genres.map((genre) => ({
        ...genre,
        videos: genre.videos.filter((video) => video.id !== videoId),
      }));
      setGenres(updatedGenres);
    } catch (error) {
      console.error('Erro ao deletar o vídeo', error);
    }
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <GenreCarousel genres={genres} openModal={openModal} />
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          videoData={selectedVideo || {}}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
