const express = require('express');
const MovieService = require('../services/movies');


function moviesApi(app) {
    const router = express.Router();

    app.use('/api/movies', router);

    const moviesService = new MovieService();

    router.get('/', async function (req, res, next) {
        const {
            tags
        } = req.query;
        try {
            const movies = await moviesService.getMovies(tags);
            res.status(200).json({
                data: movies,
                menssage: 'Movies listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieId', async function (req, res, next) {
        const {
            movieId
        } = req.params;

        try {
            const movie = await moviesService.getMovie(movieId);
            res.status(200).json({
                data: movie,
                menssage: 'Movie retrieved',
            });
        } catch (error) {
            next(error);
        }
    });


    router.post('/', async function (req, res, next) {
        const {
            body: movie
        } = req;
        try {
            const createdMovieId = await moviesService.createMovie({
                movie
            });

            res.status(201).json({
                data: createdMovieId,
                message: 'movie created'
            });
        } catch (err) {
            next(err);
        }
    });



    router.put('/:moviId', async function (req, res, next) {

        const {
            body: movie
        } = req;

        const {
            movieId
        } = req.params;

        try {
            const updtatedMovieId = await moviesService.updateMovie(movieId, movie)
            res.status(200).json({
                data: updtatedMovieId,
                menssage: 'Movie updtated',
            });
        } catch (error) {
            next(error);
        }
    });


    router.delete('/:moviId', async function (req, res, next) {
        const {
            movieId
        } = req.params;

        try {
            const deletedMovieId = await moviesService.deleteMovie({movieId})
            res.status(200).json({
                data: deletedMovieId,
                menssage: 'Movie deleted',
            });
        } catch (error) {
            next(error);
        }
    });

    router.patch('/:moviId', async function  (req, res, next) {
        
        const {
            body: movie
        } = req;

        const {
            movieId
        } = req.params;

        try {
            const patchMovieId = await moviesService.patchMovie(movieId, movie);
            res.status(200).json({
                data: patchMovieId,
                menssage: 'Movie patch',
            });
        } catch (error) {
            next(error);
        }
    });

}

module.exports = moviesApi;


