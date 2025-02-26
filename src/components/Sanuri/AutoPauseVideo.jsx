import React, { useEffect, useRef } from 'react';
import communeoVideo from "/COMMUNEO.mp4";

const AutoPauseVideo = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start with true for autoplay

  // Initial auto-play when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Error auto-playing video:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  // Handle scroll-based auto-pause
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else if (entry.isIntersecting && videoRef.current && isPlaying) {
          // Only auto-play if it was playing before
          videoRef.current.play().catch(error => {
            console.log("Error playing video:", error);
            setIsPlaying(false);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  // Keep video state and button state in sync
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Handle manual play/pause
  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(error => {
        console.log("Error playing video:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      ref={videoContainerRef}
      className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src="/COMMUNEO.mp4"
          className="w-full h-full object-cover"
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        
        <button
          onClick={handlePlayPause}
          className="absolute bottom-4 left-4 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AutoPauseVideo;