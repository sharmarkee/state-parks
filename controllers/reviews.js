const Park = require('../models/park');

module.exports = {
  create,
  delete: deleteReview
};

async function deleteReview(req, res) {
  
  const movie = await park.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  
  if (!movie) return res.redirect('/park');
  
  park.reviews.remove(req.params.id);
  
  await park.save();
  
  res.redirect(`/park/${park._id}`);
}

async function create(req, res) {
  const park = await park.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  
  park.reviews.push(req.body);
  try {
    
    await park.save();
  } catch (err) {
    console.log(err);
  }
 
  res.redirect(`/park/${park._id}`);
}