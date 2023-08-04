const express = require('express');
const router = express.Router();
const bearsCtrl = require('../controllers/bears');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/park/:id/bear', bearsCtrl.create);

router.delete('/bear/:id', bearsCtrl.delete);

router.post('/park/:id/bear', ensureLoggedIn, bearsCtrl.create);
router.delete('/bear/:id', ensureLoggedIn, bearsCtrl.delete);

module.exports = router;