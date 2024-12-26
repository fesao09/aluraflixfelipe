// src/components/GenreCarousel/GenreCarousel.styles.js

import styled from 'styled-components';

export const CarouselContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const GenreTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const VideoCard = styled.div`
  width: 200px;
  cursor: pointer;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .video-placeholder {
    width: 100%;
    height: 150px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .video-title {
    font-weight: bold;
    margin-top: 8px;
  }
`;

