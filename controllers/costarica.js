const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const costarica = require('../models/costarica');


const crGet = async(req = request, res = response) => {

    const filter = {}; 
    const cr = await costarica.find(filter);
        res.json({
          msg:'Zaira Ivonne García Rosales / 25-1891-2017',
          cr
      });
}

const crPost = async(req, res = response) => {
    
    const { codigo, nombreproyecto, fechacierre, paisejecuta} = req.body;
    const cr = new costarica({codigo, nombreproyecto, fechacierre, paisejecuta});

    /* Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );*/

    // Guardar en BD
    await cr.save();

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        cr
    });
}

const crPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const cr = await costarica.findByIdAndUpdate( id, resto );
    const crActualizado = await costarica.findById(id);

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        crActualizado
    });
}

const crPatch = (req, res = response) => {
    res.json({          
        msg: 'patch API - crPatch'
    });
}
 

const crDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const cr = await costarica.findByIdAndDelete( id /*, { estado: false }*/);


    res.json({
        msg1:'Zaira Ivonne García Rosales / 25-1891-2017',
        msg: 'Registro eliminado con éxito, favor verificar con UN GET',
        cr});
}

module.exports = {
    crGet,
    crPost,
    crPut,
    crDelete,
    crPatch
}