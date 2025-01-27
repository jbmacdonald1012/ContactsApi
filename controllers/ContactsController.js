const { ObjectId } = require('mongodb');
const mongodb = require('../database/connect');

const GetAllContacts = async (req, res) => {
  const result = await mongodb.getDatabase('main').collection('contacts').find();

  result.toArray().then((allContactsList) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(allContactsList);
  });
};

const GetContactById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase('main').collection('contacts').find({ _id: contactId });

  result.toArray().then((singleContact) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(singleContact[0]);
  });
};

const CreateContact = async (req, res) => {
  const newContact = req.body;
  const result = await mongodb.getDatabase('main').collection('contacts').insertOne(newContact);

  res.setHeader('Content-Type', 'application/json');
  res.status(201).json({ id: result.insertedId });
};

const UpdateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const updatedContact = req.body;
  const result = await mongodb
    .getDatabase('main')
    .collection('contacts')
    .updateOne({ _id: contactId }, { $set: updatedContact });

  res.setHeader('Content-Type', 'application/json');
  res.status(204).json({ 'Contact updated successfully': result.modifiedCount });
};

const DeleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase('main')
    .collection('contacts')
    .deleteOne({ _id: contactId });

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ 'Contact Successfully Deleted': result.deletedCount });
};

module.exports = {
  GetAllContacts,
  GetContactById,
  CreateContact,
  UpdateContact,
  DeleteContact
};
