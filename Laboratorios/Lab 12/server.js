const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const mainModule = require('./routes/mainModule')
const formsModule = require('./routes/formsModule')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainModule);
app.use(formsModule);

app.use((req,res) => {
    res.status(404).send('<h1><b>404</b> - Page not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});