var promise = require('bluebird')

var options = {
  promiseLib: promise
}

var pgp = require('pg-promise')(options)
var connectionString = 'postgres://localhost:5432/furniture'

var db = pgp(connectionString)

function getAllFurniture(req, res, next){
  console.log(req.query)

  let request = [
    'select items.*, json_agg(item_option.*) as "options"', //id, items.name, items.category, items.price, items.description
    'from items',
    'join item_option on items.id = item_option.item_id',
    'where items.price >= '+req.query.min,
    'and items.price <= '+req.query.max,
    req.query.category !== 'any' ? 'and items.category = \''+req.query.category+'\'' : '',
    req.query.color !== 'any' ? 'and item_option.color = \''+req.query.color+'\'' : '',
    req.query.material !== 'any' ? 'and item_option.material = \''+req.query.material+'\'' : '',
    'group by items.id',
  ].join(' ')

  console.log(request)

  db.any(request)
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