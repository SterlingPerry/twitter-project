const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}

module.exports = function(app) {
  app.get('/moments', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/moments.html'));
  });
}

module.exports = function(app) {
  app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/search.html'));
  });
}