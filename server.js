//Express Set
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));



app.get('/', function(req, res){
    res.render('main')
})
//Server listen
//DEPLOY
app.listen(process.env.PORT || 3000, function() {

});

module.exports = app;
