const { ObjectId } = require('mongodb');
const mongodb = require('../database/connect');

const GetAllContacts = async (req, res) => {
  const result = await mongodb
    .getDatabase('main')
    .collection('contacts')
    .find();

  result.toArray().then((allContactsList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(allContactsList);
  });
};

const GetContactById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase('main')
    .collection('contacts')
    .find({ _id: contactId });

  result.toArray().then((singleContact) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(singleContact[0]);
  });
};

module.exports = {
  GetAllContacts,
  GetContactById,
};
