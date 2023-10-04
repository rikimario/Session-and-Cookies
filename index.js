const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuid } = require('uuid');
const PORT = 5000;
const app = express();

app.use(cookieParser());


app.get('/', (req, res) => {
  let id;
  const userId = req.cookies['userId'];

  if (userId) {
    id = userId;
    console.log(req.session);
  } else {
    id = uuid();
    res.cookie('userId', id, { httpOnly: true });
    res.cookie('userId2', id);
  }

  res.send('ok! ID: ' + id);
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
