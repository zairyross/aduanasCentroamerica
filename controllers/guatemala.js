const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const guatemala = require('../models/guatemala');


const gtGet = async(req = request, res = response) => {

    const filter = {}; 
    const gt = await guatemala.find(filter);
        res.json({
          msg:'Zaira Ivonne García Rosales / 25-1891-2017',
          gt
      });
}

const gtPost = async(req, res = response) => {
    
    const { codigo, nombreproyecto, monto, fecha} = req.body;
    const gt = new guatemala({codigo, nombreproyecto, monto, fecha});

    /* Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );*/

    // Guardar en BD
    await gt.save();

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        gt
    });
}

const gtPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const gt = await guatemala.findByIdAndUpdate( id, resto );
    const gtActualizado = await guatemala.findById(id);

    res.json({
        msg:'Zaira Ivonne García Rosales / 25-1891-2017',
        gtActualizado
    });
}

const gtPatch = (req, res = response) => {
    res.json({          
        msg: 'patch API - gtPatch'
    });
}
 

const gtDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const gt = await guatemala.findByIdAndDelete( id /*, { estado: false }*/);


    res.json({
        msg1:'Zaira Ivonne García Rosales / 25-1891-2017',
        msg: 'Registro eliminado con éxito, favor verificar con UN GET',
        gt});
}

module.exports = {
    gtGet,
    gtPost,
    gtPut,
    gtDelete,
    gtPatch
}