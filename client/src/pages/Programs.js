import React, { useContext } from "react";
import { ProgramContext } from "../context/ProgramContext";
import { Link } from "react-router-dom";

const Programs = () => {
  const { programs, loading } = useContext(ProgramContext);

  if (loading) return <p>loading...</p>;

  return (
    <div className="programs-container">
      <h3><u>list of all the available programs</u></h3>
      <div className="programs-grid">
        {programs?.map((program) => (
          <div key={program._id}>
            <img
              className="program-image"
              // src={program.image}
              src={`http://localhost:5555${program.image}`}
              alt={program.title}
            />
            <Link
              className="program-card"
              to={`/program/details/${program._id}`}
            >
              <u>
                <h4 className="program-title">{program.title}</h4>
              </u>
            </Link>
            <p className="program-description">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
