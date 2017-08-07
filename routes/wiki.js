const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('/');
});

router.post('/', (req, res, next) => {
    res.send(req.body);
})

router.get('/add', (req, res, next) => {
    res.render('addpage.html');
})


module.exports = router;