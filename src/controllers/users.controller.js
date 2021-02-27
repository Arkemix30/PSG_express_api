const User = require('../models/users.model');

module.exports = {
    create: async function(req, res, next){
        const newUser = new User({ fullname: req.body.fullname, email: req.body.email, password: req.body.password,role: req.body.role });
        await newUser.save(function (err) {
            if (err) return res.status(406).json({
                code: 406,
                status: 'error',
                message: 'Correo ya registrado, utilice otro correo electronico'
            });
            res.status(200).json(newUser);
        });
    },
    list_all: async function(req, res, next){
        await User.find({}, function(err, users){
            if(err) return console.error(err)
            res.status(200).json({
                Users: users
            });
        });
    },
    find_by_id: async function(req, res, next){
        await User.findById(req.params.id, function(err, user){
            if (err) {
                res.status(404).json({Error: "Usuario con el ID: " + req.params.id + " no fue encontrado"})
            }
            else {
                res.status(200).json({
                    User: user
                })
            }
            
        });
    },update_by_id:async function(req, res, next){
        const docupdate = req.body;
        await user.findByIdAndUpdate(req.params.id, docupdate , function(err){
            if (err){
                res.status(404).json({Error: "El Usuario con el ID: " + req.params.id+ " no fue encontrado", InternalError: err});
            }else{
                res.status(200).json({
                    code: 200,
                    status: 'success',
                    message: `Se ha editado correctamente los campos de la Empresa con el ID: ${req.params.id}`,
                    Changes: docupdate
                });
            }
        });
    },
    delete_by_id: async function(req, res, next){
        await User.findByIdAndDelete(req.params.id, function(err){
            if (err){
                res.status(404).json({ Error: err})
            }
            else {
                res.status(200).json({
                    Message: "El Usuario con el ID: " + req.params.id + " se ha eliminado correctamente"
                })
            }
        })
    }
}