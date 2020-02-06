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
  const [file, uploadFile] = useState(null)
  const [powerCurve, setPowerCurve] = useState([])
  const [loading, setLoading] = useState(false)

  const handleXML = (file) => {
    XMLToJsonParser(file, setPowerCurve, setLoading)
  }

  const tempStyles = {
    padding: '0.5rem',
    listStyleType: 'none'
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      Work in progress. Choose a Garmin or compatible .tcx file to view brief power curve.
      </div>
      <ul style={tempStyles}>
        <em>Features in development:</em>
        <li style={tempStyles}>Max Power at Specified Cadence for Specified Duration</li>
        <li style={tempStyles}>Add Average Power of Specified Duration to Curve</li>
      </ul>
      <label style={tempStyles}>
            Upload file:
        <input
          style={tempStyles}
          type='file'
          onChange={(e) => uploadFile(
            e.target.files[0]
          )}
        />
      </label>
      <button style={tempStyles} onClick={() => handleXML(file)}>Upload</button>
      <div style={{ display: 'grid', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>{loading ? <div>Loading...</div> : powerCurve && powerCurve.map((i, index) => <div style={tempStyles} key={`${i}-${index}`}>{i.duration}s: {i.power}w</div>)}</div>
      <GraphContainer>
        <Chart2 locations={powerCurve} />
      </GraphContainer>
    </div>
  )
}
