import React, { useState, useEffect  } from 'react';
import styles from '../styles/VideoGallery.module.css';

const VideoGallery = () => {
  const videoList = [
    'videoId1',
    'videoId2',
    'videoId3',
    // Add more video IDs as needed
  ];

  return (
    <div className={styles['video-gallery-container']}>
      {/* First div with main video */}
      <div className={styles['main-video-container']}>
        <iframe
          title="Main Video"
          src={`https://www.youtube.com/embed/${videoList[0]}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Second div with a row of small videos */}
      <div className={styles['video-row-container']}>
        {videoList.map((videoId) => (
          <div key={videoId} className={styles['small-video']}>
            <iframe
              title="Small Video"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;