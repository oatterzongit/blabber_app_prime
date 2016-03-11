var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var blabsController = require('../controllers/blabs');

// root path:
router.get('/', pagesController.welcome);

// blabs paths:
router.get('/blabs', blabsController.index);


// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

module.exports = router;
