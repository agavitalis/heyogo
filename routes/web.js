var express = require('express');
const router = express.Router();
var authenticator = require('../services/authenticator');
var Upload = require('../services/fileUpload')

//import controllers
var indexController = require('../controllers/indexController');
var registerController = require('../controllers/registerController');
var loginController = require('../controllers/loginController');
var dashboardController = require('../controllers/dashboardController');
var productController = require('../controllers/productController');
var galleryController = require('../controllers/galleryController');
var contactController = require('../controllers/contactUsController');
var userController = require('../controllers/userController');
var blogController = require('../controllers/blogController');

//auth
router.use('/login', loginController.login)
router.use('/register', registerController.register)

//protected routes(admin routes)
router.use('/admin/dashboard', authenticator.authenticate,dashboardController.dashboard)

/*----------Products---------------*/
router.use('/admin/products',productController.getProducts)
router.use('/admin/createProduct',Upload.upload.single('product_image'), productController.createProduct)

/*----------Gallery---------------*/
router.use('/admin/gallery', galleryController.gallery)
router.use('/admin/createGallery',Upload.upload.single('picture'), galleryController.gallery)

/*----------Contact---------------*/
router.use('/admin/contact', contactController.contact)

/*----------User---------------*/
router.use('/admin/user', userController.user)

/*----------Blog---------------*/
router.use('/admin/blogPosts', blogController.getBlogPosts)
router.use('/admin/createBlogPost',Upload.upload.single('cover_image'), blogController.createBlogPost)

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