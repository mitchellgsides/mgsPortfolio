import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'
import { PageTitle } from '../../Styles'

const DescriptionBox = styled.div`
  display: flex;
  flex: 1;
  max-width: 300px;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${colors.gunmetal};
  color: ${colors.light};
`

export default function Description (props) {
  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <DescriptionBox>
        {props.description}
      </DescriptionBox>
    </>
  )
}
