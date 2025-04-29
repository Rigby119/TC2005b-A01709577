const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const session = require("express-session");
app.use(session({
    secret: "String Aleatorio que debe ser larguisimo, no como este",
    resave: false, // La sesión no se guardará en cada petición, sino solo si algo cambia
    saveUninitialized: false, // Asegura que no se guarde una sesión para cada petición que no lo necesite
}));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Set-Cookie','mi_cookie=123 HttpOnly');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_cookie', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(req.cookies.mi_cookie);
    res.end();
});

app.get('/test_session', (req, res) => {
    req.session.mi_variable = "valor";
    res.setHeader('Content-Type', 'text/plain');
    res.send(req.session.mi_variable);
    res.end();
});

app.get('/test_session_variable', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(req.session.mi_variable);
    res.end();
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
});