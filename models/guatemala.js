
const { Schema, model } = require('mongoose');

const aduanascentroamericaSchemaGt = Schema({
    codigo: {
        type: String,
        required: [true, 'El código es requerido'],
        unique: true
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es requerido'],
    },
    monto: {
        type: Number,
        required: [true, 'El monto es requerido'],
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es requerida'],
    },
});



aduanascentroamericaSchemaGt.methods.toJSON = function() {
    const { __v, ...aduanascentroamericaSchemaGt  } = this.toObject();
    return aduanascentroamericaSchemaGt;
}

module.exports = model( 'guatemala', aduanascentroamericaSchemaGt );
