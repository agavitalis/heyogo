var express = require('express');
const router = express.Router();
var authenticator = require('../services/authenticator');
var Upload = require('../services/file_upload')

//import controllers
var indexController = require('../controllers/indexController');
var registerController = require('../controllers/registerController');
var loginController = require('../controllers/loginController');
var dashboardController = require('../controllers/dashboardController');
var productController = require('../controllers/productController');
var galleryController = require('../controllers/galleryController');
var contactController = require('../controllers/contact_usController');
var userController = require('../controllers/userController');
var blogController = require('../controllers/blogController');

//auth
router.use('/login', loginController.login)
router.use('/register', registerController.register)


//protected routes(admin routes)
//router.use('/json_patch',authenticator.authenticate, jsonController.json_patch)
router.use('/admin_dashboard', dashboardController.dashboard)
router.use('/admin_product',Upload.upload.single('product_image'), productController.product)
router.use('/admin_gallery',Upload.upload.single('picture'), galleryController.gallery)
router.use('/admin_contact', contactController.contact)
router.use('/admin_user', userController.user)
router.use('/admin_blog',Upload.upload.single('cover_image'), blogController.blog)

//unprotected routes(website routes)
router.use('/blog/:post_id', indexController.blog_readmore)
router.use('/blog', indexController.blog)
router.use('/gallery', indexController.gallery)
router.use('/products', indexController.products)
router.use('/contact', indexController.contact)
router.use('/about', indexController.about)
router.use('/customer_contact', indexController.customer_contact)

router.use('/', indexController.index)


//export the routers
module.exports = router;