const mongodb = require('../DB/connection');
const ObjectId = require('mongodb').ObjectId;


//this gets all of the data in the database
const getAll = async(req, res, next)=>{
    const result = await mongodb.getDb().db('week2db').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).json(lists);
    });
};

//this gets one entry based on User ID
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db('week2db')
    .collection('contacts')
    .find({_id: userId});
    result.toArray().then((lists)=> {
        res.setHeader('content-type', 'application/json')
        res.status(200).json(lists[0]);
    });
};

//create contact
const createContact = async(req, res)=>{
    //creating the contact fields
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        favoriteColor:req.body.favoriteColor,
        birthday:req.body.birthday
    };
    //sending it to the DB
    const response = await mongodb.getDb().db('week2db').collection('contacts').insertOne(contact);
    //allowing feedback from the db
    if (response.acknowledged){
        res.status(201).json(response);
    }else{
        res.status(500).json(response.error || 'An error occurred while creating the contact. Please check the DB and try again.');
    }
};
//update contact in db already
const updateContact = async(req, res)=>{
    const userId = new ObjectId(req.params.id);
    //creating the contact info
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        favoriteColor:req.body.favoriteColor,
        birthday:req.body.birthday
    };
    const response = await mongodb.getDb().db('week2db').collection('contacts').replaceOne({_id:userId}, contact);
    console.log(response);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }else{
        res.status(500).json(response.error || 'An error occured while updating the contact');
    }
};
//to delete a contact from the database
const deleteContact =async(req,res) =>{
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('week2db').collection('contacts').deleteOne({_id: userId }, true);
    console.log(response);
    if (response.deletedCount >0 ){
        res.status(200).send();
    }else{
        res.status(500).json(response.error || 'An error occurred while deleting the contact');
    }
};

//returns and exports either get all or get single.
module.exports = {getAll, getSingle, createContact, updateContact, deleteContact};