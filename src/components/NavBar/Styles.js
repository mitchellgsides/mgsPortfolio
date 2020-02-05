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
    text-shadow: 2px 2px rgba(80, 80, 80, 0.2);
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`
export const NavIcon = styled.div`
  cursor: pointer;
  color: ${colors.light};
  font-size: 20px;
  padding: 1rem;
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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: ${colors.navbar};
  }
`
export const ParentNavTitle = styled.div`
  padding: 1rem;
  cursor: pointer;
  font-weight: 600;

`
const NavBarKeyframeIn = keyframes`
    0% {
        height: 10vh;
        color: rgba(0, 0, 0, 0);

    }
    100% {
        height: 60vh;
        background-color: ${colors.navbar};
        color: '';
    }
`
const NavBarKeyframeOut = keyframes`
    100% {
        height: 10vh;
        color: rgba(0, 0, 0, 0);
    }
    0% {
        height: 60vh;
        background-color: ${colors.navbar};
    color: '';
    }
`

export const NavBarContainer = styled.div`
  position: absolute;
  bottom: 40vh;
  left: ${(p) => p.open ? 45 : 0}vw;
  width: 20vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
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
  }
`
