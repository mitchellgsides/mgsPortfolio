import React from 'react'
import { TimeInputContainer, Title, SportItem } from '../Styles'
import NumberInput from '../NumberInput'

export default function Transition (props) {
  const { label, time, title, handleTime, name } = props

  return (
    <SportItem sport='transition'>
      <Title style={{ textAlign: 'center' }}>{title}</Title>
      <TimeInputContainer type='transition'>
        <NumberInput
          onChange={handleTime}
          value={time}
          label={label}
          durationType='pace'
          type='transition'
          name={name}
        />
      </TimeInputContainer>
    </SportItem>
  )
}
