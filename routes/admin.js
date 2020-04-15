const express = require('express');
const router = express.Router();
const News = require('../models/news');

router.all('*', (req, res, next) => {
  if(!req.session.admin) {
    res.redirect('login')
    return;
  }

  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {

  res.render('admin/index', { title: 'Admin' });
});

router.get('/news/add', (req, res) => {
  res.render('admin/news-form', { title: 'Form' });
})

module.exports = router;
