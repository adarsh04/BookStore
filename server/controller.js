const db = require('./database');

const getAllGenres = (req, res, next) => {
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
}

module.exports = getAllGenres;