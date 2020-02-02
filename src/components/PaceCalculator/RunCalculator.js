import React from 'react'
import NumberInput from '../NumberInput'
import {
  SportItem,
  TimeInputContainer,
  PaceInputContainer,
  DistanceContainer,
  Label,
  Title,
  UnitLabel
} from '../Styles'

export default function RunCalculator (props) {
  const { runDistance, runPace, runTime, handlePaceChange, handleTimeChange, metric } = props

  const handlePace = (e, seconds) => {
    console.log(seconds)
    const distance = runDistance
    const pace = seconds // <-- currently in seconds, which is fine.
    const time = distance * seconds // <--
    const sport = e.target.name
    console.log(`handlePace, Time: ${time}, Pace: ${pace}`)

    handleTimeChange(sport, time, pace)
  }

  const handleTime = (e, seconds) => {
    const distance = runDistance
    const pace = seconds / (distance)
    const sport = e.target.name
    const time = seconds
    console.log(`handleTime, Time: ${time}, Pace: ${pace}`)
    handlePaceChange(sport, time, pace)
  }

  return (
    <SportItem sport='run'>
      <Title>Run</Title>
      <DistanceContainer>
        <Label>Distance:</Label>
        <div>{runDistance} {metric ? 'km' : 'mi'}</div>
      </DistanceContainer>

      <PaceInputContainer>
        <NumberInput
          onChange={handlePace}
          value={runPace}
          label='Run Pace'
          durationType='pace'
          name='run'
        />
        <UnitLabel>
          {metric ? ' / km' : ' / mi'}
        </UnitLabel>
      </PaceInputContainer>

      <TimeInputContainer type='time'>
        <NumberInput
          onChange={handleTime}
          value={runTime}
          label='Run Time'
          durationType='time'
          name='run'
        />
      </TimeInputContainer>
    </SportItem>
  )
}
