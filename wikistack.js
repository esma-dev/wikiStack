const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const models = require('./models');
const routes = require('./routes/index');


// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(express.static('public'));

//because the subroutes not working, have to require it each separately into the app.js file
app.get('/', (req, res) => {
    res.render('index');
})
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));


// models.User.sync({})
// .then(function () {
//     return models.Page.sync({})
// })
// .then(function () {
//     // make sure to replace the name below with your express app
//     app.listen(3000, function () {
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error);


// make sure you are exporting your db from your models file
models.db.sync({force:true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);
