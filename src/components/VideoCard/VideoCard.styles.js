// src/components/VideoCard/VideoCard.styles.js

import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const VideoImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const VideoDetails = styled.div`
  padding: 15px;
  color: white;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  margin: 10px 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 16px;
    border: none;
    background-color: #e50914;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  button:nth-child(2) {
    background-color: #444;
  }
`;
