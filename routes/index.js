var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'MN State-Parks' });
});

router.get('/auth/google', passport.authenticate(
  
  'google',
  {
    
    scope: ['profile', 'email'],
  
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/parks',
    failureRedirect: '/parks'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/parks');
  });
});


module.exports = router;
