const asyncHandler = require('express-async-handler')
// const createCollage = require('photo-collage')

const collageMaker = asyncHandler(async (req, res) => {
  try {
    // const options = {
    //   sources: [
    //     'https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=',
    //     'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    //     'http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg',
    //     'https://media.istockphoto.com/photos/green-lawn-at-hill-at-sunrise-picture-id1294990080?b=1&k=20&m=1294990080&s=170667a&w=0&h=-VYbhmVtOU1u6wx03JJwhiQjTc3N4IhddyvQliHs5sM=',
    //   ],
    //   width: 3, // number of images per row
    //   height: 2, // number of images per column
    //   imageWidth: 350, // width of each image
    //   imageHeight: 250, // height of each image
    //   // backgroundColor: "#cccccc", // optional, defaults to #eeeeee.
    //   spacing: 2, // optional: pixels between each image
    //   lines: [
    //     {
    //       font: '',
    //       color: '',
    //       text: 'Sometimes we want to find out when a single one time event has',
    //     },
    //     {
    //       font: '',
    //       color: '',
    //       text: 'Sometimes we want to find out when a single one time event has',
    //     },
    //     {
    //       font: '',
    //       color: '',
    //       text: 'Sometimes we want to find out when a single one time event has',
    //     },
    //     {
    //       font: '',
    //       color: '',
    //       text: 'Sometimes we want to find out when a single one time event has',
    //     },
    //     {
    //       font: '',
    //       color: '',
    //       text: 'Sometimes we want to find out when a single one time event has',
    //     },
    //   ],
    //   //text: "Sometimes we want to find out when a single one time event has finished. For example - a stream is done. For this we can use new Promise. Note that this option should be considered only if automatic conversion isn't possible.Note that promises model a single value through time, they only resolve once - so while they're a good fit for a single event, they are not recommended for multiple event APIs."
    //   //textStyle: {color: "#fff", fontSize: 20, font: "Arial", height: 300}
    //   // we can use either lines or text (text will be warped)
    // }
    // createCollage(options).then((canvas) => {
    //   const src = canvas.jpegStream()
    //   const dest = fs.createWriteStream('myFile')
    //   res.sendFile(src.pipe(dest))
    // })
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = { collageMaker }
