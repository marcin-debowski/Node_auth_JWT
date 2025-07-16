const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

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

//cookies
// app.get('/set-cookies', (req,res)=>{
//   //res.setHeader('Set-Cookies','newUser=true')
//   res.cookie('newUser',false);
//   res.cookie('isEmploy',true,{httpOnly:true});

//   res.send('you git cookies')
// })
// app.use('/read-cookies',(req,res)=>{

//   const cookies = req.cookies;
//   res.json(cookies);

// })