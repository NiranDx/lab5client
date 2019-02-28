var express = require('express'),
   app = express(),
   bodyParser = require('body-parser');
var session = require('express-session');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 10000 },
   resave : false, saveUninitialized: false }))

app.use(function(req, res, next) {
    var sess = req.session
    next();
 })
 

app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/admin', urlencodedParser, function(req, res){
    req.session.user = req.body.user
    req.session.pass = req.body.pass
    if( req.session.user=='Niran' && req.session.pass=='1234'){
        res.render('admin', {admins: ['Hello'] , foo:  req.session.user, bt: 'Logout' })
        
    }
    else {
        res.render('admin', {admins: ['Please login first'] , foo:'', bt: 'Login'})
    }
 })
 app.get('/admin', urlencodedParser, function(req, res){ 
    if( req.session.user=='Niran' && req.session.pass=='1234'){
        res.render('admin', {admins: ['Hello'] , foo:  req.session.user, bt: 'Logout' })
        
    }
    else {
        res.render('admin', {admins: ['Please login first'] , foo:'', bt: 'Login'})
    }
 })

 app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/form.html');
        }
    });
 });
 

app.listen(8000);