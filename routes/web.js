const express = require('express');
const router = express.Router();
const authenticator = require('../services/authenticator');
const Upload = require('../services/fileUpload')

//import controllers
const indexController = require('../controllers/indexController');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const dashboardController = require('../controllers/dashboardController');
const productController = require('../controllers/productController');
const galleryController = require('../controllers/galleryController');
const contactController = require('../controllers/contactUsController');
const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');

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
router.use('/admin/users', userController.getUsers)
router.use('/admin/createUser', userController.createUser)

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