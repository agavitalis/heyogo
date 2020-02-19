import express from 'express';
const router = express.Router();
import authenticator from '../services/authenticator'

//import controllers
import  indexController from '../controllers/indexController';
import  registerController from '../controllers/registerController';
import  loginController  from '../controllers/loginController'



//auth
router.use('/login', loginController.login)
router.use('/register', registerController.register)

//protected routes
//router.use('/json_patch',authenticator.authenticate, jsonController.json_patch)

router.use('/', indexController.index)

//export the routers
module.exports = router;