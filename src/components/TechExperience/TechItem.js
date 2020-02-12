import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const TechItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 200px;
  text-align: center;
  vertical-align: center;
  cursor: pointer;
  &:hover {
      background-color: ${colors.gunmetal};
  }
`

const TechIcon = styled.img`
    padding: 0.5rem;
    margin: 0.5rem;
    width: 50px;
    border-radius: 5px;
`

export default function TechItem (props) {
  const { icon, title, onSelect, tech, currentlySelected } = props
  return (
    <TechItemContainer onClick={() => onSelect((tech && tech.title) === (currentlySelected && currentlySelected.title) ? null : tech)}>
      <TechIcon src={icon} alt={`${title} icon`} />
      <h4>{title}</h4>
    </TechItemContainer>
  )
}
