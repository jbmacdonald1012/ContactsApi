const express = require('express');

const router = express.Router();

//GetContoller
const contactsGetController = require('../controllers/contactsGetController');

//Get Routes
router.get('/', contactsGetController.GetAllContacts);
router.get('/:id', contactsGetController.GetContactById);

module.exports = router;
