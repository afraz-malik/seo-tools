const asyncHandler = require('express-async-handler')
var convert = require('media-converter')
const path = require('path')
const Fs = require('@supercharge/filesystem')
var ffmpeg = require('ffmpeg')
const client = require('filestack-js').init('Aw5IOnt1VTXOxQGUGjgAez')

const videoCompress = asyncHandler(async (req, res) => {
  try {
    var process = ffmpeg(req.file.path)
    console.log('here')
    process.then(
      function (video) {
        video.save(
          'src/client_data/compress/' + req.file.filename,
          function (error, file) {
            if (!error) {
              console.log(
                path.join(
                  __dirname.replace('controllers', 'client_data/compress'),
                  req.file.filename
                )
              )
              let file = client.upload(
                path.join(
                  __dirname.replace('controllers', 'client_data/compress'),
                  req.file.filename
                )
              )
              file.then(
                (data) => {
                  console.log(data)
                  res.send(data.url)
                },
                (error) => {
                  res.json(error)
                }
              )
              // res.status(200).sendFile(path.join(__dirname.replace('controllers','client_data/compress'),req.file.filename))
            } else {
              res.json(error)
            }
          }
        )
      },
      function (err) {
        console.log('Error: ' + err)
      }
    )
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = { videoCompress }
