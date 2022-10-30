
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { codigoExisteGt, existePaisPorIdGt } = require('../helpers/db-validators'); 

const { gtGet,
        gtPut,
        gtPost,
        gtDelete,
        gtPatch } = require('../controllers/guatemala');

const router = Router();


router.get('/', gtGet );

router.post('/',[
    check('codigo').custom(codigoExisteGt),
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    check('nombreproyecto', 'El nombre del proyecto es obligatorio').not().isEmpty(),
    check('monto', 'El monto obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
], gtPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorIdGt ),
    check('codigo').custom(codigoExisteGt),
    validarCampos
],gtPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorIdGt),
    validarCampos
],gtDelete );

router.patch('/', gtPatch );





module.exports = router;