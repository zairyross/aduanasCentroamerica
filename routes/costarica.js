
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { existePaisPorIdCr, codigoExisteCr } = require('../helpers/db-validators'); 

const { crGet,
        crPut,
        crPost,
        crDelete,
        crPatch } = require('../controllers/costarica');

const router = Router();


router.get('/', crGet );

router.post('/',[
    check('codigo').custom(codigoExisteCr),
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    check('nombreproyecto', 'El nombre del proyecto es obligatorio').not().isEmpty(),
    check('fechacierre', 'La fecha de cierre es obligatorio').not().isEmpty(),
    check('paisejecuta', 'El país que ejecuta es obligatorio').not().isEmpty(),
    validarCampos
], crPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorIdCr ),
    check('codigo').custom(codigoExisteCr),
    validarCampos
],crPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorIdCr ),
    validarCampos
],crDelete );

router.patch('/', crPatch );





module.exports = router;