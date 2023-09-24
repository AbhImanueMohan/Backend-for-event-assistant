// To define rotes for the client request

// Import expres
const express = require('express');

const registerController = require ('../Controllers/registerController')

const homeController = require('../Controllers/homeController')

const contactController = require('../Controllers/contactController')

const bookingController = require('../Controllers/bookingController')

const packageController = require ('../Controllers/packageController')
const router = new express.Router();

router.post('/events/register',registerController.userRegister)

router.post('/events',registerController.login)

router.get('/home/all-event',homeController.getallevents)


router.get('/home/view-event/:id',homeController.viewEvents)

router.get('/view-event/:id/packages',packageController.getallPackages)


router.post('/home/contact',contactController.contactlist)

router.post('/home/book',bookingController.booklist)


//export router
module.exports = router

