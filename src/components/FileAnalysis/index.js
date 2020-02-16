import React, { useState } from 'react'
import { XMLToJsonParser } from '../../utils/xmlParser'
import styled from 'styled-components'
import { NivoLine } from '../Chart/NivoChart'
import { powerCurveTest } from '../../utils/powerCurveTest'
import Description from '../Description/index'
import { PageTitle } from '../../Styles'

const GraphContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FileAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 5rem;
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
    <FileAnalysisContainer>
      <Description description='Work in progress! Best viewed on a larger screen. Choose a Garmin or compatible .tcx file to view power curve.' />
      <ul>
      Features in development:
        <li>
          Max Power at Specified Cadence for Specified Duration
        </li>
        <li>
          Add Average Power of Specified Duration to Curve
        </li>
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
      {loading ? <div>loading...</div> : null}
      <button style={tempStyles} onClick={() => handleXML(file)}>Analyze</button>
      <PageTitle style={{ margin: '0.5rem' }}>Power Curve (Demo)</PageTitle>
      <GraphContainer style={{ flex: 1, height: '500px', minWidth: '80vw', backgroundColor: 'whitesmoke' }}>
        {data && <NivoLine data={data} />}
      </GraphContainer>
    </FileAnalysisContainer>
  )
}
