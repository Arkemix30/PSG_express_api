const { Schema, model } = require('mongoose');
const validateEmail = require('../helpers/emailvalidator');

const EmpresaSchema = new Schema({
    empresaNombre: {
        type: String,
        required: [true, "El nombre de la Empresa es obligatorio"],
    },
    telefono: {
        type: [Number],
        min: 8,
        max: 13,
    },
    email: {
        type: String,
        trim: true,
        required: [true, "El Email es obligatorio"],
        lowercase: true,
        unique: true,
        validate: [validateEmail, "Por favor, ingrese un correo valido"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
      },
    OfertaID: {
        type: Schema.Types.ObjectId,
        ref: 'Oferta'
      }
},{
    versionKey: false   
  });

module.exports = model('Empresa', EmpresaSchema);
