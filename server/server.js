const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.get('/bad', (req, res) => {
  res.send({
    error: 'page not found'
  });
})

app.get('/users', (req, res) => {
  res.send([
    {user: 'tim.urista'},
    {user: 'john.doe'},
    {user: 'silvester stalone'}
  ]);
})

app.listen(3000, () => {
  console.log('listening at 3000')
});

module.exports.app = app;