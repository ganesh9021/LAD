import React, { useState } from "react";
import { useEffect } from "react";
import play from "../image/audioplayer/play.png";
import pause from "../image/audioplayer/pause.png";
import { Button } from "@mui/material";

const AudioPlayer = ({ src }) => {
  const [audio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [image, setImage] = useState(play);

  useEffect(() => {
    const handleEnd = () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setImage(play);
    };

    audio.addEventListener("ended", handleEnd);

    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setImage(play);
    } else {
      audio.play();
      setIsPlaying(true);
      setImage(pause);
    }
  };

  return (
    <div>
      <Button onClick={handlePlayPause}>
        {isPlaying ? <img src={pause} alt="" /> : <img src={play} alt="" />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
