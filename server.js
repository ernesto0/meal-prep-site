const express = require('express');
const mongoose = require('mongoose');
const users = require('./Controllers/users');
const meals = require('./Controllers/meals');

const db = require('./config/keys').mongoURI;

const app = express();
const port = 3000;

app.use('/users', users);
app.use('/meals', meals);

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))