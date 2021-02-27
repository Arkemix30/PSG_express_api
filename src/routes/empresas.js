const express = require('express');
const router = express.Router();
const EmpresaController = require('../controllers/empresa.controller');


/* GET Users Listing*/
router.get('/', EmpresaController.list_all);
router.get('/:id', EmpresaController.find_by_id);

/* POST New User*/
router.post('/create', EmpresaController.create);

router.put('/:id', EmpresaController.update_by_id);

/* DELETE USER by ID */
router.delete('/:id', EmpresaController.delete_by_id);


module.exports = router;
