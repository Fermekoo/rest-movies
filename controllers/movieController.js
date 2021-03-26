const fetch = require('node-fetch');

exports.getAll = async (req, res) => {

    const key   = process.env.MOVIE_KEY;
    let keyword = req.query.keyword ?? 'Batman';
    let page    = req.query.page ?? 1;

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${key}s=${keyword}&page=${page}`);
        
        let movies = await response.json();

        res.status(200).json(movies);

    } catch (error) {
        res.status(500).json({error});
    }
}

exports.findById = async (req, res) => {
    const key   = process.env.MOVIE_KEY;
    const id    = req.params.id;

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${key}i=${id}`);

        let movie = await response.json();

        res.status(200).json(movie);

    } catch (error) {
        res.status(500).json({error});
    }
}