const { Schema, model } = require('mongoose');

const ofertaSchema = new Schema({
    Carrera: {
        type: String,
        required: false,
        default: 'Industrial'
    },
    TipoPasantia:{
        type: String,
        required: true
    },
    CantidadMeses:{
        type: Number,
        required: true
    },
    CantidadPasantias:{
        type: Number,
        required: true
    },
    CargoADesempeñar:{
        type: [String],
        required: false
    },
    SalarioDestinado:{
        Cantidad:{ type: Number, required: false },
        Divisa: { type: String, required: false }
    },
    UbicacionOferta:{
        type: String,
        required: true
    },
    EstadoCivil:{
        type: String,
        required: true
    },
    SexoCandidato:{
        type: String,
        required: true
    },
    NivelAcademico:{
        type: String,
        required: true
    },
    PromedioAcademico:{
        type: Number,
        required: false
    },
    NivelIngles:{
        type: String,
        required: false
    },
    HabilidadesCandidato:{
        type: [String],
        required: false
    },
    OtrosRequisitos:{
        type: [String],
        required: false
    },
    EmpresaID:{
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    }
},{
    versionKey: false   
  });

module.exports = model('Oferta', ofertaSchema)