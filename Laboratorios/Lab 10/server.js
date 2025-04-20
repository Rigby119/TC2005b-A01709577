const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/one', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/two', (req, res) => {
    res.send(`
        <h1>Forms</h1>
        <form action="/send" method="POST">
            <label>Name: <input type="text" name="name" required></label><br>
            <label>Message: <input type="text" name="message" required></label><br>
            <button type="submit">Send</button>
        </form>
      `);
});

app.post('/send', (req,res) => {
    const {name, message} = req.body;
    const line = `Name: ${name} | Message: ${message}\n`;
    fs.appendFile('data.txt', line, (err) => {
        if(err) {
            return res.status(500).send('Error')
        }
        res.send('<h2>Data received</h2>')
    });
});

app.use((req,res) => {
    res.status(404).send('<h1>404 - Page not Found</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})