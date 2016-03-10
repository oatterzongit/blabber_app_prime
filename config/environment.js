var _ = require('lodash');

var localEnvVars = {
  TITLE:      'blabber_app_prime',
  SAFE_TITLE: 'blabber_app_prime'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
