var express = require('express'),
   app = express(),
   bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/admin', urlencodedParser, function(req, res){
    if(req.body.user=='Niran' && req.body.pass=='1234'){
        res.render('admin', {admins: ['Hello'] , foo: req.body.user, bt: 'Logout' })
        
    }
    else {
        res.render('admin', {admins: ['Please login first'] , foo:'', bt: 'Login'})
    }
 })

app.listen(8000);