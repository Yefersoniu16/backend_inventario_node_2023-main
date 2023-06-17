const {Router} = require('express');
const router = Router();
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { validarRolDocente } = require('../middleware/validar-rol-docente');
const { updateInventario, createInventario, getInventario, getInventarioId } = require('../controllers/inventario');
//http://localhost:4000/inventario
//GET http://localhost:4000/inventario
//POST //http://localhost:4000/inventario
//PUT //http://localhost:4000/inventario

router.get('/',[ validarJWT, validarRolDocente ], getInventario)

router.post('/',[ validarJWT, validarRolAdmin ], createInventario)

router.put('/:inventarioId',[ validarJWT, validarRolAdmin ], updateInventario)

router.get('/:inventarioId',[ validarJWT, validarRolDocente ], getInventarioId)

module.exports = router;