var express = require('express');
const router = express.Router();
var authenticator = require('../services/authenticator');

//import controllers
var indexController = require('../controllers/indexController');
var registerController = require('../controllers/registerController');
var loginController = require('../controllers/loginController');


//auth
router.use('/login', loginController.login)
router.use('/register', registerController.register)

//protected routes
//router.use('/json_patch',authenticator.authenticate, jsonController.json_patch)
router.use('/blog', indexController.blog)
router.use('/gallery', indexController.gallery)
router.use('/products', indexController.products)
router.use('/contact', indexController.contact)
router.use('/about', indexController.about)
router.use('/', indexController.index)


//export the routers
module.exports = router;