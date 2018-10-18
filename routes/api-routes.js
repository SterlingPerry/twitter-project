const db = require('../models');

module.exports = function (app) {
    app.get('/api/tweets', function (req, res) {
      db.twitter.find({})
        .then(function (tweets) {
          res.json(tweets);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  
    app.post('/api/tweet', function (req, res) {
      db.twitter.create(req.body)
        .then(function (tweets) {
          res.json(tweets);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
   }