const express = require('express');
const app     = express();
const cors    = require('cors');
const env     = require('dotenv').config();
const logger  = require('./middlewares/logger');


app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
   res.status(200).json({
       message: 'Movies',
       endpoint:  [
        {
            name: 'Movie List',
            url: '/movies/search',
            query_params: ['keyword','page']
        },
        {
            name: 'Movie Detail',
            url: '/movies/detail/{imdbID}',
            query_params: []
        }
       ]
   });
});

app.use('/movies', require('./routes/movies'));

app.use(function(req, res, next) {
    res.status(404);
    res.json({message:'404: Route Not Found'});
});


const port = process.env.PORT;

app.listen(port, console.log(`server run on port ${port}`));