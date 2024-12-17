import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // res.write('Hello World!');
    // res.end('Hello World!');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;

    res.end('<h1>Hello World!</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});