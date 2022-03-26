const os = require('os')

console.log(os.uptime());

const currentUser = {
    name = os.type(),
    release = os.release(),
    totalMem = os.totalmem(),
    freeMem = os.freeMem()
}

console.log(currentUser);