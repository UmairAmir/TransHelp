import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/VideoGallery.module.css';

const VideoGallery = () => {
  const videoList = [
    'https://www.youtube.com/watch?v=2SUYY98kzYQ',
    'https://www.youtube.com/watch?v=MWS9is7_LbQ',
    'https://www.youtube.com/watch?v=cgjD3dYFbhk',
    'https://www.youtube.com/watch?v=2SUYY98kzYQ',
    'https://www.youtube.com/watch?v=yKFkgSO6o-g',
  ];

  const videosPerPage = 3;
  const videoTimerDuration = 10000; // 5 seconds
  const videoContainerRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % videoList.length);
    }, videoTimerDuration);

    return () => clearInterval(timerId);
  }, [videoList.length]);

  const visibleVideos = Array.from({ length: videosPerPage }, (_, index) => {
    const videoIndex = (startIndex + index) % videoList.length;
    return videoList[videoIndex];
  });

  return (
    <div className={styles['video-gallery-container']}>
      {/* First div with main video */}
      <div className={styles['main-video-container']}>
        <iframe
          title="Main Video"
          src={`https://www.youtube.com/embed/${extractVideoId(videoList[startIndex])}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Second div with a row of small videos */}
      <div className={styles['video-row-container']} ref={videoContainerRef}>
        {visibleVideos.map((videoUrl, index) => (
          <div key={index} className={styles['small-video']}>
            <iframe
              title={`Small Video ${index + 1}`}
              src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to extract video ID from YouTube URL
const extractVideoId = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
  return match ? match[1] : '';
};

export default VideoGallery;
