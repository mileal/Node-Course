const EventEmiter = require('events')

const customEvent = new EventEmiter

customEvent.on('response', () => {
    console.log(`data recieved`);
})

customEvent.emit('response')