import React from 'react'
import {
  StyledNumberInput,
  InputContainer,
  Label,
  UnitLabel
} from './Styles'

export default function NumberInput (props) {
  const { onChange, name, label, value, durationType } = props

  let totalSeconds = Math.max(0, value)
  const timeHours = Math.floor(totalSeconds / 3600) || 0
  totalSeconds %= 3600
  const timeMinutes = Math.floor(totalSeconds / 60) || 0
  totalSeconds %= 60
  const timeSeconds = totalSeconds || 0

  const calculateSeconds = (units, targetSeconds) => {
    if (units === 'hours') {
      return (timeMinutes * 60) + timeSeconds + (targetSeconds * 60 * 60)
    } else if (units === 'minutes') {
      return (timeHours * 60 * 60) + timeSeconds + (targetSeconds * 60)
    } else {
      return (timeMinutes * 60) + (timeHours * 60 * 60) + parseInt(targetSeconds)
    }
  }

  return (
    <>
      <Label>{label}:</Label>
      {durationType === 'time' || durationType !== 'pace'
        ? (
          <InputContainer>
            <StyledNumberInput
              min={0}
              max={24}
              name={name}
              type='number'
              onChange={(e) => onChange(e, calculateSeconds('hours', e.target.value))}
              value={timeHours}
            />
            <UnitLabel>
              {' h'}
            </UnitLabel>
          </InputContainer>)
        : null}
      <InputContainer>
        <StyledNumberInput
          name={name}
          min={0}
          max={60}
          type='number'
          onChange={(e) => onChange(e, calculateSeconds('minutes', e.target.value))}
          value={timeMinutes}
        />
        <UnitLabel>
          {' m'}
        </UnitLabel>
      </InputContainer>

      <InputContainer>
        <StyledNumberInput
          name={name}
          min={0.0}
          max={60}
          type='number'
          onChange={(e) => onChange(e, calculateSeconds('seconds', e.target.value))}
          value={timeSeconds}
        />
        <UnitLabel>
          {' s '}
        </UnitLabel>
      </InputContainer>
    </>
  )
}
