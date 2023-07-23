const express = require('express');
const router = express.Router();

const usersController = require('../controller/users')

// http://localhost:8080/users - to list users
router.get('/', usersController.get);

// http://localhost:8080/users/create - to create user
router.post('/create', usersController.post);

// http://localhost:8080/users/get/:id - to get a particular user with the given id
router.get('/get/:id', usersController.getById);

// http://localhost:8080/users/update/:id - to update a particular user with the given id
router.put('/update/:id', usersController.updateById);


// http://localhost:8080/users/delete/:id - to delete a particular user with the given id
router.delete('/delete/:id', usersController.deleteById);

module.exports = router;