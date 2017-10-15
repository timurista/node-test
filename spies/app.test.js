const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app'); // adds app.__set___ and app.__get__

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db);

  it('should call spy correctly', () => {
   const spy = expect.createSpy();
   spy('Andrew', 25);
   expect(spy).toHaveBeenCalledWith('Andrew', 25);
  })

  it('should call handle Signup with correct user name and password', () => {
    const email = 'timurista@somewhere.com';
    const password = '12345';

    // note db won't work if module is a constant
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    })
  });

})