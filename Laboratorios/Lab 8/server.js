const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let archivo = '';

    if (req.url === '/') {
        archivo = 'index.html'
        res.writeHead(200, {'content-type': 'text/html'});
    } else if (req.url === '/styles.css') {
        archivo = 'styles.css'
        res.writeHead(200, {'content-type': 'text/css'});
    } else if (req.url === '/script.js') {
        archivo = 'script.js'
        res.writeHead(200, {'content-type': 'text/javascript'});
    } else {
        res.writeHead(404, {'content-Type': 'text/plain'});
        res.end('Missing File');
        return;
    }
    
    fs.readFile(archivo, (err, data) => {
        if (err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('Error');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})