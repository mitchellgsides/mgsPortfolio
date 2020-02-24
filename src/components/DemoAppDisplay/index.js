import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const DemoAppContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  color: ${colors.light}
`

export default function DemoAppDisplay (props) {
  const {
    title,
    link,
    name
  } = props
  return (
    <DemoAppContainer>
      {title}
      <a style={{ textDecoration: 'none', color: 'red' }} href={link} rel='noopener noreferrer' target='_blank'>{name} Demo</a>
    </DemoAppContainer>
  )
}
