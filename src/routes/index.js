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

router.get('/services', (req,res) => {
  res.render('services.html', {title: 'What we do'});
})

router.get('/opportunities', (req,res) => {
  res.render('opportunities.html', {title: 'Opportunities'});
})

module.exports = router;