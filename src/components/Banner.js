// src/components/Banner.js
import React from 'react';
import Slider from 'react-slick'; // Certifique-se de que 'react-slick' esteja instalado
import './Banner.css'; // Crie um arquivo CSS para estilizar o Banner

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="banner">
      <Slider {...settings}>
        <div>
          <img src="path/to/image1.jpg" alt="Video 1" />
        </div>
        <div>
          <img src="path/to/image2.jpg" alt="Video 2" />
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </Slider>
    </section>
  );
}

export default Banner;


