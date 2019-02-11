const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

// Connect to MongoDB
mongoose
  .connect(
    //cambiar localhost por mongo
    'mongodb://localhost:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Item = require('./models/Item');
const Menu = require('./models/Menu');
const User = require('./models/User');
//load menu items
let menuItems;

Menu.find()
  .then(menu_items => menuItems = menu_items);

//initial page, also called home
app.get('/', (req, res) => {
  res.render('home', {menuItems});
})

app.get('/home', (req, res) => {
  res.render('home', {menuItems});
})

//about page
app.get('/about', (req, res) => {
  res.render('about', {menuItems});
})

//work page:
app.get('/work', (req, res) => {
  res.render('work', {menuItems});
})

//contact page:
app.get('/contact', (req, res) => {
  res.render('contact', {menuItems});
})

//admin page and post
app.get('/admin/:uid/:psswd', (req, res) => {
  let password = req.params.psswd;
  let user = req.params.uid;

  let admin;
  User.findOne()
    .then(info => {
      admin = info;
      bcrypt.compare(password, admin.password, function(err, chk){
        if(chk){
          res.render('admin', { menuItems });
        }else{
          res.send('you are not who you are supposed to be')
        }
      })
    })
});

app.post('/menu/edit', (req, res) => {
  for(item in req.body){
    Menu.findOne({'name':item}, function(err, menu_item){
      if(menu_item != null){
        //update
        
      }else {
        //insert new

      }
    });
  }
})

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));
