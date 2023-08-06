const Park = require('../models/park');


module.exports = {
  index,
  show,
  new: newPark,
  create,
  delete: deletePark,
};

async function deletePark(req, res) {
  try {
const  deleteIt =  await Park.deleteOne({_id:req.params.id});
  console.log(deleteIt);
  res.redirect('/parks');}
  catch(err){
    console.log(err);
  }
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
  
  req.body.newPark = !!req.body.newPark;
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
    console.log(req.body);
  try {
    
    const park = await Park.create(req.body);
       console.log(park);
    res.redirect('/parks/');
  } catch (err) {
    
    console.log(err);
    res.render('parks/new', { errorMsg: err.message });
  }
}