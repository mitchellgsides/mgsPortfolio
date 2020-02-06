import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.light};
`

export const Icon = (props) => {
  const {
    icon,
    size,
    onClick
  } = props
  return (
    <StyledIcon size={size || null} icon={icon} onClick={onClick} style={{ cursor: 'pointer', margin: '0.5em' }} />
  )
}
