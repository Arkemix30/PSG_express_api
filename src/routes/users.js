const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

/* GET Users Listing*/
router.get('/', UserController.list_all);
router.get('/:id', UserController.find_by_id);

/* POST New User*/
router.post('/create', UserController.create);


/* DELETE USER by ID */
router.delete('/:id', UserController.delete_by_id);

module.exports = router;
