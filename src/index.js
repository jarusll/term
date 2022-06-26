const restana = require('restana')

const service = restana()
service.get('/hi', (_, res) => res.send('Hello World!'))

service.start(3000)
