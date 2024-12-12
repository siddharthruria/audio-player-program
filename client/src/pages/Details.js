import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProgramContext } from "../context/ProgramContext";

const Details = () => {
  const { id } = useParams();
  const { fetchProgramDetails, currProgram } =
    useContext(ProgramContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProgramDetails(id);
  }, [id]);

  if (!currProgram) {
    return <p>loading details...</p>;
  }

  return (
    <div className="program-details">
      <div className="program-header">
        <img
          className="program-image"
          src={`https://audio-player-backend.onrender.com${currProgram.image}`}
          alt={currProgram.title}
        />
        <div className="program-info">
          <h1>{currProgram.title}</h1>
          <p>{currProgram.description}</p>
        </div>
      </div>

      <div className="track-list">
        <h2>Tracks</h2>
        {currProgram.tracks.map((track, index) => (
          <div key={index} className="track-card">
            <div className="track-info">
              <h3>{track.title}</h3>
              <p>
                duration:{" "}
                <b>
                  <i>
                    {Math.floor(track.duration / 60)}:{track.duration % 60}
                  </i>
                </b>
              </p>
            </div>
            <button
              className="play-button"
              onClick={() => navigate(`/program/player/track/${track._id}`)}
            >
              Play Track
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
