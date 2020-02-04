import React, { useState } from 'react'
import { XMLToJsonParser } from '../../utils/xmlParser'
import styled from 'styled-components'
import Chart2 from '../Chart/Chart2'

const GraphContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function FunctionFileAnalysis (props) {
//   const [output, updateOutput] = useState('')
  const [file, uploadFile] = useState(null)
  const [powerCurve, setPowerCurve] = useState([])
  const [loading, setLoading] = useState(false)

  const handleXML = (file) => {
    XMLToJsonParser(file, setPowerCurve, setLoading)
  }

  return (
    <div>
      <label>
            Upload file:
        <input
          type='file'
          onChange={(e) => uploadFile(
            e.target.files[0]
          )}
        />
      </label>
      <button onClick={() => handleXML(file)}>Upload</button>
      <div>{loading ? <div>Loading...</div> : powerCurve && powerCurve.map((i, index) => <div key={`${i}-${index}`}>{i.duration}: {i.power}</div>)}</div>
      <GraphContainer>
        <Chart2 locations={powerCurve} />
      </GraphContainer>
    </div>
  )
}
