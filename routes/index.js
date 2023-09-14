const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.melissaRoute);
routes.get('/nickName', lesson1Controller.nickRoute);

module.exports = routes;