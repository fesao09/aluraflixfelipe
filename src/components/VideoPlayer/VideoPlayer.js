import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) return null;

  const embedUrl = videoUrl.replace("watch?v=", "embed/");
  return (
    <VideoContainer>
      <iframe
        src={embedUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

export default VideoPlayer;
