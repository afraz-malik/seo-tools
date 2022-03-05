/**
 * Collage maker with filestack
 */

import React, { useState } from 'react'
import * as filestack from 'filestack-js'
import { Spinner } from '../../components/Spinner/Spinner'

const options = {
  accept: 'image/*',
  maxSize: 1024 * 1024 * 10,
  minFiles: 2,
  maxFiles: 6,
}
const client = filestack.init('Aw5IOnt1VTXOxQGUGjgAez')

const CollageMaker = () => {
  const picFile = () => {
    client.picker({ ...options, onUploadDone }).open()
  }

  const [collageUrl, setCollageUrl] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const onUploadDone = async ({ filesUploaded }) => {
    try {
      const first = filesUploaded.shift()
      const transformation = filesUploaded.reduce((acc, file, index, files) => {
        return index < files.length - 1
          ? `${acc},${file.handle}`
          : `${acc}],w:800,h:600,/${file.handle}`
      }, `/collage=files:[${first.handle}`)

      setCollageUrl('https://process.filestackapi.com/' + transformation)
    } catch (e) {
      console.log(e)
    }
  }
  function download() {
    var a = document.createElement('a')
    a.href = collageUrl
    a.download = 'screenshot.png'
    console.log(a)
    document.body.appendChild(a) // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click()
    a.remove()
  }
  return (
    // <div>
    //   <form>
    //     <h1>Collage Maker</h1>
    //     <button type="button" onClick={picFile}>
    //       Pick Images
    //     </button>
    //     <img src={collageUrl} alt="" />
    //   </form>
    // </div>
    <div className="ma4" style={{ marginTop: '100px' }}>
      <h1>{'This tool will get the screenshot of the entered website  '}</h1>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          {collageUrl ? (
            <button
              className="w-100 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={() => download()}
            >
              Download
            </button>
          ) : (
            <button
              className="w-100 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={picFile}
            >
              Try Now
            </button>
          )}
        </div>
        {collageUrl ? (
          <div className="shotimagecontainer">
            <img src={collageUrl} alt="" />
          </div>
        ) : null}
      </div>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export default CollageMaker
