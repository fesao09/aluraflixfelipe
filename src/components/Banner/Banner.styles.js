import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 20px;
`;

export const Content = styled.div`
  max-width: 600px;
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:nth-child(1) {
      background-color: #e50914;
      color: white;
    }

    &:nth-child(2) {
      background-color: rgba(255, 255, 255, 0.7);
      color: black;
    }
  }
`;





