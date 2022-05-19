const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');  
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local').Strategy;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({encoded:false}));
app.use(cookieParser('key'));

const register = require('./routes/register');

app.use(session({
    secret: 'key',
    resave: true,
    saveUnitialized: true
}));

passport.use(new passportLocal(function(username, password, done){
    if(username == "admin@gmail.com" && password =="admin")
    return done(null,{id: 1, name: "admin"});
    done(null, false );
}));

//saber que usuario es :
//deserializacion
passport.serializeUser(function(user, done){
     done(null, user.id);
});

passport.deserializeUser(function(id, done){
     done(null, {id:  id, name: "admin"});
})

app.get('/', (req, res) => {

    res.send('hola');

});


app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.post('/login',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})); 

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());

app.use('/registerDemo', register); 

app.use(express.static(path.join( __dirname, 'public')));

//start the server
module.exports = app;