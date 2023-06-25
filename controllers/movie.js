const Movie = require("../models/Movie");


exports.createMovie = async (req, res) =>{
    try {
        const {title, actors, director, runtime} = req.body;

        if (!title.trim()) {
          return res.status(404).json({
            err: "Movie title is required",
          });
        }

        const foundMovie = await Movie.findOne({title});
        if (foundMovie) {
          return res.json({ err: "Movie already exists" });
        }

        const movie = await new Movie({
          title,
          actors,
          director,
          runtime,
        }).save();

        res.json(movie);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.all = async (req, res) => {
  try {
    const movie = await Movie.find({});
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);
    console.log(movie);
    res.json(movie);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};