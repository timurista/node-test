module.exports = {
  add: (a, b) => a + b,
  square: x => x*x,
  setName: (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
  },
  asyncAdd: (a, b, callback) => {
    setTimeout(() => callback(a + b), 20)
  }
}