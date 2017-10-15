var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email exists
  db.saveUser({email, password});
  // spies you can swap out real function
}