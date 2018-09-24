var express = require('express');
var router = express.Router();

var db = require('./queries.js');

router.get('/api/furniture', db.getAllFurniture);
router.get('/api/furniture/:id', db.getSingleFurniture);

module.exports = router;
