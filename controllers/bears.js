const Bear = require('../models/bear');

module.exports = {
  create,
  delete: deleteBear
};

async function deleteBear(req, res) {
  
  const park = await park.findOne({ 'bear._id': req.params.id, 'bear.user': req.user._id });
  
  if (!park) return res.redirect('/park');
  
  park.bear.remove(req.params.id);
  
  await park.save();
  
  res.redirect(`/park/${park._id}`);
}

async function create(req, res) {
  const park = await park.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  
  park.bear.push(req.body);
  try {
    
    await Bear.save();
  } catch (err) {
    console.log(err);
  }
 
  res.redirect(`/park/${park._id}`);
}