const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

//this is /contacts . Invokes the functions in controllers/contacts
router.get('/',contactsController.getAll);

//so this is /contacts/:id. Invokes the functions in controllers/contacts
router.get('/:id', contactsController.getSingle);

//create contact
router.post('/', contactsController.createContact);
//update contact
router.put('/:id', contactsController.updateContact);
//delete contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;