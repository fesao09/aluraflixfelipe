// src/components/GenreCarousel/GenreCarousel.js

import React from 'react';
import { CarouselContainer, GenreTitle, VideoList, VideoItem } from './GenreCarousel.styles';

const GenreCarousel = ({ genres, openModal }) => {
  if (!genres || genres.length === 0) {
    return <p>No genres available</p>;
  }

  return (
    <CarouselContainer>
      {genres.map((genre) => (
        <div key={genre.id}>
          <GenreTitle>{genre.name}</GenreTitle>
          <VideoList>
            {genre.videos && genre.videos.length > 0 ? (
              genre.videos.map((video) => (
                <VideoItem key={video.id} onClick={() => openModal(video)}>
                  <img src={video.image} alt={video.title} />
                  <p>{video.title}</p>
                </VideoItem>
              ))
            ) : (
              <p>No videos available</p>
            )}
          </VideoList>
        </div>
      ))}
    </CarouselContainer>
  );
};

export default GenreCarousel;


