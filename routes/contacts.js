const express = require('express');

const router = express.Router();

//Contoller
const ContactsController = require('../controllers/contactsController');

//Post Route
router.post('/', ContactsController.CreateContact);

//Get Routes
router.get('/', ContactsController.GetAllContacts);
router.get('/:id', ContactsController.GetContactById);

//Put Route
router.put('/:id', ContactsController.UpdateContact);

//Delete Route
router.delete('/:id', ContactsController.DeleteContact);

module.exports = router;
