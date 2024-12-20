import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProgramProvider from "./context/ProgramContext";
import Programs from "./pages/Programs";
import Details from "./pages/Details";
import Player from "./pages/Player";
import PlayerProvider from "./context/PlayerContext";

function App() {
  return (
    <>
      <Router>
        <ProgramProvider>
          <PlayerProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/program/allPrograms" element={<Programs />} />
              <Route exact path="/program/details/:id" element={<Details />} />
              <Route
                exact
                path="/program/player/track/:trackId"
                element={<Player />}
              />
            </Routes>
          </PlayerProvider>
        </ProgramProvider>
      </Router>
    </>
  );
}

export default App;
