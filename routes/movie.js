const express = require("express");
const { verifyUser, isAdmin } = require("../middlewares/verifyUser");

const { createMovie, all, getById } = require("../controllers/movie");

const router = express.Router();

router.post("/addMovie", verifyUser, isAdmin, createMovie);
router.get("/movie", all);
router.get("/movie/:id", getById);

module.exports = router;