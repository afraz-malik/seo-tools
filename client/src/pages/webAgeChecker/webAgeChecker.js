import React, { useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner/Spinner'

const WebAgeChecker = () => {
  const [domain, setdomain] = useState('https://www.')
  const [result, setResult] = useState()
  const [isLoading, setisLoading] = useState(false)
  const calculateAge = (response) => {
    const dob = new Date(response.creationDate)
    var month_diff = Date.now() - dob.getTime()
    var age_dt = new Date(month_diff)
    var year = age_dt.getUTCFullYear()
    var age = Math.abs(year - 1970)

    setResult({
      sr: 1,
      ...response,
      age,
    })
    setisLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    var tmp = document.createElement('a')
    tmp.href = domain
    try {
      setisLoading(true)
      fetch(
        `http://localhost:3001/api/domain-age-checker?domain=${tmp.hostname.substring(
          4
        )}`
      )
        .then((res) => res.json())
        .then((res) => calculateAge(res))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {isLoading ? <Spinner /> : null}
      <div className="ma4" style={{ marginTop: '100px' }}>
        <h1>{'This tool will get created  date of the entered website  '}</h1>
        <div className="center">
          <div className="form pa4 br3 shadow-5 center">
            <input
              type="text"
              placeholder="Enter URL"
              value={domain}
              className="f4 pa2 w-70 center"
              onChange={(e) => setdomain(e.target.value)}
            />
            <button
              className="w-30 grow f4 ph3 pv2 dib white bg-light-purple"
              onClick={handleSubmit}
            >
              Check
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {result ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Domain</th>
              <th scope="col">Age</th>
              <th scope="col">Domain Created on</th>
              <th scope="col">Last Updated this info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{result.sr}</th>
              <td>{result.domainName}</td>
              <td>{result.age}</td>
              <td>{result.creationDate}</td>
              <td>{result.lastUpdateOfWhoisDatabase}</td>
            </tr>
          </tbody>
        </table>
      ) : null}
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  )
}

export default WebAgeChecker
