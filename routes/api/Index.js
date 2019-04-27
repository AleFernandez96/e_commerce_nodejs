var express  = require('express');
var ProductoModel = require('../../models/Producto');
var router = express.Router();


router.get('/producto', function(req, res){
  ProductoModel
    .find()
    .exec(function(err, producto){
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(producto);
  });
});

router.post('/producto', async (req, res)=>{

    var model = new ProductoModel();

    model.nombre = 'Producto 1';
    model.tipo = 'invitacion-digital';
    model.img = '8.jpg';
    model.galery = ['8.jpg','8.jpg'];
    model.descripcion = 'Esta es la descripción';
    model.precio = 15.901;

    model.save(function(err) {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(201);
    });
});



// router.route('/')

//   .get(function(req, res) {
//     // res.send('Get');
//     ProductoModel
//     .find()
//     .exec(function(err, producto){
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.json(producto);
//     });
//     res.sendStatus(404);
    
//   })
//   .post(function(req, res) {
//     res.send('POST');
//   })
//   .put(function(req, res) {
//     res.send('Update PUT');
//   });


// router.post('/', function(req, res){
//     // console.log('Estas en la api post');
//     // return res.sendStatus(201);

//     var model = new ProductoModel();
//     model.nombre = 'nombre1';
//     model.tipo = 'tipo1';
//     model.img = 'img1';
//     model.descripcion = 'descripcion1';
//     model.precio = '15.901';

//     model.save(function(err) {
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.sendStatus(201);
//     });
// });

// router.get('/', function(req, res){
//     // console.log('Estas en la api get');
//     // return res.sendStatus(201);

//     ProductoModel
//     .find()
//     .exec(function(err, producto){
//         if (err) {
//             console.error(err);
//             return res.sendStatus(500);
//         }
//         res.json(producto);
//     });
//     res.sendStatus(404);
// });

module.exports = router;