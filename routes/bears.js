const express = require('express');
const router = express.Router();
const bearsCtrl = require('../controllers/bears');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// router.post('/park/:id/bear', bearsCtrl.create);
router.get('/new',bearsCtrl.new);
router.get('/',bearsCtrl.index);

// router.delete('/bear/:id', bearsCtrl.delete);

router.post('/', ensureLoggedIn, bearsCtrl.create);
router.delete('/:id', ensureLoggedIn, bearsCtrl.delete);

module.exports = router;