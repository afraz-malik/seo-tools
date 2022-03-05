const express = require('express')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')
const { domainChecker } = require('./controllers/domain.controller')
const dotenv = require('dotenv')
var colors = require('colors')

const multer  = require('multer')
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'src/client_data/uploads')
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + '_'+file.originalname)
	}
  })
  
var upload = multer({ storage: storage });

dotenv.config()
var cors = require('cors')

const { webShotGenerator } = require('./controllers/webshot.controller')
const { collageMaker } = require('./controllers/collageMaker.controller')
const { videoCompress } = require('./controllers/videoCompress.controller')
const { slideShow } = require('./controllers/slideshow.controller')
const app = express()

app.use(cors())
// app.use(express.json())

app.get('/', (req, res) => res.send('Server is running'))

//Each tool api will have seperate controller
app.get('/api/domain-age-checker', domainChecker)
app.get('/api/webshot', webShotGenerator)
app.get('/api/collage-maker', collageMaker)
app.post('/api/compress-video', upload.single('video'), videoCompress)
app.get('/api/slide-show', slideShow)

app.use(notFound)
app.use(errorHandler)

// app.listen(5001,function(error) {
// 	if(error) throw error
// 		console.log("Server created Successfully on PORT 5001")
// })
module.exports = app
