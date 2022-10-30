
const { Schema, model } = require('mongoose');

const aduanascentroamericaSchemaCr = Schema({
    codigo: {
        type: String,
        required: [true, 'El código es requerido'],
        unique: true
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es requerido'],
    },
    fechacierre: {
        type: String,
        required: [true, 'La fecha de cierre es requerida'],

    },
    paisejecuta: {
        type: String,
        required: [true, 'El país que ejecuta es requerido'],
    },
});



aduanascentroamericaSchemaCr.methods.toJSON = function() {
    const { __v, ...aduanascentroamericaSchemaCr  } = this.toObject();
    return aduanascentroamericaSchemaCr;
}

module.exports = model( 'costarica', aduanascentroamericaSchemaCr );
