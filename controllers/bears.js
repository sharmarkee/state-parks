const Bear = require('../models/bear');

module.exports = {
  create,
  delete: deleteBear,
  new: newBears,
  index
};

async function deleteBear(req, res) {
  try {
const  deleteIt =  await Bear.deleteOne({_id:req.params.id});
  console.log(deleteIt);
  res.redirect('/bears');}
  catch(err){
    console.log(err);
  }
}

async function create(req, res) {
  // const park = await park.findById(req.params.id);

  // req.body.user = req.user._id;
  // req.body.userName = req.user.name;
  // req.body.userAvatar = req.user.avatar;
  
  // park.bear.push(req.body);
  try {
    
    await Bear.create(req.body);
  } catch (err) {
    console.log(err);
  }
 
  res.redirect('/bears');
}

async function newBears (req, res) {
  const bears = await Bear.find({})
  res.render('bears/new',{bears, title: 'Add Bear'}); 

}

async function index(req, res){
  const bears = await Bear.find({});
  res.render('bears/index',{bears, title: 'All Bears'}); 
}
