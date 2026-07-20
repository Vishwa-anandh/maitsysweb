import React, { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays if it's not already playing
    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener("canplay", playVideo, { once: true });
    // In case canplay already fired
    if (video.readyState >= 3) {
      playVideo();
    }

    return () => video.removeEventListener("canplay", playVideo);
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      className="object-cover w-full h-full transition-opacity duration-500"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
