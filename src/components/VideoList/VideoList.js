import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const VideoList = ({ videos }) => {
  return (
    <div style={styles.container}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',  // Permite rolar os vídeos horizontalmente
    marginBottom: '20px',
  },
};

export default VideoList;


