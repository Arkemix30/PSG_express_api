const { Schema, model } = require('mongoose');

const ofertaSchema = new Schema({
    Carrera: {
        type: String,
        required: false,
        default: 'Industrial'
    },
    Tipo_Posicion:{
        type: String,
        required: true
    },
    Cantidad_Meses:{
        type: Number,
        required: true
    },
    Cantidad_Pasantias:{
        type: Number,
        required: true
    },
    Cargo_A_Desempeñar:{
        type: [String],
        required: false
    },
    Salario_Destinado:{
        Cantidad:{ type: Number, required: false },
        Divisa: { type: String, required: false }
    },
    Ubicacion_Oferta:{
        type: String,
        required: true
    },
    Estado_Civil:{
        type: String,
        required: true
    },
    Sexo_Candidato:{
        type: String,
        required: true
    },
    Nivel_Academico:{
        type: String,
        required: true
    },
    Promedio_Academico:{
        type: Number,
        required: false
    },
    Nivel_Ingles:{
        type: String,
        required: false
    },
    Habilidades_Candidato:{
        type: [String],
        required: false
    },
    Otros_Requisitos:{
        type: [String],
        required: false
    }
});

module.exports = model('Oferta', ofertaSchema)