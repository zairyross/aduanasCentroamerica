//const Role = require('../models/role');
const costarica = require('../models/costarica');
const guatemala = require('../models/guatemala');


const codigoExisteGt = async( codigo = '' ) => {
    // Verificar si el correo existe
    const existeCodigo = await guatemala.findOne({ codigo });
    if ( existeCodigo ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }
}

const codigoExisteCr = async( codigo = '' ) => {
    // Verificar si el correo existe
    const existeCodigo = await costarica.findOne({ codigo });
    if ( existeCodigo ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }
}

const existePaisPorIdGt = async( id ) => {
    // Verificar si el correo existe
    const existePais = await guatemala.findById(id);
    if ( !existePais ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existePaisPorIdCr = async( id ) => {
    // Verificar si el correo existe
    const existePais = await costarica.findById(id);
    if ( !existePais ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    codigoExisteGt,
    codigoExisteCr,
    existePaisPorIdGt,
    existePaisPorIdCr
}

