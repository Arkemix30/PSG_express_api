const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");
const SaltRounds = 10;
const validateEmail = require('../helpers/emailvalidator');
 

const userSchema = new Schema({
    fullname: {
      type: String,
      required: [true, "El nombre es obligatorio"],
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
    password: {
      type: String,
      required: [true, "El password es obligatorio"],
    },
    role: {
      type: String,
      required: true
    }
  }, {
    versionKey: false   
  });

/*Hashing the User's Password before saving into Database*/
userSchema.pre("save", function (next){
  if (this.isModified("password")){
    this.password = bcrypt.hashSync(this.password, SaltRounds);
  }
  next();
});

/*Password Hash Validator*/
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model('User', userSchema)
