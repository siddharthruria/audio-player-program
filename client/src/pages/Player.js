import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProgramContext } from "../context/ProgramContext";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { trackId } = useParams();
  const { currProgram } = useContext(ProgramContext);
  const {
    currTrack,
    isPlaying,
    currTime,
    loadTrack,
    togglePlayPause,
    rewind,
    forward,
    audioRef,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (currProgram) {
      const track = currProgram.tracks.find((t) => t._id === trackId);
      if (track) loadTrack(track);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [trackId]);

  if (!currTrack) {
    return <p>loading track...</p>;
  }

  return (
    <div className="track-player">
      <img
        className="program-image"
        src={`https://audio-player-backend.onrender.com${currProgram.image}`}
        alt={currProgram.title}
      />
      <h1>{currTrack.title}</h1>
      <div className="controls">
        <button className="rewind" onClick={rewind}>
          ⏪ Rewind 10s
        </button>
        <button className="play-pause" onClick={togglePlayPause}>
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button className="forward" onClick={forward}>
          ⏩ Forward 10s
        </button>
      </div>

      <div className="progress-bar">
        <span>
          {
            <b>
              <i>
                {Math.floor(currTime / 60)}:
                {Math.floor(currTime % 60)
                  .toString()
                  .padStart(2, "0")}
              </i>
            </b>
          }
        </span>
        <input
          type="range"
          min="0"
          max={currTrack.duration}
          value={currTime}
          onChange={(e) => (audioRef.current.currTime = e.target.valueAsNumber)}
        />
        <span>
          <b>
            <i>
              {Math.floor(currTrack.duration / 60)}:{currTrack.duration % 60}
            </i>
          </b>
        </span>
      </div>
    </div>
  );
};

export default Player;
