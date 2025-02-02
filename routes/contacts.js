const express = require('express');

const router = express.Router();

//Contoller
const ContactsController = require('../controllers/contactsController');

//Post Route
router.post('/', ContactsController.createContact);

//Get Routes
router.get('/', ContactsController.getAllContacts);
router.get('/:id', ContactsController.getContactById);

//Put Route
router.put('/:id', ContactsController.updateContact);

//Delete Route
router.delete('/:id', ContactsController.deleteContact);

module.exports = router;
