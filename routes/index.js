const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.melissaRoute);
routes.get('/nickName', lesson1Controller.nickRoute);
routes.get('/sakuraRoute', lesson1Controller.sakuraRoute);
routes.get('/reiRoute', lesson1Controller.reiRoute);
routes.get('/ayameRoute', lesson1Controller.ayameRoute);

module.exports = routes;