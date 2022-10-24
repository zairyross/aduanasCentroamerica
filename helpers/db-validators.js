//const Role = require('../models/role');
const Pais = require('../models/pais');


const codigoExiste = async( codigo = '' ) => {
    // Verificar si el correo existe
    const existeCodigo = await Pais.findOne({ codigo });
    if ( existeCodigo ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }
}

const existePaisPorId = async( id ) => {
    // Verificar si el correo existe
    const existePais = await Pais.findById(id);
    if ( !existePais ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    codigoExiste,
    existePaisPorId
}

