import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // res.write('Hello World!');
    res.end('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});