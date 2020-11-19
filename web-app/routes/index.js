var express = require('express');
var router = express.Router();

var animallist = {
  "animals":
  [
    {
      "name": "lion",
      "parkzone": "Africa",
      "lastfed": "2020-06-01T08:00:00",
      "isinventorylow": false
    },
    {
      "name": "zebra",
      "parkzone": "Africa",
      "lastfed": "2020-06-01T09:00:00",
      "isinventorylow": false
    },
    {
      "name": "giraffe",
      "parkzone": "Africa",
      "lastfed": "2020-06-01T08:30:00",
      "isinventorylow": true
    }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { alist: animallist.animals });
});

module.exports = router;
