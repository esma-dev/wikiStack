const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;

router.get('/', (req, res, next) => {
    res.redirect('/');
});

router.post('/', (req, res, next) => {
    // console.log(req.body);
    // res.send(req.body);
    // console.log(req.body);

    let page = Page.build({
      title: req.body.title,
      urlTitle: Page.beforeValidate(this.title),
      content: req.body.content
    });

    if(page){
      page.save()
      .then(res.redirect('/'))
      .catch('error.html');
    }
});

router.get('/add', (req, res, next) => {
    res.render('addpage.html');
});


module.exports = router;
