const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

var db = require('db')
db.connect({
  apiKey: process.env.API_KEY
})

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'WEATHRLY';

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS);
}

app.get('/', function(request, response) {
  response.sendFile (
    path.resolve(__dirname, './index.html')
  );
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
