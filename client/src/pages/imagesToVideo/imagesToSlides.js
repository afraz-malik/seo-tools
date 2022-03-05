/**
 * Collage maker with filestack
 */

import React, { useState } from 'react'
import * as filestack from 'filestack-js'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './slide.css'

const options = {
  accept: 'image/*',
  maxSize: 1024 * 1024 * 10,
  minFiles: 2,
  maxFiles: 6,
}
const client = filestack.init('Aw5IOnt1VTXOxQGUGjgAez')

const ImagesToSlider = () => {
  const picFile = () => {
    client.picker({ ...options, onUploadDone }).open()
  }

  const [collageUrl, setCollageUrl] = useState('')
  const [slideImages, setSlideImages] = useState([])

  const onUploadDone = async ({ filesUploaded }) => {
    try {
      console.log(filesUploaded)
      filesUploaded.forEach((element) => {
        setSlideImages((oldArray) => [
          ...oldArray,
          {
            url: element.url,
            caption: '.',
          },
        ])
        console.log(slideImages)
      })

      console.log(slideImages)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="slide-container">
      {/* <form>
        <h1>Slides Maker</h1>
        <button type="button" onClick={picFile}>
          Pick Images
        </button>
        <img src={collageUrl} alt="" />
      </form> */}
      <div className="ma4" style={{ marginTop: '100px' }}>
        <h1>{'This tool will get the screenshot of the entered website  '}</h1>
        <div className="center">
          <div className="form pa4 br3 shadow-5 center">
            <button
              className="w-100 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={picFile}
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <Slideshow slideImages={slideImages}></Slideshow> */}
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default ImagesToSlider
