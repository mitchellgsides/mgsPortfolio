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
    text-shadow: 2px 2px rgb(80, 80, 80);
      font-weight: 600;
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
export const ChildNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  align-self: center;
`
export const ParentNav = styled.div`
  cursor: pointer;
  display: flex;
  height: 3rem;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  padding-right: 0;          
  animation-iteration-count: 1;
  animation-fill-mode: both;
  &:hover {
      ${NavChildren} {
          display: flex;
      }
      background-color: ${colors.navbar};
  }
`
export const ParentNavTitle = styled.div`
  display: none;
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;
  &:hover {
  text-shadow: 2px 2px rgb(120, 120, 120);
  }
`
const NavBarKeyframeIn = keyframes`
    0% {
        height: 10vh;
    }
    100% {
        height: 55vh;
        background-color: ${colors.navbar};
    }
`
const NavBarKeyframeOut = keyframes`
    100% {
        height: 10vh;
    }
    0% {
        height: 55vh;
        background-color: ${colors.navbar};
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
  animation: ${NavBarKeyframeOut} 200ms ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  &:hover {
    animation: ${NavBarKeyframeIn} 200ms ease-in;
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
