const http = require('http')
const app = require('./app')
const { mongoConnect } = require('./services/mongo.js')

const server = http.createServer(app)
async function startServer() {
  // await mongoConnect()
  server.listen(3001, () =>
    console.log('Sever is running on port 5000'.underline.blue)
  )
}
startServer()
