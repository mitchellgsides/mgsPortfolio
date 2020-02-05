import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const IconContainer = styled.div`
  color: ${colors.light};
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
