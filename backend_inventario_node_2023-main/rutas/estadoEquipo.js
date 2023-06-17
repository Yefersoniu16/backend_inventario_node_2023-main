const {Router} = require ('express');
const router = Router();
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { updateEstadoEquipo, createEstadoEquipo, getEstadoEquipo, getEstadoEquipoId } = require('../controllers/estadoEquipo');


router.get('/',[ validarJWT, validarRolAdmin ], getEstadoEquipo)

router.post('/',[ validarJWT, validarRolAdmin ],createEstadoEquipo)

router.put('/:estadoEquipoId',[ validarJWT, validarRolAdmin ], updateEstadoEquipo)

router.get('/:estadoEquipoId',[ validarJWT, validarRolAdmin ],getEstadoEquipoId)


module.exports = router;