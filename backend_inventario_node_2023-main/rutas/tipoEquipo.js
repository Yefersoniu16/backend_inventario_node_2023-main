const { Router} = require ('express');
const router = Router();
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { updateTipoEquipo, createTipoEquipo, getTipoEquipo } = require('../controllers/tipoEquipo');


router.get('/',[ validarJWT, validarRolAdmin ], getTipoEquipo)


router.post('/',[ validarJWT, validarRolAdmin ], createTipoEquipo)


router.put('/:tipoEquipoId',[ validarJWT, validarRolAdmin ], updateTipoEquipo)

module.exports = router;