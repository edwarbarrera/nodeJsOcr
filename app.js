const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stuffRouter = require('./routes/stuff');
const userRouter = require('./routes/user')


mongoose.connect('mongodb+srv://papyverveine:lasaucedemangues@cluster0.fyzqgxj.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
// app.use(express.json());

app.use(bodyParser.json());

app.use('/api/stuff', stuffRouter);
app.use('/api/auth', userRouter);




module.exports = app;