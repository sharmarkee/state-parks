const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const parkCtrl = require('../controllers/parks');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', parkCtrl.index);

router.get('/new', ensureLoggedIn, parkCtrl.new);
router.get('/new', parkCtrl.new);

router.get('/:id', parkCtrl.show);
router.post('/', ensureLoggedIn, parkCtrl.create);

// router.post('/', parkCtrl.create);
router.delete('/:id', parkCtrl.delete);

	
module.exports = router;
