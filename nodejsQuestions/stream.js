const fs = require('node:fs')

const stream = fs.createReadStream('data.txt', 'utf-8')

stream.on('data', (chuck) => console.log(chuck))
stream.on('end', () => {
    console.log('ended')
})