const Park = require('../models/park');


module.exports = {
  index,
  show,
  new: newPark,
  create
};

async function index(req, res) {
  const park = await park.find({});
  res.render('parks/index', { title: 'All Parks', parks });
}

async function show(req, res) {

  const park = await park.findById(req.params.id).populate('trail');
  

}

function newPark(req, res) {
   

  res.render('park/new', { title: 'Add Park', errorMsg: '' });
}

async function create(req, res) {
  
  req.body.nowShowing = !!req.body.nowShowing;
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    
    const park = await Park.create(req.body);
  
    res.redirect(`/park/${park._id}`);
  } catch (err) {
    
    console.log(err);
    res.render('park/new', { errorMsg: err.message });
  }
}