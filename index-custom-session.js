const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { v4: uuid } = require('uuid');
const PORT = 5000;
const app = express();

const session = {};

app.use(cookieParser());
app.use(session({
  secret: 'My biggest secret ever!',
  resave: false,
  cookie: { secure: false }, // localhost -> http
}));

app.get('/', (req, res) => {
  let id;
  const userId = req.cookies['userId'];

  if (userId) {
    id = userId;
    console.log(req.session);
  } else {
    id = uuid();
    res.cookie('userId', id);
  }

  res.send('ok! ID: ' + id);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
