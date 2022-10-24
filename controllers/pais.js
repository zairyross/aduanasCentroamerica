const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Pais = require('../models/pais');


const paisGet = async(req = request, res = response) => {

    const filter = {}; 
    const pais = await Pais.find(filter);
        res.json({
          msg:'Zaira Ivonne García Rosales / 25-1891-2017',
          pais
      });
}

const paisPost = async(req, res = response) => {
    
    const { codigo, nombreproyecto, monto, fecha, fechacierre, paisejecuta } = req.body;
    const pais = new Pais({codigo, nombreproyecto, monto, fecha, fechacierre, paisejecuta});

    /* Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );*/

    // Guardar en BD
    await pais.save();

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        pais
    });
}

const paisPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const pais = await Pais.findByIdAndUpdate( id, resto );
    const paisActualizado = await Pais.findById(id);

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        paisActualizado
    });
}

const paisPatch = (req, res = response) => {
    res.json({          
        msg: 'patch API - paisPatch'
    });
}
 

const paisDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const pais = await Pais.findByIdAndDelete( id /*, { estado: false }*/);


    res.json({
        msg1:'Zaira Ivonne García Rosales / 25-1891-2017',
        msg: 'Registro eliminado con éxito, favor verificar con UN GET',
        pais});
}

module.exports = {
    paisGet,
    paisPost,
    paisPut,
    paisDelete,
    paisPatch
}