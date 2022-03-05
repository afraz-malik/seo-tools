import axios from 'axios'

import React, { Component } from 'react'
import { Spinner } from '../../components/Spinner/Spinner'

class VideoCompressPage extends Component {
  state = {
    selectedFile: null,
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  // On file upload (click the upload button)
  onFileUpload = () => {
    const formData = new FormData()

    // Update the formData object
    formData.append(
      'video',
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    // Request made to the backend api
    // Send formData object
    this.setState({ isLoading: true })
    axios
      .post('http://localhost:3001/api/compress-video', formData)
      .then((response) => {
        this.setState({ isLoading: false })

        window.open(response.data, '_blank')
      })
  }

  // File content to be displayed after
  // file upload is complete
  // fileData = () => {
  //   if (this.state.selectedFile) {
  //     return (
  //       <div>
  //         <h2>File Details:</h2>

  //         <p>File Name: {this.state.selectedFile.name}</p>

  //         <p>File Type: {this.state.selectedFile.type}</p>

  //         <p>
  //           Last Modified:{' '}
  //           {this.state.selectedFile.lastModifiedDate.toDateString()}
  //         </p>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <br />
  //         <h4>Choose before Pressing the Upload button</h4>
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
      <div className="ma4" style={{ marginTop: '100px' }}>
        <h1>{'This tool will get the screenshot of the entered website  '}</h1>
        <div className="center">
          <div className="form pa4 br3 shadow-5 center">
            {true ? (
              <>
                <input
                  placeholder="Enter URL"
                  className="f4 pa2 w-70 center"
                  type="file"
                  onChange={this.onFileChange}
                />
                <button
                  className="w-30 grow f4 ph3 pv2 dib white bg-light-purple"
                  onClick={this.onFileUpload}
                >
                  Convert
                </button>
              </>
            ) : (
              <button
                className="w-100 grow f4 ph3 pv2 dib white bg-light-purple"
                // onClick={handleSubmit}
              >
                File Converted, Download it now
              </button>
            )}
          </div>
          <br />
          <br />
          <br />
          {this.state.selectedFile ? (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">File Name</th>
                  <th scope="col">File Type</th>
                  <th scope="col">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{1}</th>
                  <td>{this.state.selectedFile.name}</td>
                  <td>{this.state.selectedFile.type}</td>
                  <td>
                    {this.state.selectedFile.lastModifiedDate.toDateString()}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
        {this.state.isLoading ? <Spinner /> : null}
      </div>
    )
  }
}

export default VideoCompressPage
