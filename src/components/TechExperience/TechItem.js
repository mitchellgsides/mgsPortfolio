import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const TechItemContainer = styled.div`
  display: flex;
  flex-direction: ${(p) => p.small ? 'column' : 'row'};
  align-items: center;
  border-radius: 1rem;
  font-size: 1rem;
  padding: ${(p) => p.small ? '0.5rem' : '1rem'};
  margin: ${(p) => p.small ? '0.25rem' : '0.5rem'};
  width: ${(p) => p.small ? '50px' : '200px'};
  text-align: center;
  vertical-align: center;
  cursor: ${(p) => p.small ? '' : 'pointer'};
  background-color: ${(p) => p.selected ? colors.gunmetal : 'none'};
  padding-left: 2rem;
  padding-right: 2rem;
  &:hover {
    background-color: ${(p) => p.small ? 'none' : colors.gunmetal};
  }
`

const TechIcon = styled.img`
    padding: ${(p) => p.small ? '0.25rem' : '0.5rem'};
    margin: ${(p) => p.small ? '0.25rem' : '0.5rem'};
    width: ${(p) => p.small ? '35px ' : '50px'};
    border-radius: 5px;
    @media (max-width: 600px) {
      font-size: 0.5rem;
    }
`

export default function TechItem (props) {
  const { icon, title, onSelect, tech, currentlySelected, selected, small } = props
  return (
    <TechItemContainer selected={selected} small={small} onClick={onSelect ? () => onSelect((tech && tech.title) === (currentlySelected && currentlySelected.title) ? null : tech) : null}>
      <TechIcon small src={icon} alt={`${title} icon`} />
      {small ? <h6>{title}</h6> : <h4>{title}</h4>}
    </TechItemContainer>
  )
}
