import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const TechItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${colors.gunmetal};
  padding: 2rem;
  margin: 0.5rem;
  text-align: center;
  vertical-align: center;
`

const TechIcon = styled.img`
    padding: 0.5rem;
    margin: 0.5rem;
    width: 50px;
    background-color: rgba(200, 200, 200, 0.3);
    border-radius: 5px;
`

export default function TechItem (props) {
  return (
    <TechItemContainer>
      <TechIcon src={props.icon} alt={`${props.title} icon`} />
      <br />
      <div>
        <h4>{props.title}</h4>
        {props.description}
      </div>
    </TechItemContainer>
  )
}
