const http = require('http')

const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.end('Welcome to home page')
}

if (req.url === '/about'){
    res.end('Welcome to about')
}

res.end(`
    <h1> Ooops! </h1>
`)

})

server.listen(8080)