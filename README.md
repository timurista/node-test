# Node Testing

Some boilerplate method for testing node applicaitons.

## Key Concepts
- use mocha and expect packages to run tests
- label tests with extension test.js => `mycode.test.js`
- use spy and rewire to mock data. Example when a function has a dependency you can use rewire to simulate data changes
- utilize supertest, and callback function to test instances of a node express server

## Using Nodemon to watch and rerun
`nodemon --exec "yarn test"`

