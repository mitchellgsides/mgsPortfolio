import React, { useState } from 'react'
import { XMLToJsonParser } from '../../utils/xmlParser'
import styled from 'styled-components'
import { NivoLine } from '../Chart/NivoChart'
import { powerCurveTest } from '../../utils/powerCurveTest'

const GraphContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function FunctionFileAnalysis (props) {
  const [file, uploadFile] = useState(null)
  const [powerCurve, setPowerCurve] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleXML = (file) => {
    XMLToJsonParser(file, setPowerCurve, setLoading)
  }

  const tempStyles = {
    padding: '0.5rem',
    listStyleType: 'none'
  }

  const data = powerCurve
    ? [{
      id: 'Power Duration Curve',
      color: 'red',
      data: powerCurve.filter(i => i.power > 0).map(i => Object.assign({}, { x: i.duration, y: i.power }))
    }]
    : powerCurveTest

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div>
          Work in progress! Best viewed on a larger screen. Choose a Garmin or compatible .tcx file to view brief power curve.
        </div>
        <br />
        <em>Features in development:</em>
        <div style={tempStyles}>Max Power at Specified Cadence for Specified Duration</div>
        <div style={tempStyles}>Add Average Power of Specified Duration to Curve</div>
      </div>
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
      {loading ? <div>loading...</div> : null}
      <button style={tempStyles} onClick={() => handleXML(file)}>Analyze</button>
      <h2 style={{ margin: '0.5rem' }}>Power Curve (Demo)</h2>
      <GraphContainer style={{ height: '500px', backgroundColor: 'whitesmoke' }}>
        {data && <NivoLine data={data} />}
      </GraphContainer>
    </div>
  )
}
