const express = require('express');
const router = express.Router();
const OfertaController = require('../controllers/oferta.controller');


/* GET Ofertas Listing*/
router.get('/', OfertaController.list_all);
router.get('/:id', OfertaController.find_by_id);

/* POST New Oferta*/
router.post('/create', OfertaController.create);

/* UPDATE Oferta by ID */
router.put('/:id', OfertaController.update_by_id);

/* DELETE Oferta by ID */
router.delete('/:id', OfertaController.delete_by_id);


module.exports = router;
