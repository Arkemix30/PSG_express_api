const Empresa = require('../models/empresa.model');

module.exports = {
    create: async function(req, res, next){
        const newEmpresa = new Empresa({empresaNombre:req.body.empresaNombre, telefono: req.body.telefono, email: req.body.email, OfertaID: req.body.OfertaID });
        await newEmpresa.save(function (err) {
            if (err) return res.status(406).json({
                code: 406,
                status: 'error',
                message: 'Empresa ya registrada',
                Error: err
            });
            res.status(200).json(newEmpresa);
        })
    },
    list_all: async function(req, res, next){
        await Empresa.find({}, function(err, empresas){
            if(err) return res.status(404).json({
                code: 404,
                status: 'error',
                message: 'Empresa no encontrada'
            });
            res.status(200).json({
                Empresas: empresas
            });
        });
    },
    find_by_id: async function(req, res, next){
        await Empresa.findById(req.params.id, function(err, empresa){
            if (err) {
                res.status(404).json({Error: "La Empresa con el ID: " + req.params.id+ " no fue encontrado"})
            }
            else {
                res.status(200).json({
                    Empresa: empresa
                })
            }
            
        });
    },
    update_by_id:async function(req, res, next){
        const docupdate = req.body;
        await Empresa.findByIdAndUpdate(req.params.id, docupdate , function(err){
            if (err){
                res.status(404).json({Error: "La Empresa con el ID: " + req.params.id+ " no fue encontrado", InternalError: err});
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
        await Empresa.findByIdAndDelete(req.params.id, function(err){
            if (err){
                res.status(404).json({ Error: err})
            }
            else {
                res.status(200).json({
                    Message: "La Empresa con el ID: " + req.params.id + " se ha eliminado correctamente"
                })
            }
        })
    }

}