// src/components/Carousel/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Container, Slide } from './Carousel.styles';

const movies = [
  { id: 1, title: 'Filme 1', image: 'https://via.placeholder.com/300x150' },
  { id: 2, title: 'Filme 2', image: 'https://via.placeholder.com/300x150' },
  { id: 3, title: 'Filme 3', image: 'https://via.placeholder.com/300x150' },
  { id: 4, title: 'Filme 4', image: 'https://via.placeholder.com/300x150' },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Slide key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;


