import React, { createContext, useState, useEffect } from "react";

export const ProgramContext = createContext();

const ProgramProvider = ({ children }) => {
  const [programs, setPrograms] = useState([]);
  const [currProgram, setCurrProgram] = useState(null);
  const [currTrack, setCurrTrack] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllPrograms = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5555/api/program/allPrograms",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("failed to fetch the programs");
      }

      const responseData = await response.json();
      setPrograms(responseData.programs);
      // console.log(responseData);
    } catch (error) {
      console.error("some error occured :/");
    } finally {
      setLoading(false);
    }
  };

  const fetchProgramDetails = async (programId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5555/api/program/details/${programId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("failed to fetch the programs");
      }

      const responseData = await response.json();
      setCurrProgram(responseData.program);
      // console.log(responseData.program);
      // console.log(currProgram);
    } catch (error) {
      console.error("some error occured :/");
    } finally {
      setLoading(false);
    }
  };

  const fetchTrack = async (trackId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http:localhost:5555/api/program/tracks/${trackId}/play`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("some error occured :/");
      }

      const responseData = await response.json();
      setCurrTrack(responseData);
    } catch (error) {
      console.error("some error occured :/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPrograms();
  }, []);

  return (
    <ProgramContext.Provider
      value={{
        programs,
        fetchAllPrograms,
        currProgram,
        fetchProgramDetails,
        loading,
        currTrack,
        fetchTrack,
      }}
    >
      {children}
    </ProgramContext.Provider>
  );
};

export default ProgramProvider;
