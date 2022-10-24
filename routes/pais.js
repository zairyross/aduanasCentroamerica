
const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { codigoExiste, existePaisPorId } = require('../helpers/db-validators'); 

const { paisGet,
        paisPut,
        paisPost,
        paisDelete,
        paisPatch } = require('../controllers/pais');

const router = Router();


router.get('/', paisGet );

router.post('/',[
    check('codigo').custom(codigoExiste),
    check('codigo', 'El código es obligatorio').not().isEmpty(),
    validarCampos
], paisPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorId ),
    check('codigo').custom(codigoExiste),
    validarCampos
],paisPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existePaisPorId ),
    validarCampos
],paisDelete );

router.patch('/', paisPatch );





module.exports = router;