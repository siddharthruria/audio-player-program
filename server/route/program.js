const express = require("express");
const Program = require("../model/Program");

const router = express.Router();

// ------------------------------- ROUTE 1 -------------------------------

// route (/api/program/allPrograms)

// GET -> fetch all the programs

router.get("/allPrograms", async (_req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json({
      success: true,
      total: programs.length,
      programs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 2 -------------------------------

// route (/api/program/details/:id)

// GET -> fetch details of a program

router.get("/details/:id", async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({
        success: false,
        error: "program not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "here are the program details",
      program,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 3 -------------------------------

// route (/api/program/tracks/:trackId/play)

// GET -> steam track audio

router.get("/tracks/:trackId/play", async (req, res) => {
  try {
    const program = await Program.findOne({ "tracks._id": req.params.trackId });
    if (!program) {
      return res.status(404).json({
        success: false,
        error: "track not found",
      });
    }

    const track = program.tracks.id(req.params.trackId);
    return res.status(200).json({
      success: true,
      audioUrl: track.audioUrl,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "internal server error :/",
    });
  }
});

// ------------------------------- ROUTE 4 -------------------------------

// route (/api/program/add)

// POST -> add program to db

router.post("/add", async (req, res) => {
  try {
    const { title, description, image, tracks } = req.body;

    const program = new Program({
      title,
      description,
      image,
      tracks,
    });

    await program.save();
    res.status(201).json({
      success: true,
      message: "program added successfully",
      program,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "internal server error :/",
    });
  }
});

module.exports = router;
