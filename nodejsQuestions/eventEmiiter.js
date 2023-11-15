const eventEmitter = require('events')

const event = new eventEmitter()

// 2nd method
event.addListener('myevent', (data) => {
    console.log("this is dataw", data)
})
// 
// 1St method
event.on('myevent', (data) => {
    console.log("this is data", data)
})

event.emit('myevent', { name: 'sunil', age: 'kumar' })
