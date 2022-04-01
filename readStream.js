const {createReadStream} = require('fs')

const stream = createReadStream('./content/bigFile.txt', {highWaterMark :90000});

stream.on('data', (result) => {
    console.log(result);
})
