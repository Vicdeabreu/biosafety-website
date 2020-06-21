const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index.html', {title: 'Biosafety'});
})

router.get('/contact', (req,res) => {
  res.render('contact.html', {title: 'Contact Biosafety'});
})

router.get('/about', (req,res) => {
  res.render('about.html', {title: 'About Biosafety'});
})

module.exports = router;