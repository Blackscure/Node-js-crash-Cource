import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.write('Hello World!');
    // res.end('Hello World!');
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    try {
        // Check if Get request
        if (req.method == 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Hello Homepage</h1>');
            } else if (req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>About</h1>');
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>Not Found page</h1>');
            }
        } else {
            throw new('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('<h1>Server Error</h1>');
    }

   
    console.log(req.url);
    console.log(req.method);

    // res.writeHead(500, { 'Content-Type': 'application/json'})
    // res.end(JSON.stringify({ message: 'Server Error'}));
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});