// src/components/Carousel/Carousel.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;

  .slick-dots li button:before {
    color: #e50914;
  }
`;

export const Slide = styled.div`
  padding: 0.5rem;
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #fff;
  }
`;


