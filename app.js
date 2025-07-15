const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Presza:Koliber123@cluster0.5tjgb0z.mongodb.net/node-JWT';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
  const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Server running on port ${PORT}`);
//});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);