const express = require("express");

const {
    moviesMock
} = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();

    app.use('/api/movies', router);

    router.get("/:movieId", async function (req, res, next) {
        try {
            const movie = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movie,
                menssage: 'Movie retrieved',
            })
        } catch (error) {
            next(error)
        }
    });


    router.post("/", async function (req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                menssage: 'Movie created',
            })
        } catch (error) {
            next(error)
        }
    });


    router.put("/:moviId", async function (req, res, next) {
        try {
            const updtatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updtatedMovieId,
                menssage: 'Movie updtated',
            })
        } catch (error) {
            next(error)
        }
    });

    router.delete("/:moviId", async function (req, res, next) {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: deletedMovieId,
                menssage: 'Movie deleted',
            })
        } catch (error) {
            next(error)
        }
    });


    router.get("/", async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                menssage: 'Movies listed',
            })
        } catch (error) {
            next(error)
        }
    });
};


module.exports = moviesApi;


