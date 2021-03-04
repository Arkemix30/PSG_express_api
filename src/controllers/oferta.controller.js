const Oferta = require('../models/oferta.model');

module.exports = {
    create: async function(req, res, next){
        const newOferta = new User({TipoPasantia: req.body.TipoPasantia, 
            CantidadMeses: req.body.CantidadMeses, CantidadPasantias: req.body.CantidadPasantias,
            CargoADesempeñar: req.body.CargoADesempeñar, SalarioDestinado: req.body.SalarioDestinado,
            UbicacionOferta: req.body.UbicacionOferta, EstadoCivil: req.body.EstadoCivil,
            SexoCandidato: req.body.SexoCandidato, NivelAcademico: req.body.NivelAcademico,    
            PromedioAcademico: req.body.PromedioAcademico,NivelIngles: req.body.NivelIngles,  
            HabilidadesCandidato: req.body.HabilidadesCandidato,OtrosRequisitos: req.body.OtrosRequisitos,
            EmpresaID: req.body.EmpresaID });
        await newOferta.save(function (err) {
            if (err) return res.status(406).json({
                Code: 406,
                Sstatus: 'error',
                Error: err
            });
            res.status(200).json(newOferta);
        });
    },
    list_all: async function(req, res, next){
        await Oferta.find({}, function(err, ofertas){
            if(err) return res.status(400).json({
                Error: err
            })
            res.status(200).json({
                Ofertas: ofertas
            });
        });
    },
    find_by_id: async function(req, res, next){
        await Oferta.findById(req.params.id, function(err, oferta){
            if (err) {
                res.status(404).json({Error: "La oferta con el ID: " + req.params.id + " no fue encontrado"})
            }
            else {
                res.status(200).json({
                    Oferta: oferta
                })
            }
            
        });
    },update_by_id:async function(req, res, next){
        const docupdate = req.body;
        await Oferta.findByIdAndUpdate(req.params.id, docupdate , function(err){
            if (err){
                res.status(404).json({Error: "La oferta con el ID: " + req.params.id+ " no fue encontrado", InternalError: err});
            }else{
                res.status(200).json({
                    code: 200,
                    status: 'success',
                    message: `Se ha editado correctamente los campos de la Oferta con el ID: ${req.params.id}`,
                    Changes: docupdate
                });
            }
        });
    },
    delete_by_id: async function(req, res, next){
        await Oferta.findByIdAndDelete(req.params.id, function(err){
            if (err){
                res.status(404).json({ Error: err})
            }
            else {
                res.status(200).json({
                    Message: "La Oferta con el ID: " + req.params.id + " se ha eliminado correctamente"
                });
            }
        });
    }
};