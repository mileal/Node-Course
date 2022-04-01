const {  writeFileSync } = require('fs')

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/bigFile.txt', `hello ${i}\n`, {flag : 'a'})
}