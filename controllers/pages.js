var welcome = function(req, res, next) {
  res.redirect("/index.html");
};

module.exports = {
  welcome: welcome
};
