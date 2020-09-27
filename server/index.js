const express = require('express');

const app = express();
const router = express.Router();
const db = require('./database');
const port = process.env.PORT || 5000;
const Controller = require('./controller');

//router.get('/api/genres', Controller.getAllGenres);
 
app.get('/api/genres', (req, res) => {
  db.any('select * from genres')
      .then((data) => {
          res.status(200)
              .json({
                  status: 'success',
                  data: data,
                  message: 'Retrieve all genres'
              });
      })
      .catch((err) => {
          console.log(err);
          return next(err);
      });
  //res.send({ genres : ["Romance", "Science Fiction", "Mystery", "Adult Fiction"] });
});


//module.exports = router;

/*const romance_genre = ["Eleanor and Park", "Time traveller's Wife", 
                       "Flipped", "The Rosie Project"]

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/genres', (req, res) => {
  res.send({ genres : ["Romance", "Science Fiction", "Mystery", "Adult Fiction"] });
});

app.get('/api/genre/name', (req, res) => {

  res.send({ });
});

app.get('/api/genre/books', (req, res) => {
  res.send({});
})

app.get('/api/book/name', (req, res) => {
  res.send({});
});

app.post('/api/genre/new', (req, res) => {

});

app.post('/api/book/new', (req, res) => {
  res.send({});
});
*/
app.listen(port, () => console.log(`Listening on port ${port}`));{
    
}