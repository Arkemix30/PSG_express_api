const express = require('express');
const router = express.Router();
const EmpresaController = require('../controllers/empresa.controller');


/* GET Empresas Listing*/
router.get('/', EmpresaController.list_all);
router.get('/:id', EmpresaController.find_by_id);

/* POST New Empresa*/
router.post('/create', EmpresaController.create);

/* UPDATE Empresa by ID */
router.put('/:id', EmpresaController.update_by_id);

/* DELETE Empresa by ID */
router.delete('/:id', EmpresaController.delete_by_id);


module.exports = router;
