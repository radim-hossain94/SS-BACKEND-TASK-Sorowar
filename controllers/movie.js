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