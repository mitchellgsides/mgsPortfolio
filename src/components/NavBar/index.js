import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.navbar};
`
const NavLinkItem = styled(NavLink)`
  padding: 1rem;
  color: ${colors.light};
  text-decoration: none;
  font-weight: 800;
`

export default function NavBar (props) {
  const { routes } = props
  return (
    <NavBarContainer>
      {routes.filter(route => route.parent).map((route, index) =>
        <NavLinkItem
          key={`${index}-${route.path}-link`}
          to={route.path}
        >
          {route.title}
        </NavLinkItem>
      )}
    </NavBarContainer>
  )
}
