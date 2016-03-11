module.exports = {
  index: index
}

var Blab = require("../models/blab");

// Controller Actions


// index
function index(req, res, next) {
  Blab
  .find({})
  .then(
    function(blabs) {
      res.json(blabs);
    },
    function(err) {
      console.log(err);
    });
};


// Helper Functions

function logErrors(err) {
  console.log(err);
}
