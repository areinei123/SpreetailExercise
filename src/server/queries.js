var promise = require('bluebird')

var options = {
  promiseLib: promise
}

var pgp = require('pg-promise')(options)
var connectionString = 'postgres://localhost:5432/furniture'

var db = pgp(connectionString)

function getAllFurniture(req, res, next){
  db.any('select * from items')
  .then(function(data){
    res.status(200).json({
      status: 'success',
      data: data
    })
  })
  .catch(function(err){
    return next(err)
  })
}

function getSingleFurniture(req, res, next){
  var itemId = parseInt(req.params.id)
  db.one('select * from furniture where id = $1', itemId)
  .then(function(data){
    res.status(200).json({
      status: 'success',
      data: data
    })
  })
  .catch(function(err){
    return next(err)
  })
}

module.exports = {
  getAllFurniture: getAllFurniture,
  getSingleFurniture: getSingleFurniture
}