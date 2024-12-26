import React from 'react';
import {
  BannerContainer,
  Content,
  Title,
  Description,
  Actions,
} from './Banner.styles';

const Banner = () => {
  const bannerData = {
    image: 'path/to/banner-image.jpg', // Substitua pelo caminho real
    title: 'Título do Destaque',
    description: 'Uma breve descrição do destaque.',
  };

  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerData.image})` }}>
      <Content>
        <Title>{bannerData.title}</Title>
        <Description>{bannerData.description}</Description>
        <Actions>
          <button>Assistir</button>
          <button>Mais informações</button>
        </Actions>
      </Content>
    </BannerContainer>
  );
};

export default Banner;




