const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  keys: ['randomString']
}));



app.listen(3000, () => {
  console.log('Listening');
});
