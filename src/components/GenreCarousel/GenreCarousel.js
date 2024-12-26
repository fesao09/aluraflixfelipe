// src/components/GenreCarousel/GenreCarousel.js

import React from 'react';
import { CarouselContainer, GenreTitle, VideoListContainer, VideoCard } from './GenreCarousel.styles';

const GenreCarousel = ({ genres, openModal }) => {
  return (
    <CarouselContainer>
      {genres.map((genre) => (
        <div key={genre.name}>
          <GenreTitle>{genre.name}</GenreTitle>
          <VideoListContainer>
            {genre.videos.map((video, index) => (
              <VideoCard key={`${genre.name}-${video.id}-${index}`} onClick={() => openModal(video)}>
                {video.image ? (
                  <img src={video.image} alt={video.title} />
                ) : (
                  <div className="video-placeholder">Imagem não disponível</div>
                )}
                <div className="video-title">{video.title}</div>
                <p>{video.description}</p>
              </VideoCard>
            ))}
          </VideoListContainer>
        </div>
      ))}
    </CarouselContainer>
  );
};

export default GenreCarousel;


