import React, { useState } from 'react'
import XMLParser from '../../utils/xmlParser'

export default function FunctionFileAnalysis (props) {
//   const [output, updateOutput] = useState('')
  const [file, uploadFile] = useState(null)
  const [xmlTrackpoints, setTrackpoints] = useState(null)

  const handleXML = (file) => {
    XMLParser(file, setTrackpoints)
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
      <button onClick={() => handleXML(file)}>Analyze</button>
      <h1>{xmlTrackpoints ? [0].textContent : null}</h1>
    </div>
  )
}
