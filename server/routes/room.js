const express = require('express');
const routes = express.Router();

const roomcontroller = require('../controllers/ctrl_room');

//Use the function in the controller if the user uses a post for /login.
routes.get('/', roomcontroller.getAll);
routes.post('/', roomcontroller.post);
routes.get('/:_id', roomcontroller.getById);
routes.delete('/:_id', roomcontroller.delete);
routes.patch('/:_id', roomcontroller.update);

module.exports = routes;