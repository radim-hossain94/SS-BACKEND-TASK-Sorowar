const express = require("express");
const { verifyUser, isAdmin } = require("../middlewares/verifyUser");

const { createMovie } = require("../controllers/movie");

const router = express.Router();

router.post("/addMovie", verifyUser, isAdmin, createMovie);
// router.get("/movie");
// router.get("/movie/:id");

module.exports = router;