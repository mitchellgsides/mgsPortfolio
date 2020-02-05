import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/colors'

export const NavLinkItem = styled(NavLink)`
  padding: 1rem;
  color: ${colors.light};
  text-decoration: none;
  font-weight: 600;
  height: 3rem;
  display: none;
  justify-content: center;
  align-items: center;
  &:hover {
      background-color: ${colors.selected};
      color: ${colors.selected_font};
  }
`
export const NavIcon = styled.div`
  cursor: pointer;
  padding: 1rem;
  font-weight: 600;
`
export const NavChildren = styled.div`
  display: none;
`
export const ParentNav = styled.div`
  cursor: pointer;
  display: flex;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  padding-right: 0;
  &:hover {
      ${NavChildren} {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
      }
      background-color: ${colors.navbar};
  }
`
export const ParentNavTitle = styled.div`
  display: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
`
export const ChildNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  align-self: center;
`
const NavBarKeyframeIn = keyframes`
    0% {
        height: 10vh;
    }
    100% {
        height: 55vh;
        background-color: red;
    }
`
export const NavBarKeyframeOut = keyframes`
    100% {
        height: 10vh;
    }
    0% {
        height: 55vh;
        background-color: red;
    }
`
export const NavBarContainer = styled.div`
  position: absolute;
  bottom: 45vh;
  left: 0vw;
  width: 20vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${colors.navbar};
  animation: ${NavBarKeyframeOut} 300ms ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  &:hover {
    animation: ${NavBarKeyframeIn} 300ms ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    ${NavLinkItem} {
        display: flex;
    }
    ${NavIcon} {
        display: none;
    }
    ${ParentNavTitle} {
        display: flex;
    }
  }
`
