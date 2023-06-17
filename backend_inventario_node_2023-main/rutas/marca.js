const {Router} = require ('express');
const { getMarca, createMarca, updateMarca } = require('../controllers/marca');
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const router = Router();


router.post('/',[ validarJWT, validarRolAdmin ], createMarca)


router.get('/',[ validarJWT, validarRolAdmin ], getMarca)

router.put('/:marcaId',[ validarJWT, validarRolAdmin ], updateMarca)

module.exports = router;