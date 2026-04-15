const MovieEntry = require('../models/MovieEntry');

exports.listMovies = async (req, res) => {
  const movies = await MovieEntry.find();
  res.json(movies);
};

exports.getMovieById = async (req, res) => {
  const movie = await MovieEntry.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(movie);
};

exports.createMovie = async (req, res) => {
  const movie = await MovieEntry.create(req.body);
  res.status(201).json(movie);
};

exports.updateMovie = async (req, res) => {
  const movie = await MovieEntry.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!movie) return res.status(404).json({ message: 'Registro não encontrado.' });

  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  const movie = await MovieEntry.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json({ message: 'Registro removido com sucesso.' });
};