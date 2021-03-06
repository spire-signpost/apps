### Readme - Apps - Node Notes API

A basic API with Node.js for a simple notes app with user authentication.

Run app locally,

```bash
// basic start with no refresh
node server/server.js
// monitor app start
nodemon server/server.js
// run start script specified in package.json
npm start
```

App testing available with Mocha, Expect, and Supertest, e.g.

```bash
// run test script specified in package.json - env variable set
npm test
// run monitored version of npm test
npm run test-watch
```

API testing with Postman, e.g. install as a dekstop or Chrome app,

  * https://www.getpostman.com/
  * chrome://apps/
