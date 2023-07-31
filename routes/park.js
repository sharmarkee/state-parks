const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const parkCtrl = require('../controllers/park');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', parkCtrl.index);

router.get('/new', ensureLoggedIn, park.new);
router.get('/new', park.new);

router.get('/:id', parkCtrl.show);
router.post('/', ensureLoggedn, park.Ctrl.create);

router.post('/', parkCtrl.create);
	
module.exports = router;
