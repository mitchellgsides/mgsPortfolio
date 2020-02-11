import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const DescriptionBox = styled.div`
  display: flex;
  flex: 1;
  max-width: 520px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${colors.gunmetal};
  color: ${colors.light};
`

export default function Description (props) {
  return (
    <>
      <h2>{props.title}</h2>
      <DescriptionBox>
        {props.description}
      </DescriptionBox>
    </>
  )
}
