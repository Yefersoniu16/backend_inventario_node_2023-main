const {Router} = require('express');  
const router = Router();
const { validarJWT } = require('../middleware/validarJWT');
const { validarRolAdmin } = require('../middleware/validar-rol-admin');
const { validarRolDocente } = require('../middleware/validar-rol-docente');
const {getUsuario, createUsuario, updateUsuario, getUsuarioId} = require('../controllers/usuario')

router.post('/',[ validarJWT, validarRolAdmin ],
createUsuario)

router.get('/',[ validarJWT, validarRolDocente ],
getUsuario)

router.put('/:usuarioId',[ validarJWT, validarRolAdmin ],
updateUsuario)

router.get('/:usuarioId',[ validarJWT, validarRolDocente ],
getUsuarioId)

module.exports = router;