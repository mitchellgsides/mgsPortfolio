import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
const IconContainer = styled.div`
  align-self: center;
  justify-self: center;
`

export const Icon = (props) => {
  const {
    icon,
    size,
    onClick
  } = props
  return (
    <IconContainer>
      <FontAwesomeIcon size={size || null} icon={icon} onClick={onClick} style={{ cursor: 'pointer', margin: '0.5em' }} />
    </IconContainer>
  )
}
