import React, { useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner/Spinner'
import './shot.css'
const ShotScreen = () => {
  const [domain, setdomain] = useState('https://www.')
  const [isLoading, setisLoading] = useState(false)
  const [src, setsrc] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if (
    //   !domain.match(
    //     'https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)'
    //   )
    // ) {
    //   alert('Not matched')
    //   return
    // }
    setisLoading(true)
    fetch(`http://localhost:3001/api/webshot?domain=${domain}`)
      .then(function (response) {
        return response.blob()
      })
      .then(function (blob) {
        var url = window.URL.createObjectURL(blob)
        // var a = document.createElement('a')
        // var a = document.getElementById('image')
        setsrc(url)
        // a.src = url
        // a.download = 'screenshot.png'
        // document.body.appendChild(a) // we need to append the element to the dom -> otherwise it will not work in firefox
        // a.click()
        // a.remove()
        setdomain('https://www.')
        setisLoading(false)

        //afterwards we remove the element again
      })
  }
  function download() {
    var a = document.createElement('a')
    a.href = src
    a.download = 'screenshot.png'
    console.log(a)
    document.body.appendChild(a) // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click()
    a.remove()
  }
  return (
    <div className="ma4" style={{ marginTop: '100px' }}>
      <h1>{'This tool will get the screenshot of the entered website  '}</h1>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input
            type="text"
            placeholder="Enter URL"
            className="f4 pa2 w-70 center"
            value={domain}
            onChange={(e) => {
              setsrc(null)
              setdomain(e.target.value)
            }}
          />
          {src ? (
            <button
              className="w-30 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={() => download()}
            >
              Download
            </button>
          ) : (
            <button
              className="w-30 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={handleSubmit}
            >
              Get_Image
            </button>
          )}
        </div>
        {src ? (
          <div className="shotimagecontainer">
            <img id="image" className="shotimage" src={src} alt="" />
          </div>
        ) : null}
      </div>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export default ShotScreen
