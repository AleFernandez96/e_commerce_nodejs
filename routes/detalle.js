var express = require('express');
var router = express.Router();
var ProductModel = require('../models/Producto');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log('ID producto'+req.params.id);

  ProductModel.findOne({'_id':req.params.id})
  .exec(function(err, producto){
    if(err){
      console.log(err);
      res.sendStatus(500);
      return;
    }
    console.log(producto);
    res.render('detalle',{
      title: 'Detalle del producto',
      producto: producto
    });
  });
});

module.exports = router;
