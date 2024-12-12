import React, { createContext, useContext, useRef } from "react";
import { ProgramContext } from "./ProgramContext";

export const PlayerContext = createContext();
const { currTrack, setCurrTrack } = useContext(ProgramContext);

const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState(0);
  const audioRef = useRef(null);

  const loadTrack = (track) => {
    setCurrTrack(track);
    setCurrTime(0);
    if (audioRef.current) {
      audioRef.current.src = `http://localhost:5555${track.audioUrl}`;
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const rewind = () => {
    if (audioRef.current) {
      audioRef.current.currTime -= 10;
    }
  };

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currTime += 10;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrTime(audioRef.current.currTime);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currTrack,
        isPlaying,
        currTime,
        loadTrack,
        togglePlayPause,
        rewind,
        forward,
        audioRef,
        handleTimeUpdate,
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
