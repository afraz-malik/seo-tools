const printscreen = require('printscreen')
const expressAsyncHandler = require('express-async-handler')
const { exec } = require('child_process')
const path = require('path')
;``
const webShotGenerator = expressAsyncHandler(async (req, res) => {
  exec(`phantomjs github.js ${req.query.domain}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    res.sendfile(path.join(__dirname, '../../', 'github.png'))
  })
  // printscreen(
  //   `${req.query.domain}`,
  //   {
  //     /*
  //      * Optional: Define a suitable viewport size
  //      */
  //     viewport: {
  //       width: 1650,
  //       height: 1060,
  //     },

  //     /*
  //      * Optional: Define the time between the page being initiated and the printscreen taken
  //      */
  //     timeout: 1000,

  //     /*
  //      * Optional: Define the format of the printscreen taken (pdf|png|jpeg)
  //      */
  //     format: 'png',

  //     /*
  //      * Optional: Define the quality of the printscreen taken (0-100)
  //      */
  //     quality: 75,

  //     /*
  //      * Optional: Define a capture function which is injected into the webview before the printscreen is made
  //      * The returned output is available in the callback (see below)
  //      */
  //     capture: function () {
  //       var divs = document.querySelectorAll('div').length

  //       return {
  //         divs: divs,
  //       }
  //     },
  //   },
  //   (err, data) => {
  //     /*
  //      * Optional: Callback definition
  //      * data is the result returned from the capture method
  //      */
  //     console.log(`${err}`)
  //     require('fs').stat(data.file, (err, stats) => {
  //       console.log(err, stats)
  //       if (err) {
  //         res.json(err)
  //       } else {
  //         res.sendFile(data.file)
  //       }
  //       //   console.log(`
  //       //   - There are ${data.output.divs} divs in this page.
  //       //   - Your screenshot is available at ${data.file} and is ${stats.size} bytes.
  //       // `)
  //     })
  //   }
  // )
})
module.exports = { webShotGenerator }
