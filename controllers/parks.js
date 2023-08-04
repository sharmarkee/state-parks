const Park = require('../models/park');


module.exports = {
  index,
  show,
  new: newPark,
  create,
  delete: deletePark,
};

function deletePark(req, res) {
  Park.deleteOne(req.params.id);
  res.redirect('/park');
}

async function index(req, res) {
  const parks = await Park.find({});
  res.render('parks/index', { title: 'All Parks', parks });
}

async function show(req, res) {

  const park = await Park.findById(req.params.id)
  

}

function newPark(req, res) {
   

  res.render('parks/new', { title: 'Add Park', errorMsg: '' });
}

async function create(req, res) {
  
  req.body.openParkpenPark = !!req.body.openPark;
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    
    const park = await Park.create(req.body);
  
    res.redirect(`/parks/${park._id}`);
  } catch (err) {
    
    console.log(err);
    res.render('parks/new', { errorMsg: err.message });
  }
}