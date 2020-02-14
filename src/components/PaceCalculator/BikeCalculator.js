import React from 'react'
import NumberInput from '../NumberInput'
import {
  StyledNumberInput,
  SportItem,
  TimeInputContainer,
  PaceInputContainer,
  DistanceContainer,
  Label,
  Title,
  UnitLabel
} from '../Styles'

export default function BikeCalculator (props) {
  const { bikeDistance, bikePace, bikeTime, handlePaceChange, handleTimeChange, metric } = props

  const handlePace = (e) => {
    const distance = bikeDistance
    const pace = e.target.value
    const time = distance / (pace / 3600)
    const sport = e.target.name
    handleTimeChange(sport, time, pace)
  }

  const handleTime = (e, seconds) => {
    const distance = bikeDistance
    const sport = e.target.name
    const time = seconds
    const pace = 1 / ((seconds / 3600) / distance)
    handlePaceChange(sport, time, pace)
  }

  return (
    <SportItem sport='bike'>
      <Title>Bike</Title>
      <DistanceContainer>
        <Label>Distance:</Label>
        <div>{bikeDistance} {metric ? 'km' : 'mi'}</div>
      </DistanceContainer>

      <PaceInputContainer>
        <Label>Bike Pace:</Label>
        <StyledNumberInput
          min={0.00}
          max={100}
          step='.01'
          name='bike'
          type='number'
          onChange={(e) => handlePace(e)}
          value={parseFloat(bikePace)}
        />
        <UnitLabel>
          {metric ? 'kph' : 'mph'}
        </UnitLabel>
      </PaceInputContainer>

      <TimeInputContainer type='time'>
        <NumberInput
          name='bike'
          onChange={handleTime}
          value={bikeTime}
          label='Bike Time'
          durationType='time'
        />
      </TimeInputContainer>
    </SportItem>
  )
}
