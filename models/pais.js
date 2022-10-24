
const { Schema, model } = require('mongoose');

const aduanascentroamericaSchema = Schema({
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
    },
    fecha: {
        type: String,
    },
    fechacierre: {
        type: String,
    },

    paisejecuta: {
        type: String,
    },
});



aduanascentroamericaSchema.methods.toJSON = function() {
    const { __v, ...aduanascentroamerica  } = this.toObject();
    return aduanascentroamerica;
}

module.exports = model( 'Pais', aduanascentroamericaSchema );
