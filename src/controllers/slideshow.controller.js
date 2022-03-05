var videoshow = require('videoshow')

const asyncHandler = require('express-async-handler')
const path = require('path')

const slideShow = asyncHandler(async (req, res) => {
  try {
    var images = [
      path.join(__dirname, '2.png'),
      path.join(__dirname, '3.png'),
      path.join(__dirname, '4.png'),
    ]

    var videoOptions = {
      fps: 25,
      loop: 5, // seconds
      transition: true,
      transitionDuration: 1, // seconds
      videoBitrate: 1024,
      videoCodec: 'libx264',
      size: '640x?',
      audioBitrate: '128k',
      audioChannels: 2,
      format: 'mp4',
      pixelFormat: 'yuv420p',
    }

    videoshow(images, videoOptions)
      //   .audio('song.mp3')
      .save(path.join(__dirname, '4vide.mp4'))
      .on('start', function (command) {
        console.log('ffmpeg process started:', command)
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Video created in:', output)
      })
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = { slideShow }
