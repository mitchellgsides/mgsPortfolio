import React from 'react'
import {
  SportItem,
  TimeInputContainer,
  PaceInputContainer,
  DistanceContainer,
  Label,
  Title,
  UnitLabel
} from '../Styles'
import NumberInput from '../NumberInput'

export default function SwimCalculator (props) {
  const { swimDistance, swimPace, swimTime, handlePaceChange, handleTimeChange, metric } = props

  const handlePace = (e, seconds) => {
    console.log(seconds)
    const distance = swimDistance
    const time = distance / 100 * seconds
    const pace = seconds
    const sport = e.target.name
    handleTimeChange(sport, time, pace)
  }

  const handleTime = (e, seconds) => {
    const distance = swimDistance
    const sport = e.target.name
    const pace = seconds / (distance / 100)
    const time = seconds
    handlePaceChange(sport, time, pace)
  }

  return (
    <SportItem sport='swim'>
      <Title>Swim</Title>
      <DistanceContainer>
        <Label>Distance:</Label>
        <div>{swimDistance} {metric ? 'm' : 'yds'}</div>
      </DistanceContainer>

      <PaceInputContainer>
        <NumberInput
          name='swim'
          onChange={handlePace}
          value={swimPace}
          label='Swim Pace'
          durationType='pace'
        />
        <UnitLabel>
          {metric ? ' / 100m' : '/ 100yd'}
        </UnitLabel>
      </PaceInputContainer>

      <TimeInputContainer type='time'>
        <NumberInput
          name='swim'
          onChange={handleTime}
          value={swimTime}
          label='Swim Time'
          durationType='time'
        />
      </TimeInputContainer>
    </SportItem>
  )
}
