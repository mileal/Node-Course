const http = require('http')
const fs = require('fs')

 http
 .createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8');
    fileStream.on('open', () =>{
fileStream.pipe(res)

    })
    fileStream.on('error', (err) =>{
        res.end(err)
    })
})


.listen(8080)